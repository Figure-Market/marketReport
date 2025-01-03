"use client";

import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AdGallery from '@/components/ui/adGallery';
import UpperNavigation from '@/components/upperNavigation';

export default function Home() {

  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleDropdownItemClick = (path) => {
    router.push(path);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div>
        <UpperNavigation/>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Automate Your Market Reports & <span className="text-blue-600">Boost Your Ads</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The future of marketing intelligence is here. Automate reports, generate targeted ads, and grow your business.
          </p>
          <p className="text-gray-600 mb-8">
            Discover the power of AI-driven analytics and advertisement automation for data-driven decisions and enhanced ROI.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => router.push('/reportInput')}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Get Started
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
              Contact Us
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="p-4 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 shadow-lg flex justify-center">
            <Image
              src="/images/hero.jpg"
              alt="AI Report Automation"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section className="bg-white py-16 text-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Streamline Your <span className="text-blue-600">Market Intelligence</span>
          </h2>

          {/* Feature Highlights */}
          <div className="flex justify-center space-x-4 mb-8">
            <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 focus:outline-none focus:border-blue-700">
              Market Reports
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-blue-600 focus:outline-none">
              Ad Creation
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-blue-600 focus:outline-none">
              Data Insights
            </button>
          </div>

          {/* Main Feature */}
          <div className="text-center mb-16">
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Automate comprehensive, real-time market reports with AI-driven insights to stay ahead of competitors. Our system gathers relevant data, provides actionable insights, and presents it in a digestible format.
            </p>
            <div className="relative mx-auto w-full max-w-4xl">
              {/* <Image
                src="/images/first.jpg"
                alt="Automated Reports"
                layout="responsive"
                width={800}
                height={400}
                className="rounded-lg shadow-xl"
              /> */}
              <AdGallery />
            </div>
          </div>

          {/* Secondary Features */}
          <div className="space-y-16">
            {/* Automated Market Reports */}
            <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
              <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4">Automated Market Reports</h3>
                <p className="text-gray-600 mb-4">
                  Generate up-to-date market reports in minutes, tailored to your specific business needs. Save time and reduce the complexity of data gathering with our intelligent automation tools.
                </p>
                <button className="text-blue-600 font-semibold hover:underline">Learn More</button>
              </div>
              <div className="md:w-1/2">
                <div className="relative w-full">
                  <Image
                    src="/images/hero.jpg"
                    alt="Automated Reports"
                    layout="responsive"
                    width={400}
                    height={200}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* AI-Driven Ads */}
            {/* <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8 space-y-8 md:space-y-0">
              <div className="md:w-1/2 text-center md:text-right flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4">AI-Driven Ad Creation</h3>
                <p className="text-gray-600 mb-4">
                  Use AI to automatically generate, optimize, and personalize ads for your target audience. Enhance engagement and conversions with ads that are tailored to user behavior and trends.
                </p>
                <button className="text-blue-600 font-semibold hover:underline">Learn More</button>
              </div>
              <div className="md:w-1/2">
                <div className="relative w-full">
                  <Image
                    src="/images/hero.jpg"
                    alt="AI-Generated Ads"
                    layout="responsive"
                    width={400}
                    height={200}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div> */}
          </div>


          <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold mb-4">Generate</h2>
          <Image
              src="https://cdn.prod.website-files.com/63d0cf0e80f1f251da5f0157/652f0bac7a58b71544f15a49_Group%20427322161.png"
              alt="On Brand Example"
              width={1200.5} // Corresponds to the width in the original HTML
              height={477} // Corresponds to the height in the original HTML
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 94vw, (max-width: 1919px) 95vw, 1200px"
              className="new-home-on-brand-pic for-desk"
              loading="lazy" // Lazy loading by default in Next.js
            />
          </div>


          {/* Extra Features */}
          <div className="text-center mt-16">
            <h3 className="text-3xl font-semibold mb-4">Take Control of Your Data</h3>
            <p className="text-gray-600 mb-6">
              Leverage the power of AI for unparalleled market insights and advertisement creation. Our platform helps you harness data to make informed decisions, driving business growth.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">Start Free Trial</button>
          </div>
        </div>
      </section>

      {/* Business Analytics Section */}
      <section className="w-full bg-gradient-to-b from-green-500 to-blue-600 text-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8">
          {/* Text Section */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-4">Experience AI-Powered Business Analytics</h2>
            <p className="text-gray-200 mb-6">
              Unlock AI-driven features to transform data into actionable insights. Start your free trial today and see how our platform can revolutionize your business operations.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <ArrowRight className="text-green-300 mr-2" />
                <span>AI-powered, real-time data insights</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="text-green-300 mr-2" />
                <span>Data-driven decision-making tools</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="text-green-300 mr-2" />
                <span>Unified model for data and AI analytics</span>
              </li>
            </ul>
            <button className="bg-white text-green-600 px-6 py-2 rounded-md hover:bg-gray-200">
              Get a Demo
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="rounded-lg bg-white p-4 shadow-lg">
              <Image src="/images/belowSide.png" alt="AI Analytics" width={500} height={300} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-green-600">Company Overview</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Press & Media</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-green-600">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Webinars & Events</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Support & Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-green-600">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Technical Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Feedback</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Community Forum</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-green-600">Terms of Use</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; 2024 Figurush. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
