"use client"

import { useState } from 'react'
import { ChevronDown, FileText, Users, TrendingUp, Rocket, Settings, DollarSign } from 'lucide-react'

export default function BusinessAnalysis() {
  const [activeSection, setActiveSection] = useState('Business overview')

  const sidebarSections = [
    { title: 'Business overview', icon: Users, items: ['Business viability', 'Business overview', 'Monetization strategies', 'User pain points', 'Revenue and market opportunities', 'Potential risks', 'Why now', 'Validate unknown factors'] },
    { title: 'Market research', icon: TrendingUp, items: ['Trends in the market sector', 'Competitive analysis', 'Market size and growth potential', 'Consumer behavior', 'Customer segmentation', 'Regulatory environment', 'Key considerations'] },
    { title: 'Launch and scale', icon: Rocket, items: ['MVP Roadmap', 'Hiring roadmap and cost', 'Operational cost', 'Tech Stack', 'Code/No Code', 'AI/ML Implementation', 'Analytics and metrics', 'Distribution channels', 'Early user acquisition strategy', 'Late game user acquisition strategy', 'Partnerships and Collaborations', 'Customer Retention', 'Guerilla marketing ideas', 'Website FAQs', 'SEO Terms', 'Google/Text Ad Copy'] },
    { title: 'Raise capital', icon: DollarSign, items: ['Elevator pitch', 'YC-style pitch deck', 'Pitch preparation', 'Valuation', 'Funding required for seed/pre-seed stage', 'Investor outreach', 'Investor concerns', 'Business introduction'] },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-green-600 to-blue-700 text-white p-4 overflow-y-auto">
        <div className="flex items-center mb-8">
          <Settings className="w-8 h-8 mr-2" />
          <h1 className="text-xl font-bold">DimeADozen.AI</h1>
        </div>
        {sidebarSections.map((section) => (
          <div key={section.title} className="mb-4">
            <button
              className="flex items-center w-full text-left"
              onClick={() => setActiveSection(section.title)}
            >
              <section.icon className="w-5 h-5 mr-2" />
              <span>{section.title}</span>
              <ChevronDown className="w-4 h-4 ml-auto" />
            </button>
            {activeSection === section.title && (
              <ul className="mt-2 ml-6 space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="text-sm">{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between mb-8">
          <button className="px-4 py-2 bg-white text-blue-600 rounded-md shadow flex items-center">
            <Settings className="w-4 h-4 mr-2" />
            Customize Report Structure
          </button>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-white text-blue-600 rounded-md shadow flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Export
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow">
              Get your report
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-center mb-4">
            <img src="/placeholder.svg?height=40&width=40" alt="LinkedIn Logo" className="w-10 h-10 mr-4" />
            <h2 className="text-2xl font-bold">LinkedIn</h2>
          </div>
          <div className="bg-blue-50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">Summary</h3>
            <p className="text-sm">
              LinkedIn is an online networking platform that connects professionals across industries. It offers
              premium subscription services, advertising, and talent solutions as its revenue model. LinkedIn
              stands out from competitors with its focus on professional networking, large user base, and
              features for individuals and businesses. It provides a comprehensive platform for networking, job
              searching, professional development, and industry insights. Its data-driven targeting and
              integration with Microsoft services offer unique value to businesses and professionals.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Business overview</h2>
          <h3 className="text-xl font-semibold mb-2">Business viability</h3>
          <p className="text-sm">
            The viability of LinkedIn as an online professional networking platform appears promising when
            considering the demand and growth prospects of the industry. The global Professional Networking Apps
            Market size was valued at USD 53.23 Billion in 2023 and is projected to reach USD 429.10 Billion by
            2032, growing at a CAGR of 23.3% from 2024 to 2032.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Analytics and metrics</h2>
          <p className="text-sm mb-4">Key performance indicators (KPIs) for LinkedIn would include:</p>
          <ul className="list-disc list-inside text-sm space-y-2 mb-4">
            <li>User Growth: Tracking monthly active users (MAUs) and new sign-ups to measure platform expansion.</li>
            <li>Engagement Rates: Measuring daily active users (DAUs) as a percentage of MAUs, time spent on the platform, and interactions (likes, comments, shares).</li>
            <li>Subscription Conversion: Monitoring the number of users upgrading to premium accounts.</li>
            <li>Revenue Streams: Analyzing the revenue from premium subscriptions, advertising, and talent solutions.</li>
            <li>Customer Acquisition Cost (CAC): Calculating the cost to acquire a new customer, including marketing and sales expenses.</li>
            <li>User Retention Rates: Measuring the percentage of users who remain active over time.</li>
            <li>Employer and Job Listing Growth: Tracking the number of companies and job postings, indicating marketplace vitality.</li>
            <li>Quality of Network Connections: Evaluating the relevance and professional levels of user connections and endorsements.</li>
            <li>Talent Solution Success: Measuring the success rate of job placements and recruiter activities.</li>
          </ul>
          <p className="text-sm mb-4">To track and analyze these KPIs over time, an array of tools and systems can be used, including:</p>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>Analytics and Data Visualization Platforms: Tools like Tableau or Google Analytics can be employed to manage and visualize data related to user engagement and website traffic.</li>
            <li>Customer Relationship Management (CRM) Software: HubSpot or Salesforce can be used to track customer interactions and sales processes.</li>
            <li>Business Intelligence (BI) Tools: Power BI or Looker can help in creating comprehensive dashboards for monitoring multiple KPIs simultaneously.</li>
            <li>User Feedback and Survey Tools: Platforms like SurveyMonkey or Qualtrics can gather qualitative data on user satisfaction and needs.</li>
            <li>A/B Testing Tools: Optimizely or Google Optimize can be used to test and improve various aspects of the platform.</li>
            <li>Social Media Analytics Tools: Hootsuite or Sprout Social can provide insights into social media engagement and reach.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}