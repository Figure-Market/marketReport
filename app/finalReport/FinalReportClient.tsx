"use client";

import { useState, useRef } from "react";
import {
  Activity,
  BarChart2,
  ChevronDown,
  Cpu,
  FileText,
  Layers,
  Rocket,
  Smile,
  TrendingUp,
  Users,
  Users2,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

import { marketReportData, MarketReportData } from "@/lib/marketReportData";
import ChartRenderer from "@/components/ChartRenderer";

// ✅ Markdown renderer
const renderMarkdown = (text: string) => {
  const cleaned = text.trim();
  return (
    <div className="prose prose-sm max-w-none text-gray-700 font-light">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={{
          hr: (props) => <hr {...props} className="my-5 border-gray-200" />,
          h3: (props) => (
            <h3 {...props} className="text-xl font-semibold text-gray-800 mt-6 mb-3" />
          ),
          p: (props) => <p {...props} className="leading-7 my-3" />,
          ul: (props) => <ul {...props} className="list-disc ml-6 space-y-1" />,
          ol: (props) => <ol {...props} className="list-decimal ml-6 space-y-1" />,
          li: (props) => <li {...props} className="my-0.5" />,
        }}
      >
        {cleaned}
      </ReactMarkdown>
    </div>
  );
};

export default function FinalReportClient() {
  const router = useRouter();
  const handleLogoClick = () => router.push("/");

  const [activeSection, setActiveSection] = useState<string>("Executive Summary");
  const [activeSubsection, setActiveSubsection] = useState<string | null>(null);

  // ✅ Allowed here (inside client component wrapped in Suspense)
  const searchParams = useSearchParams();
  const companyName = searchParams?.get("company") || "Example Company";

  const subsectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const sidebarSections = [
    {
      title: "Executive Summary",
      key: "Executive Summary",
      icon: FileText,
      items: [
        "Product Overview",
        "Key Market Findings",
        "Product Opportunities",
        "Challenges & Risks",
        "Strategic Recommendation",
      ],
    },
    // ... (keep rest of your sections unchanged)
  ];

  const sectionData = marketReportData[activeSection as keyof MarketReportData];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-green-600 to-blue-700 text-white p-4 overflow-y-auto">
        <div
          className="flex items-center mb-8 cursor-pointer"
          onClick={handleLogoClick}
        >
          <img
            src="images/logo.jpg"
            alt="Small Logo"
            className="w-10 h-10 mr-2 rounded-full"
          />
          <h1 className="text-2xl font-bold font-poppins">Figurush</h1>
        </div>

        {sidebarSections.map((section) => (
          <div key={section.title} className="mb-6">
            <button
              className="flex items-center w-full text-left text-lg font-semibold font-roboto hover:text-gray-200"
              onClick={() => {
                setActiveSection(section.title);
                setActiveSubsection(null);
              }}
            >
              <section.icon className="w-5 h-5 mr-2" />
              <span>{section.title}</span>
              <ChevronDown className="w-4 h-4 ml-auto" />
            </button>

            {activeSection === section.title && (
              <ul className="mt-2 ml-6 space-y-1">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className={`text-sm cursor-pointer font-light ${
                      activeSubsection === item
                        ? "text-yellow-300 font-bold"
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => {
                      setActiveSubsection(item);
                      subsectionRefs.current[item]?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 p-10 overflow-y-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-6 font-poppins">
          {companyName}
        </h1>
        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
          {activeSection}
        </h2>

        {sectionData ? (
          <>
            {Object.entries(sectionData)
              .filter(([key]) => key !== "charts")
              .map(([subKey, content]) => (
                <div
                  key={subKey}
                  ref={(el) => {
                    subsectionRefs.current[subKey] = el;
                  }}
                  className={`mb-8 p-6 rounded-md ${
                    activeSubsection === subKey
                      ? "bg-gray-100 border border-gray-300"
                      : ""
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-gray-700 font-roboto">
                    {subKey}
                  </h3>

                  {/* subsection content */}
                  {typeof content === "string" ? (
                    renderMarkdown(content)
                  ) : Array.isArray(content) ? (
                    <ul className="list-disc list-inside text-gray-600 space-y-1 pl-5">
                      {content.map((point, index) => (
                        <li key={index} className="text-md font-light">
                          {typeof point === "string"
                            ? point
                            : "title" in (point as any)
                            ? (point as any).title
                            : JSON.stringify(point)}
                        </li>
                      ))}
                    </ul>
                  ) : typeof content === "object" && content !== null ? (
                    "headline" in content && "points" in content ? (
                      <div className="text-gray-600">
                        <p className="text-md font-medium mb-2">
                          {(content as any).headline}
                        </p>
                        <ul className="list-disc list-inside space-y-1 pl-5">
                          {(content as any).points.map((point: string, index: number) => (
                            <li key={index} className="text-md font-light">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="text-gray-600 space-y-4">
                        {Object.entries(content as Record<string, any>).map(
                          ([key, value], idx) => (
                            <div key={idx}>
                              <p className="text-md font-medium mb-2">{key}</p>
                              {Array.isArray(value) ? (
                                <ul className="list-disc list-inside pl-5 space-y-1">
                                  {value.map((item, i) => (
                                    <li key={i} className="text-md font-light">
                                      {typeof item === "string"
                                        ? item
                                        : JSON.stringify(item)}
                                    </li>
                                  ))}
                                </ul>
                              ) : typeof value === "string" ? (
                                renderMarkdown(value)
                              ) : typeof value === "object" && value !== null ? (
                                <div className="ml-4 border-l pl-4 space-y-1">
                                  {Object.entries(value).map(
                                    ([innerKey, innerValue], j) => (
                                      <div key={j}>
                                        <p className="text-sm font-semibold">{innerKey}</p>
                                        {typeof innerValue === "string" ? (
                                          renderMarkdown(innerValue)
                                        ) : (
                                          <p className="text-sm text-gray-600">
                                            {JSON.stringify(innerValue)}
                                          </p>
                                        )}
                                      </div>
                                    )
                                  )}
                                </div>
                              ) : (
                                <p className="text-sm italic text-gray-500">
                                  Unsupported nested format
                                </p>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    )
                  ) : (
                    <p className="text-gray-500 italic">Unsupported content format</p>
                  )}

                  {/* inline charts */}
                  {"charts" in sectionData &&
                    sectionData.charts
                      ?.filter((chart) => chart.subsection === subKey)
                      .map((spec) => (
                        <div key={spec.id} className="mt-6 p-4 rounded-lg border bg-white">
                          <ChartRenderer spec={spec} />
                        </div>
                      ))}
                </div>
              ))}
          </>
        ) : (
          <p className="text-gray-500">No data available for {activeSection}</p>
        )}
      </div>
    </div>
  );
}
