"use client";

import { useState } from "react";
import { Search, Mail, Phone, MessageCircle, ChevronDown } from "lucide-react";
import UpperNavigation from "@/components/upperNavigation";

export default function Support() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faq = [
    {
      question: "How do I generate my first market report?",
      answer:
        "Go to the Report Input page, fill in your product details, and our AI will generate a professional market report within minutes.",
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer:
        "Yes, you can change your subscription plan anytime from the Pricing page or your account dashboard.",
    },
    {
      question: "Is my data safe and secure?",
      answer:
        "Absolutely. We use encryption, secure servers, and comply with global data protection standards to ensure your data stays private.",
    },
    {
      question: "Do you offer support for enterprise clients?",
      answer:
        "Yes, enterprise clients receive priority 24/7 support with a dedicated account manager. Contact sales for details.",
    },
  ];

  const categories = [
    { title: "Account", desc: "Manage your profile, password, and settings." },
    { title: "Billing", desc: "Learn about invoices, payments, and refunds." },
    { title: "Reports", desc: "How to generate, customize, and export reports." },
    { title: "Ads", desc: "Guides for AI-powered ad creation & optimization." },
    { title: "Analytics", desc: "Understanding dashboards and insights." },
    { title: "Integrations", desc: "Connecting with other tools & platforms." },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <UpperNavigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 mt-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          How can we <span className="text-blue-600">help you?</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Find answers, explore guides, or get in touch with our support team.
        </p>
        <div className="flex justify-center">
          <div className="flex w-full max-w-lg">
            <input
              type="text"
              placeholder="Search for help..."
              className="px-4 py-3 w-full border rounded-l-md focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 rounded-r-md hover:bg-blue-700">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-6 pb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
            <p className="text-gray-600">{cat.desc}</p>
            <button className="text-blue-600 mt-4 hover:underline">
              Learn More
            </button>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, idx) => (
              <div
                key={idx}
                className="border rounded-lg bg-white shadow-sm"
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-left font-medium"
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                >
                  {item.question}
                  <ChevronDown
                    className={`w-5 h-5 transform transition ${
                      openFAQ === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === idx && (
                  <div className="px-4 pb-4 text-gray-600">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Still need <span className="text-blue-600">help?</span>
        </h2>
        <p className="text-gray-600 mb-10">
          Our support team is available to assist you. Choose a channel below.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="p-6 border rounded-xl shadow-sm w-64">
            <Mail className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get a reply within 24 hours
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Send Email
            </button>
          </div>
          <div className="p-6 border rounded-xl shadow-sm w-64">
            <MessageCircle className="w-10 h-10 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-sm text-gray-600 mb-4">
              Available Mon–Fri, 9AM–6PM
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Start Chat
            </button>
          </div>
          <div className="p-6 border rounded-xl shadow-sm w-64">
            <Phone className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-sm text-gray-600 mb-4">
              Speak with our support team
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 text-center text-gray-600">
        <p>&copy; 2024 MarketFigure. All rights reserved.</p>
      </footer>
    </div>
  );
}
