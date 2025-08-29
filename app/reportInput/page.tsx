"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useRouter } from 'next/navigation';
import UpperNavigation from "@/components/upperNavigation";

export default function Home() {
  const [companyName, setCompanyName] = useState("Nike"); // Static autofill for company name
  const [productCategory, setProductCategory] = useState("Footwear"); // Static autofill for product category
  const [industryType, setIndustryType] = useState("Retail"); // Static autofill for industry type

  const router = useRouter();

  // Handle the form submission and route directly to the final report
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Directly route to the final report with autofilled data
    router.push(`/finalReport?company=${encodeURIComponent(companyName)}&productCategory=${encodeURIComponent(productCategory)}&industryType=${encodeURIComponent(industryType)}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-50 to-gray-100">
      <UpperNavigation />
      <div className="flex-grow flex flex-col items-center px-8 py-12 mt-16">
        <main className="w-full max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6 font-lato">
            Automate Your Market Insights.
            <br />
            AI-Powered, Hassle-Free.
          </h2>
          <p className="text-base text-gray-600 mb-8 font-inter">
            Leverage AI tools to generate insightful market reports effortlessly.
            <br />
            Focus on scaling your business, while we handle the data.
          </p>

          {/* Call to Action */}
          <a
            href="#learn-more"
            className="text-blue-600 hover:text-blue-800 flex items-center justify-center mb-8"
          >
            See how AI can work for you
            <ChevronDown className="ml-1 w-5 h-5" />
          </a>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mb-12">
            <div className="bg-blue-300/10 backdrop-blur-lg rounded-xl shadow-lg p-6 mx-auto max-w-3xl space-y-4">
              {/* Company Name */}
              <input
                type="text"
                placeholder="Enter Company Name"
                className="w-full p-4 text-gray-700 rounded-lg bg-white bg-opacity-80 focus:outline-none shadow-inner"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)} // Enable manual change if needed
              />

              {/* Product Category Dropdown */}
              <select
                className="w-full p-4 text-gray-700 rounded-lg bg-white bg-opacity-80 focus:outline-none shadow-inner"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
              >
                <option value="" disabled>Select Product Category</option>
                <option value="Footwear">Footwear</option>
                <option value="Apparel">Apparel</option>
                <option value="Electronics">Electronics</option>
                <option value="Automobiles">Automobiles</option>
                <option value="Beauty & Skincare">Beauty & Skincare</option>
              </select>

              {/* Industry Type Dropdown */}
              <select
                className="w-full p-4 text-gray-700 rounded-lg bg-white bg-opacity-80 focus:outline-none shadow-inner"
                value={industryType}
                onChange={(e) => setIndustryType(e.target.value)}
              >
                <option value="" disabled>Select Industry Type</option>
                <option value="Retail">Retail</option>
                <option value="Technology">Technology</option>
                <option value="Automotive">Automotive</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Finance">Finance</option>
              </select>

              {/* Submit Button */}
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




// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import { useRouter } from 'next/navigation';
// import UpperNavigation from "@/components/upperNavigation";

// export default function Home() {
//   const [inputValue, setInputValue] = useState(""); 
//   const [companyName, setCompanyName] = useState(""); 
//   const [productCategory, setProductCategory] = useState(""); 
//   const [industryType, setIndustryType] = useState(""); 
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   // const handleSubmit = (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   // console.log("Submitted:", inputValue);
//   //   router.push('/finalReport');
//   // };

//   // Sample JSON structure for the market report (Replace this with dynamic data if needed)
//   const sampleMarketReport = {
//     product_company_name: companyName,
//     description: `Market Report for ${companyName} in ${industryType}`,
//     Executive_Summary: {
//       Product_Overview: "Overview of product performance.",
//       Key_Market_Findings: "Key insights from the market.",
//       Product_Opportunities: "Potential areas for growth.",
//       Challenges_and_Risks: "Market challenges and risks.",
//       Strategic_Recommendation: "Recommendations for improvement."
//     },
//     Introduction: {
//       Product_Definition: "Definition of the product category.",
//       Product_Scope: "Scope of product within the industry."
//     },
//     Competitor_Analysis: {
//       Price_Range: "Competitive price range of similar products.",
//       Demographics: "Target audience and demographics."
//     }
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (!companyName || !productCategory || !industryType) {
//   //     alert("Please fill out all fields.");
//   //     return;
//   //   }
//   //   console.log("Submitted:", { companyName, productCategory, industryType });
//   //   router.push('/finalReport'); // Redirect to report page
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!companyName || !productCategory || !industryType) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch("http://127.0.0.1:8000/market-reports/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(sampleMarketReport)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Success:", data);
//         alert("Market report created successfully!");
//         // router.push("/finalReport"); // Navigate to report page
//         router.push(`/finalReport?company=${encodeURIComponent(companyName)}`);
//       } else {
//         console.error("Error:", data);
//         alert(`Error: ${data.detail || "Failed to create report"}`);
//       }
//     } catch (error) {
//       console.error("Request Error:", error);
//       alert("Failed to connect to the API.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-50 to-gray-100">
//       <UpperNavigation/>
//       {/* Main Content Wrapper */}
//       <div className="flex-grow flex flex-col items-center px-8 py-12 mt-16">

//         {/* Header */}
//         {/* <header className="mb-12 text-center w-full">
//           <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight font-inter">
//             Figurush <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">/AI Market Reports</span>
//           </h1>
//         </header> */}

//         {/* Main Content */}
//         <main className="w-full max-w-6xl text-center">
//           <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6 font-lato">
//             Automate Your Market Insights.<br />AI-Powered, Hassle-Free.
//           </h2>
//           <p className="text-base text-gray-600 mb-8 font-inter">
//             Leverage AI tools to generate insightful market reports effortlessly.<br />
//             Focus on scaling your business, while we handle the data.
//           </p>

//           {/* CTA */}
//           <a href="#learn-more" className="text-blue-600 hover:text-blue-800 flex items-center justify-center mb-8">
//             See how AI can work for you
//             <ChevronDown className="ml-1 w-5 h-5" />
//           </a>

//           {/* Form */}
//           {/* <form onSubmit={handleSubmit} className="mb-12">
//             <div className="bg-blue-300/10 backdrop-blur-lg rounded-xl shadow-lg p-6 mx-auto max-w-3xl">
//               <textarea
//                 rows={4}
//                 placeholder="Describe your market or report needs..."
//                 className="w-full p-4 text-gray-700 rounded-lg bg-white bg-opacity-80 focus:outline-none resize-none shadow-inner"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 className="mt-6 bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-transform transform hover:scale-105 shadow-lg w-full"
//               >
//                 Generate Report
//               </button>
//             </div>
//           </form> */}

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="mb-12">
//             <div className="bg-blue-300/10 backdrop-blur-lg rounded-xl shadow-lg p-6 mx-auto max-w-3xl space-y-4">
              
//               {/* Company Name */}
//               <input
//                 type="text"
//                 placeholder="Enter Company Name"
//                 className="w-full p-4 text-gray-700 rounded-lg bg-white bg-opacity-80 focus:outline-none shadow-inner"
//                 value={companyName}
//                 onChange={(e) => setCompanyName(e.target.value)}
//               />

//               {/* Product Category Dropdown */}
//               <select
//                 className="w-full p-4 text-gray-700 rounded-lg bg-white bg-opacity-80 focus:outline-none shadow-inner"
//                 value={productCategory}
//                 onChange={(e) => setProductCategory(e.target.value)}
//               >
//                 <option value="" disabled>Select Product Category</option>
//                 <option value="Footwear">Footwear</option>
//                 <option value="Apparel">Apparel</option>
//                 <option value="Electronics">Electronics</option>
//                 <option value="Automobiles">Automobiles</option>
//                 <option value="Beauty & Skincare">Beauty & Skincare</option>
//               </select>

//               {/* Industry Type Dropdown */}
//               <select
//                 className="w-full p-4 text-gray-700 rounded-lg bg-white bg-opacity-80 focus:outline-none shadow-inner"
//                 value={industryType}
//                 onChange={(e) => setIndustryType(e.target.value)}
//               >
//                 <option value="" disabled>Select Industry Type</option>
//                 <option value="Retail">Retail</option>
//                 <option value="Technology">Technology</option>
//                 <option value="Automotive">Automotive</option>
//                 <option value="Healthcare">Healthcare</option>
//                 <option value="Finance">Finance</option>
//               </select>

//               {/* Submit Button */}
//               {/* <button
//                 type="submit"
//                 className="mt-6 bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-transform transform hover:scale-105 shadow-lg w-full"
//               >
//                 Generate Report
//               </button> */}

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="mt-6 bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-transform transform hover:scale-105 shadow-lg w-full"
//                 disabled={loading}
//               >
//                 {loading ? "Generating Report..." : "Generate Report"}
//               </button>

//             </div>
//           </form>

//           {/* Idea Cards (Glassmorphism Effect) */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "E-commerce Market Trends",
//                 content: "Explore how AI is revolutionizing the e-commerce landscape with data-driven insights on consumer behavior, trends, and market forecasts."
//               },
//               {
//                 title: "AI-driven Ad Campaign Analysis",
//                 content: "Leverage AI to optimize your ad campaigns with actionable insights based on real-time market data, enhancing ROI and targeting."
//               },
//               {
//                 title: "Consumer Behavior Insights",
//                 content: "Understand the evolving preferences of consumers across different demographics, enabling better product positioning and marketing strategies."
//               },
//               {
//                 title: "Tech Industry Growth Breakdown",
//                 content: "Get an in-depth analysis of the tech industry's growth, highlighting the key drivers and emerging trends shaping the future."
//               },
//               {
//                 title: "Retail Market Predictions",
//                 content: "Discover how AI is predicting future trends in retail, offering valuable insights to stay ahead of the competition."
//               },
//               {
//                 title: "Financial Sector AI Impact",
//                 content: "Analyze how AI is transforming the financial industry with advanced algorithms for risk management, trading, and market analysis."
//               },
//             ].map((idea, index) => (
//                 <div
//                 key={index}
//                 className="bg-white/30 backdrop-blur-md rounded-xl shadow-lg p-6 text-gray-800 transition-transform transform hover:scale-105 hover:shadow-[0_4px_15px_5px_rgba(56,189,248,0.3)] flex flex-col justify-center items-center text-center border border-white/20"
//                 style={{
//                   background:
//                     "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)",
//                   minHeight: "200px",
//                 }}
//               >
//                 <h3 className="text-xl font-semibold mb-2 text-gray-900">{idea.title}</h3>
//                 <p className="text-sm text-gray-600">{idea.content}</p>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>

//       {/* Footer */}
//       <footer className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-6 text-center mt-16 rounded-t-xl">
//         <p className="font-medium">&copy; 2024 Figurush. All rights reserved.</p>
//       </footer>

//     </div>
//   );
// }
