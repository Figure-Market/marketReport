"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useRouter } from 'next/navigation';
import UpperNavigation from "@/components/upperNavigation";

export default function Home() {
  const [inputValue, setInputValue] = useState(""); 
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Submitted:", inputValue);
    router.push('/finalReport');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-50 to-gray-100">
      <UpperNavigation/>
      {/* Main Content Wrapper */}
      <div className="flex-grow flex flex-col items-center px-8 py-12 mt-16">

        {/* Header */}
        {/* <header className="mb-12 text-center w-full">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight font-inter">
            Figurush <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">/AI Market Reports</span>
          </h1>
        </header> */}

        {/* Main Content */}
        <main className="w-full max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6 font-lato">
            Automate Your Market Insights.<br />AI-Powered, Hassle-Free.
          </h2>
          <p className="text-base text-gray-600 mb-8 font-inter">
            Leverage AI tools to generate insightful market reports effortlessly.<br />
            Focus on scaling your business, while we handle the data.
          </p>

          {/* CTA */}
          <a href="#learn-more" className="text-blue-600 hover:text-blue-800 flex items-center justify-center mb-8">
            See how AI can work for you
            <ChevronDown className="ml-1 w-5 h-5" />
          </a>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mb-12">
            <div className="bg-blue-300/10 backdrop-blur-lg rounded-xl shadow-lg p-6 mx-auto max-w-3xl">
              <textarea
                rows={4}
                placeholder="Describe your market or report needs..."
                className="w-full p-4 text-gray-700 rounded-lg bg-white bg-opacity-80 focus:outline-none resize-none shadow-inner"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                type="submit"
                className="mt-6 bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-transform transform hover:scale-105 shadow-lg w-full"
              >
                Generate Report
              </button>
            </div>
          </form>

          {/* Idea Cards (Glassmorphism Effect) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Market Trends",
                content: "Explore how AI is revolutionizing the e-commerce landscape with data-driven insights on consumer behavior, trends, and market forecasts."
              },
              {
                title: "AI-driven Ad Campaign Analysis",
                content: "Leverage AI to optimize your ad campaigns with actionable insights based on real-time market data, enhancing ROI and targeting."
              },
              {
                title: "Consumer Behavior Insights",
                content: "Understand the evolving preferences of consumers across different demographics, enabling better product positioning and marketing strategies."
              },
              {
                title: "Tech Industry Growth Breakdown",
                content: "Get an in-depth analysis of the tech industry's growth, highlighting the key drivers and emerging trends shaping the future."
              },
              {
                title: "Retail Market Predictions",
                content: "Discover how AI is predicting future trends in retail, offering valuable insights to stay ahead of the competition."
              },
              {
                title: "Financial Sector AI Impact",
                content: "Analyze how AI is transforming the financial industry with advanced algorithms for risk management, trading, and market analysis."
              },
            ].map((idea, index) => (
                <div
                key={index}
                className="bg-white/30 backdrop-blur-md rounded-xl shadow-lg p-6 text-gray-800 transition-transform transform hover:scale-105 hover:shadow-[0_4px_15px_5px_rgba(56,189,248,0.3)] flex flex-col justify-center items-center text-center border border-white/20"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)",
                  minHeight: "200px",
                }}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{idea.title}</h3>
                <p className="text-sm text-gray-600">{idea.content}</p>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-6 text-center mt-16 rounded-t-xl">
        <p className="font-medium">&copy; 2024 Figurush. All rights reserved.</p>
      </footer>

    </div>
  );
}
