"use client";

import { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import {
    ChevronDown,
    FileText,
    BarChart2,
    Rocket,
    Package,
    Users,
    Layers,
    TrendingUp,
    Cpu,
    UserCheck,
    Shield,
    Settings,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function BusinessAnalysis() {
    const router = useRouter();

    const handleLogoClick = () => {
      router.push("/"); // Redirects to home page
    };

    const [activeSection, setActiveSection] = useState<string>("Executive Summary");
    const [activeSubsection, setActiveSubsection] = useState<string | null>(null);

    // Ref to track and scroll to sections
    const subsectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const chartRef1 = useRef<HTMLCanvasElement | null>(null);
    const chartRef2 = useRef<HTMLCanvasElement | null>(null);
    const marketValueChart = useRef<Chart | null>(null);
    const unitsSoldChart = useRef<Chart | null>(null);

    interface MarketReportData {
        [key: string]: {
            [subKey: string]: string;
        };
    }

    // Store the dictionary data (the market report data)
    const marketReportData: MarketReportData = {
        "Executive Summary": {
            "Product Overview":
                "VR Glasses, designed for immersive virtual reality experiences, offer a cutting-edge platform for both entertainment and professional use. These glasses feature:\n\n- High-definition visual display: Optimized for ultra-clear imagery with a 120-degree field of vision.\n- Lightweight ergonomic design: Ensures comfort during extended use.\n- Advanced motion tracking: Utilizes sensors to precisely capture head movements for a more responsive user experience.\n- Integrated audio: Built-in surround sound delivers a truly immersive experience.\n- Wireless connectivity: Seamlessly pairs with smartphones, consoles, and computers via Bluetooth or Wi-Fi.\n\nUnique Value Proposition: The combination of top-tier resolution, high-performance motion sensors, and ergonomic design sets these VR Glasses apart, making them a versatile solution for gaming, virtual tours, simulations, education, and remote work environments.",

            "Key Market Findings":
                "The global VR market is expected to experience exponential growth, with VR hardware being a major driver. The following insights highlight key findings related to the VR Glasses market:\n\nMarket Size: The global virtual reality market size was valued at <b>USD 21.83 billion</b> in 2022 and is projected to grow at a compound annual growth rate (CAGR) of <b>15.3%</b> from 2023 to 2028.\n\nTarget Audience: Key demographics include tech-savvy consumers aged 18-34, gaming enthusiasts, education institutions, and corporate professionals looking for virtual collaboration tools.\n\nCompetitive Landscape: Major competitors in the market include Oculus (Meta), HTC Vive, Sony PlayStation VR, and Samsung Gear VR. While these brands dominate, there is significant room for mid-range and feature-enhanced products that address unmet needs, such as improved portability and higher comfort levels.\n\nGrowth Trends: The integration of VR in industries beyond entertainment, such as education, healthcare, real estate, and virtual tourism, is a key driver of future demand.\n\nSee Graph 1: Projected Market Growth (2022–2028)",

            "Product Opportunities":
                "Several opportunities exist for VR Glasses to expand market reach:\n\nUnmet Customer Needs: Survey data indicates that 45% of VR users desire lighter, more comfortable devices for extended use. Offering a more ergonomic solution could attract this untapped segment.\n\nEducational Applications: The global adoption of VR in education is forecasted to grow by 18% annually, creating a potential avenue for VR Glasses to be marketed as a learning tool.\n\nExpansion in Corporate Training: Companies are increasingly leveraging VR for employee training, onboarding, and remote collaboration. Expanding VR Glasses into enterprise-level solutions with customizable content could position the product as a go-to device for business solutions.\n\nSee Table 1: Emerging Market Applications for VR Glasses",

            "Challenges & Risks":
                "While the VR Glasses market is poised for growth, several challenges must be addressed:\n\nHigh Competition: Established brands like Oculus and HTC dominate market share, making it difficult for new entrants to gain traction.\n\nCost Sensitivity: VR products are often viewed as luxury items, and high pricing could limit adoption, especially in emerging markets where cost sensitivity is a key factor.\n\nAdoption Barriers: Despite growing awareness, consumer reluctance to adopt VR, citing discomfort, motion sickness, and a lack of appealing content, remains an obstacle.\n\nRegulatory Concerns: Varying international regulations regarding data privacy, especially in applications involving personal and biometric data, could pose compliance challenges.\n\nSee Graph 2: Competitive Positioning and Consumer Adoption Barriers",

            "Strategic Recommendation":
                "To enhance the market performance of VR Glasses, the following strategies are recommended:\n\nFocus on Comfort and Accessibility: Redesign the product for lightweight and ergonomic comfort, targeting underserved customer needs. Additionally, offering a lower-cost model for budget-conscious consumers can open new market segments.\n\nExpand into Education and Corporate Use: Create partnerships with educational institutions and corporations to market VR Glasses as a professional tool for virtual training and collaboration.\n\nImprove Content Offerings: Partner with content creators to develop exclusive experiences that demonstrate the value of VR in education, entertainment, and remote work, driving consumer interest.\n\nTarget Emerging Markets: Explore pricing strategies and regional marketing campaigns aimed at expanding into high-growth areas like Southeast Asia and Latin America.\n\nSee Case Study: Oculus Go’s Penetration Strategy in Emerging Markets"
        },
        "Key Market Findings": {
            "Trends in the market sector":
                "The AR glasses market is growing rapidly due to high demand for immersive experiences...",
        },
        "Product Opportunities": {
            "MVP Roadmap":
                "The Minimum Viable Product (MVP) for AR glasses should include core functionalities...",
        },
        "Challenges & Risks": {
            "Elevator pitch":
                "AR Glasses represent a cutting-edge advancement in wearable technology...",
        },
    };

    const sidebarSections = [
        {
            title: "Executive Summary",
            icon: FileText,
            items: [
                "Product Overview",
                "Key Market Findings",
                "Product Opportunities",
                "Challenges & Risks",
                "Strategic Recommendation"
            ],
        },
        {
            title: "Introduction",
            icon: Rocket,
            items: [
                "Product Definition & Scope",
                "Purpose of the Report",
                "Methodology",
                "Data Collection Methods",
                "Analytical Tools Used",
                "Assumption & Limitation"
            ],
        },
        {
            title: "Product Overview",
            icon: Package,
            items: [
                "Product Definition & Characteristic",
                "Product Application",
                "Market Segmentation",
                "Product Lifecycle"
            ],
        },
        {
            title: "Market Dynamics",
            icon: BarChart2,
            items: [
                "Market Drivers",
                "Technological Innovations in the product",
                "Increasing Demand in specific Applications",
                "Regulatory Support",
                "Market Restraints",
                "Market Opportunities",
                "Market Challenges"
            ],
        },
        {
            title: "Competitive Landscape",
            icon: Users,
            items: [
                "Market Share Analysis",
                "Key Competitors",
                "Company Profiles",
                "Product Portfolio",
                "Pricing Strategy",
                "Financial Performance",
                "Recent Development",
                "SWOT Analysis",
                "Competitive Benchmarking",
                "Performance Comparison",
                "Market Positioning"
            ]
        },
        {
            title: "Product Segementation Analysis",
            icon: Layers,
            items: [
                "By Product Variant",
                "By Application",
                "By End-User",
                "By Region",
            ]
        },
        {
            title: "Market Forecast",
            icon: TrendingUp,
            items: [
                "Short Term",
                "Long Term",
                "Product Projections by Segmentation",
                "Scenario Analysis",
                "Sensitivity Analysis",
            ]
        },
        {
            title: "Technological Trends",
            icon: Cpu,
            items: [
                "Emerging Technologies Relevant to the Product",
                "Innovations in Product Design and Manufacturing",
                "Impact of AI, IoT, and Automation",
                "Sustainability and Green Technologies in Product Development",
                "Adoption of New Materials",
            ]
        },
        {
            title: "Consumer Behaviour Analysis",
            icon: UserCheck,
            items: [
                "Target Audience Profile",
                "Demographics",
                "Psychographics",
                "Buying Behaviour",
                "Purchase Frequency",
                "Brand Loyalty",
                "Influences on Purchase Decisions",
                "Consumers Feedback & Satisfaction",
                "Influence of Digital Platform & E-commerce"
            ]
        },
        {
            title: "Regulatory Environment",
            icon: Shield,
            items: [
                "Key Regulations & Standards Affecting the Product",
                "Compliance Requirement",
                "Certification & Testing",
                "Safety & Environemental Standards",
                "Impact of Trade Policies",
                "Import/Export Restrictions",
                "Regulatory Developments",
                "Recent Changes in Legislation",
                "Future Regulatory Outlook",
            ]
        },
    ];

    useEffect(() => {
        if (activeSubsection && subsectionRefs.current[activeSubsection]) {
            // Scroll to the subsection if clicked
            subsectionRefs.current[activeSubsection]?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [activeSubsection]);



    useEffect(() => {
        if (activeSection === "Executive Summary") {
            const data = [
                { Year: 2022, Market_Value: 15.2, Units_Sold: 721 },
                { Year: 2023, Market_Value: 13.9, Units_Sold: 843 },
                { Year: 2024, Market_Value: 18.5, Units_Sold: 897 },
                { Year: 2025, Market_Value: 22.8, Units_Sold: 922 },
                { Year: 2026, Market_Value: 27.6, Units_Sold: 1006 }
            ];

            const labels = data.map(item => item.Year);
            const marketValues = data.map(item => item.Market_Value);
            const unitsSold = data.map(item => item.Units_Sold);

            // Destroy previous charts if they exist
            if (marketValueChart.current) {
                marketValueChart.current.destroy();
            }
            if (unitsSoldChart.current) {
                unitsSoldChart.current.destroy();
            }

            // Market Value Line Chart
            if (chartRef1.current) {
                marketValueChart.current = new Chart(chartRef1.current, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Market Value (in USD billions)',
                            data: marketValues,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderWidth: 2,
                            tension: 0.3,
                            fill: true
                        }]
                    },
                    options: {
                        responsive: true,
                        animation: {
                            duration: 1500,
                            easing: 'easeInOutBounce'
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Market Value (in USD billions)'
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: 'Year'
                                }
                            }
                        }
                    }
                });
            }

            // Units Sold Bar Chart
            if (chartRef2.current) {
                unitsSoldChart.current = new Chart(chartRef2.current, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Units Sold (in thousands)',
                            data: unitsSold,
                            backgroundColor: 'rgba(153, 102, 255, 0.6)',
                            borderColor: 'rgba(153, 102, 255, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        animation: {
                            duration: 1500,
                            easing: 'easeInOutBounce'
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Units Sold (in thousands)'
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: 'Year'
                                }
                            }
                        }
                    }
                });
            }
        }
    }, [activeSection, activeSubsection]);



    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Sidebar */}
            <div className="w-64 bg-gradient-to-b from-green-600 to-blue-700 text-white p-4 overflow-y-auto">
                <div className="flex items-center mb-8 cursor-pointer"
                onClick={handleLogoClick}>
                    <img src="images/logo.jpg" alt="Small Logo" className="w-10 h-10 mr-2 rounded-full" />
                    <h1 className="text-2xl font-bold font-poppins">Figurush</h1>
                </div>
                {sidebarSections.map((section) => (
                    <div key={section.title} className="mb-6">
                        <button
                            className="flex items-center w-full text-left text-lg font-semibold font-roboto hover:text-gray-200"
                            onClick={() => {
                                setActiveSection(section.title);
                                setActiveSubsection(null); // Reset subsection when changing sections
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
                                        className={`text-sm cursor-pointer font-light ${activeSubsection === item
                                            ? "text-yellow-300 font-bold"
                                            : "text-gray-300 hover:text-white"
                                            }`}
                                        onClick={() => setActiveSubsection(item)}
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
                <div className="mb-8">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
                        {activeSection}
                    </h2>
                    {marketReportData[activeSection] &&
                        Object.entries(marketReportData[activeSection]).map(
                            ([subSectionTitle, subSectionContent], index) => (
                                <div
                                    key={subSectionTitle}
                                    ref={(el) =>
                                        (subsectionRefs.current[subSectionTitle] = el)
                                    }
                                    className={`mb-8 p-6 rounded-md ${activeSubsection === subSectionTitle
                                        ? "bg-gray-100 border border-gray-300"
                                        : ""
                                        }`}
                                >
                                    <h3 className="text-2xl font-semibold mb-3 text-gray-700 font-roboto">
                                        {subSectionTitle}
                                    </h3>
                                    {/* <p className="text-md text-gray-600 leading-relaxed font-light">
                                        {subSectionContent.split("\n").map((line, i) => (
                                            <span key={i}>
                                                {line}
                                                <br />
                                            </span>
                                        ))}
                                    </p> */}
                                    <p className="text-md text-gray-600 leading-relaxed font-light">
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: subSectionContent.replace(/\n/g, "<br />"),
                                            }}
                                        />
                                    </p>

                                    {/* Insert charts after Key Market Findings */}
                                    {activeSection === "Executive Summary" && subSectionTitle === "Key Market Findings" && (
                                        <div>
                                            <canvas ref={chartRef1} id="marketValueChart" style={{ marginTop: '40px' }}></canvas>
                                        </div>
                                    )}
                                    {/* Insert charts after Product Opportunities */}
                                    {activeSection === "Executive Summary" && subSectionTitle === "Product Opportunities" && (
                                        <div>
                                            <canvas ref={chartRef2} id="unitsSoldChart" style={{ marginTop: '40px' }}></canvas>
                                        </div>
                                    )}

                                </div>
                            )
                        )}
                </div>
            </div>
        </div>
    );
}