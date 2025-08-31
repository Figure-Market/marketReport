"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import UpperNavigation from "@/components/upperNavigation";

export default function Blogs() {
  const blogPosts = [
    {
      title: "AI is Transforming Market Research",
      description:
        "Discover how artificial intelligence is revolutionizing data collection, trend analysis, and competitor insights.",
      category: "AI & Market",
      date: "March 5, 2024",
      image: "/data/one.jpg",
    },
    {
      title: "Top Marketing Trends in 2024",
      description:
        "From personalization to AI-driven ads, explore the biggest marketing trends shaping the industry this year.",
      category: "Marketing",
      date: "Feb 22, 2024",
      image: "/data/two.jpg",
    },
    {
      title: "Why Data-Driven Ads Work Better",
      description:
        "Learn why data-powered advertising achieves higher ROI and better engagement compared to traditional campaigns.",
      category: "Data Insights",
      date: "Feb 10, 2024",
      image: "/data/eleven.jpg",
    },
    {
      title: "Expanding into Tier-2 Cities with AI",
      description:
        "Uncover opportunities in India’s growing Tier-2/3 cities using AI-powered consumer behavior analytics.",
      category: "Business Growth",
      date: "Jan 30, 2024",
      image: "/data/seven.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <UpperNavigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 mt-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Insights, Trends & <span className="text-blue-600">Ideas</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest articles, case studies, and market
          insights curated by our experts.
        </p>
      </section>

      {/* Featured Blog */}
      <section className="container mx-auto px-6 mb-20">
        <div className="rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image
              src="/data/fourteen.jpg"
              alt="Featured Blog"
              width={600}
              height={400}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="md:w-1/2 bg-gradient-to-r from-green-500 to-blue-600 text-white p-10 flex flex-col justify-center">
            <span className="text-sm uppercase tracking-wide mb-2">
              Featured
            </span>
            <h2 className="text-3xl font-bold mb-4">
              The Future of AI in Market Intelligence
            </h2>
            <p className="mb-6 text-lg opacity-90">
              Explore how businesses are using AI to gain competitive advantage
              with faster, smarter market decisions.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 w-fit">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-6 pb-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2 bg-white flex flex-col"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={300}
              className="object-cover h-52 w-full"
            />
            <div className="p-6 flex flex-col flex-1">
              <span className="text-sm text-blue-600 font-semibold mb-2">
                {post.category}
              </span>
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-gray-600 flex-1">{post.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">{post.date}</span>
                <button className="flex items-center text-blue-600 hover:underline">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Want More Insights?
        </h2>
        <p className="text-lg mb-8">
          Subscribe to our newsletter and get weekly updates straight to your
          inbox.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-l-md w-64 text-gray-900"
          />
          <button className="bg-white text-blue-600 px-6 py-3 rounded-r-md font-semibold hover:bg-gray-100">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 text-center text-gray-600">
        <p>&copy; 2024 MarketFigure. All rights reserved.</p>
      </footer>
    </div>
  );
}
