"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", inputValue);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-200 flex flex-col items-center px-4 py-12">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight font-inter">
          Figurush <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">/AI Market Reports</span>
        </h1>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-3xl text-center">
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
          <div className="bg-white/30 backdrop-blur-lg rounded-xl shadow-lg p-6 mx-auto max-w-xl">
            <textarea
              rows={4}
              placeholder="Describe your market or report needs..."
              className="w-full p-4 text-gray-700 rounded-lg bg-white bg-opacity-70 focus:outline-none resize-none shadow-inner"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "A market report on the latest e-commerce trends",
            "AI-driven analysis for targeted ad campaigns",
            "Insights on consumer behavior for retail markets",
            "A detailed breakdown of the tech industry growth",
          ].map((idea, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-lg rounded-lg shadow-lg p-6 text-gray-800 transition-transform transform hover:scale-105"
              style={{ height: "150px", maxWidth: "350px", margin: "0 auto" }}
            >
              {idea}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-6 text-center mt-16 rounded-t-xl">
        <p className="font-medium">&copy; 2024 Figurush. All rights reserved.</p>
      </footer>
    </div>
  );
}
