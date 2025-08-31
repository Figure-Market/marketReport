"use client";

import { CheckCircle } from "lucide-react";
import UpperNavigation from "@/components/upperNavigation";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹999",
      period: "/month",
      description: "Perfect for individuals and startups just getting started with AI-driven market insights.",
      features: [
        "Basic Market Reports (5/month)",
        "AI Ad Suggestions",
        "Email Support",
        "Access to Dashboard"
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "₹2,999",
      period: "/month",
      description: "Best for growing teams who need deeper insights and automated reports.",
      features: [
        "Unlimited Market Reports",
        "Ad Creation & Optimization",
        "Priority Email + Chat Support",
        "Advanced Analytics Dashboard",
        "Export Reports (PDF/Excel)"
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for enterprises with complex needs and large-scale reporting.",
      features: [
        "Dedicated Account Manager",
        "Custom Integrations",
        "On-premise Deployment Option",
        "24/7 Priority Support",
        "Unlimited Team Members"
      ],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <UpperNavigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 mt-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Choose the <span className="text-blue-600">Right Plan</span> for You
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Simple, transparent pricing to help you scale smarter. No hidden fees. Cancel anytime.
        </p>
      </section>

      {/* Pricing Plans */}
      <section className="container mx-auto px-6 pb-20 grid md:grid-cols-3 gap-10">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-lg p-8 flex flex-col transition transform hover:-translate-y-2 hover:shadow-2xl ${
              plan.highlight ? "bg-gradient-to-r from-green-500 to-blue-600 text-white" : "bg-white border"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
            <p className="mb-6 text-sm opacity-90">{plan.description}</p>
            <div className="text-4xl font-bold mb-6">
              {plan.price} <span className="text-lg font-medium">{plan.period}</span>
            </div>
            <ul className="flex-1 space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <CheckCircle
                    className={`w-5 h-5 ${
                      plan.highlight ? "text-green-200" : "text-green-600"
                    }`}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-md font-semibold ${
                plan.highlight
                  ? "bg-white text-blue-600 hover:bg-gray-200"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
            </button>
          </div>
        ))}
      </section>

      {/* Call To Action */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Scale Smarter?</h2>
        <p className="text-lg mb-8">Join hundreds of businesses already leveraging MarketFigure for AI-driven growth.</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100">
          Start Free Trial
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 text-center text-gray-600">
        <p>&copy; 2024 MarketFigure. All rights reserved.</p>
      </footer>
    </div>
  );
}
