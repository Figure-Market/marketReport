// app/finalReport/page.tsx
import { Suspense } from "react";
import FinalReportClient from "./FinalReportClient";

export default function FinalReportPage() {
  return (
    <Suspense fallback={<p className="p-10">Loading report...</p>}>
      <FinalReportClient />
    </Suspense>
  );
}


// // app/finalReport/page.tsx
// "use client";

// import { Suspense } from "react";
// import FinalReportClient from "./FinalReportClient";

// import { useState, useRef } from "react";
// import {
//   Activity,
//   BarChart2,
//   ChevronDown,
//   Cpu,
//   FileText,
//   Layers,
//   Rocket,
//   Smile,
//   TrendingUp,
//   Users,
//   Users2,
// } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import remarkBreaks from "remark-breaks"; // ✅ treat single newlines as line breaks

// // data + types
// import { marketReportData, MarketReportData } from "@/lib/marketReportData";
// import ChartRenderer from "@/components/ChartRenderer";

// // ✅ Proper Markdown renderer
// const renderMarkdown = (text: string) => {
//   const cleaned = text.trim();
//   return (
//     <div className="prose prose-sm max-w-none text-gray-700 font-light">
//       <ReactMarkdown
//         remarkPlugins={[remarkGfm, remarkBreaks]}
//         components={{
//           hr: (props) => <hr {...props} className="my-5 border-gray-200" />,
//           h3: (props) => (
//             <h3
//               {...props}
//               className="text-xl font-semibold text-gray-800 mt-6 mb-3"
//             />
//           ),
//           p: (props) => <p {...props} className="leading-7 my-3" />,
//           ul: (props) => (
//             <ul {...props} className="list-disc ml-6 space-y-1" />
//           ),
//           ol: (props) => (
//             <ol {...props} className="list-decimal ml-6 space-y-1" />
//           ),
//           li: (props) => <li {...props} className="my-0.5" />,
//         }}
//       >
//         {cleaned}
//       </ReactMarkdown>
//     </div>
//   );
// };

// export default function BusinessAnalysis() {
//   const router = useRouter();
//   const handleLogoClick = () => router.push("/");

//   const [activeSection, setActiveSection] =
//     useState<string>("Executive Summary");
//   const [activeSubsection, setActiveSubsection] = useState<string | null>(
//     null
//   );

//   const searchParams = useSearchParams();
//   const companyName = searchParams?.get("company") || "Example Company";

//   const subsectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

//   const sidebarSections = [
//     {
//       title: "Executive Summary",
//       key: "Executive Summary",
//       icon: FileText,
//       items: [
//         "Product Overview",
//         "Key Market Findings",
//         "Product Opportunities",
//         "Challenges & Risks",
//         "Strategic Recommendation",
//       ],
//     },
//     {
//       title: "Introduction",
//       key: "Introduction",
//       icon: Rocket,
//       items: [
//         "Product Definition and Scope",
//         "Purpose of the Report",
//         "Methodology",
//         "Data Collection Methods",
//         "Assumptions and Limitations",
//       ],
//     },
//     {
//       title: "Product Overview",
//       key: "Product Overview",
//       icon: Users,
//       items: [
//         "Product Definition and Characteristics",
//         "Demographics",
//         "Product Applications",
//         "Market Segmentation",
//         "Product Lifecycle",
//       ],
//     },
//     {
//       title: "Market Dynamics",
//       key: "Market Dynamics",
//       icon: Activity,
//       items: [
//         "Market Drivers",
//         "Market Restraints",
//         "Market Opportunities",
//         "Market Challenges",
//       ],
//     },
//     {
//       title: "Competitive Landscape",
//       key: "Competitive Landscape",
//       icon: BarChart2,
//       items: [
//         "Market Share Analysis",
//         "Key Competitors",
//         "Company Profiles",
//         "SWOT Analysis",
//         "Competitive Benchmarking",
//         "Market Positioning",
//       ],
//     },
//     {
//       title: "Product Segmentation Analysis",
//       key: "Product Segmentation Analysis",
//       icon: Layers,
//       items: ["By Product Variant", "By Application", "By End-User", "By Region"],
//     },
//     {
//       title: "Market Forecast",
//       key: "Market Forecast",
//       icon: TrendingUp,
//       items: [
//         "Short-Term (1-3 years)",
//         "Long-Term (5-10 years)",
//         "Product Projections by Segmentation",
//         "Sensitivity Analysis",
//       ],
//     },
//     {
//       title: "Technological Trends",
//       key: "Technological Trends",
//       icon: Cpu,
//       items: [
//         "Emerging Technologies",
//         "Innovations in Product Design and Manufacturing",
//         "Impact of AI IoT, and Automation",
//         "Sustainability and Green Technologies",
//         "Adoption of New Materials",
//       ],
//     },
//     {
//       title: "Consumer Behavior Analysis",
//       key: "Consumer Behavior Analysis",
//       icon: Smile,
//       items: [
//         "Target Audience Profile",
//         "Demographics",
//         "Psychographics",
//         "Buying Behavior",
//         "Purchase Frequency",
//         "Brand Loyalty",
//         "Influences on Purchase Decisions",
//         "Consumer Feedback and Satisfaction",
//         "Influence of Digital Platforms and E-commerce",
//       ],
//     },
//     {
//       title: "Competitor Analysis",
//       key: "Competitor Analysis",
//       icon: Users2,
//       items: ["Price Range", "Demographics"],
//     },
//   ];

//   const sectionData =
//     marketReportData[activeSection as keyof MarketReportData];

//   return (
//     <div className="flex h-screen bg-gray-100 font-sans">
//       {/* Sidebar */}
//       <div className="w-64 bg-gradient-to-b from-green-600 to-blue-700 text-white p-4 overflow-y-auto">
//         <div
//           className="flex items-center mb-8 cursor-pointer"
//           onClick={handleLogoClick}
//         >
//           <img
//             src="images/logo.jpg"
//             alt="Small Logo"
//             className="w-10 h-10 mr-2 rounded-full"
//           />
//           <h1 className="text-2xl font-bold font-poppins">Figurush</h1>
//         </div>

//         {sidebarSections.map((section) => (
//           <div key={section.title} className="mb-6">
//             <button
//               className="flex items-center w-full text-left text-lg font-semibold font-roboto hover:text-gray-200"
//               onClick={() => {
//                 setActiveSection(section.title);
//                 setActiveSubsection(null);
//               }}
//             >
//               <section.icon className="w-5 h-5 mr-2" />
//               <span>{section.title}</span>
//               <ChevronDown className="w-4 h-4 ml-auto" />
//             </button>

//             {activeSection === section.title && (
//               <ul className="mt-2 ml-6 space-y-1">
//                 {section.items.map((item) => (
//                   <li
//                     key={item}
//                     className={`text-sm cursor-pointer font-light ${
//                       activeSubsection === item
//                         ? "text-yellow-300 font-bold"
//                         : "text-gray-300 hover:text-white"
//                     }`}
//                     onClick={() => {
//                       setActiveSubsection(item);
//                       subsectionRefs.current[item]?.scrollIntoView({
//                         behavior: "smooth",
//                         block: "start",
//                       });
//                     }}
//                   >
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Main content */}
//       <div className="flex-1 p-10 overflow-y-auto bg-white shadow-lg rounded-lg">
//         <h1 className="text-5xl font-extrabold text-blue-700 mb-6 font-poppins">
//           {companyName}
//         </h1>
//         <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
//           {activeSection}
//         </h2>

//         {sectionData ? (
//           <>
//             {Object.entries(sectionData)
//               .filter(([key]) => key !== "charts")
//               .map(([subKey, content]) => (
//                 <div
//                   key={subKey}
//                   ref={(el) => {
//                     subsectionRefs.current[subKey] = el;
//                   }}
//                   className={`mb-8 p-6 rounded-md ${
//                     activeSubsection === subKey
//                       ? "bg-gray-100 border border-gray-300"
//                       : ""
//                   }`}
//                 >
//                   <h3 className="text-2xl font-semibold mb-3 text-gray-700 font-roboto">
//                     {subKey}
//                   </h3>

//                   {/* 🔹 subsection content */}
//                   {typeof content === "string" ? (
//                     renderMarkdown(content)
//                   ) : Array.isArray(content) ? (
//                     <ul className="list-disc list-inside text-gray-600 space-y-1 pl-5">
//                       {content.map((point, index) => (
//                         <li key={index} className="text-md font-light">
//                           {typeof point === "string"
//                             ? point
//                             : "title" in (point as any)
//                             ? (point as any).title
//                             : JSON.stringify(point)}
//                         </li>
//                       ))}
//                     </ul>
//                   ) : typeof content === "object" && content !== null ? (
//                     "headline" in content && "points" in content ? (
//                       <div className="text-gray-600">
//                         <p className="text-md font-medium mb-2">
//                           {(content as any).headline}
//                         </p>
//                         <ul className="list-disc list-inside space-y-1 pl-5">
//                           {(content as any).points.map((point: string, index: number) => (
//                             <li key={index} className="text-md font-light">
//                               {point}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ) : (
//                       <div className="text-gray-600 space-y-4">
//                         {Object.entries(content as Record<string, any>).map(([key, value], idx) => (
//                           <div key={idx}>
//                             <p className="text-md font-medium mb-2">{key}</p>
//                             {Array.isArray(value) ? (
//                               <ul className="list-disc list-inside pl-5 space-y-1">
//                                 {value.map((item, i) => (
//                                   <li key={i} className="text-md font-light">
//                                     {typeof item === "string" ? item : JSON.stringify(item)}
//                                   </li>
//                                 ))}
//                               </ul>
//                             ) : typeof value === "string" ? (
//                               renderMarkdown(value)
//                             ) : typeof value === "object" && value !== null ? (
//                               <div className="ml-4 border-l pl-4 space-y-1">
//                                 {Object.entries(value).map(([innerKey, innerValue], j) => (
//                                   <div key={j}>
//                                     <p className="text-sm font-semibold">{innerKey}</p>
//                                     {typeof innerValue === "string" ? (
//                                       renderMarkdown(innerValue)
//                                     ) : (
//                                       <p className="text-sm text-gray-600">
//                                         {JSON.stringify(innerValue)}
//                                       </p>
//                                     )}
//                                   </div>
//                                 ))}
//                               </div>
//                             ) : (
//                               <p className="text-sm italic text-gray-500">
//                                 Unsupported nested format
//                               </p>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     )
//                   ) : (
//                     <p className="text-gray-500 italic">Unsupported content format</p>
//                   )}


//                   {/* 🔹 Inline charts for this subsection */}
//                   {"charts" in sectionData &&
//                     sectionData.charts
//                       ?.filter((chart) => chart.subsection === subKey)
//                       .map((spec) => (
//                         <div
//                           key={spec.id}
//                           className="mt-6 p-4 rounded-lg border bg-white"
//                         >
//                           <ChartRenderer spec={spec} />
//                         </div>
//                       ))}
//                 </div>
//               ))}
//           </>
//         ) : (
//           <p className="text-gray-500">
//             No data available for {activeSection}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }




// "use client";

// import { useState, useRef } from "react";
// import { Activity, BarChart2, ChevronDown, Cpu, FileText, Layers, Rocket, Smile, TrendingUp, Users, Users2 } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { useSearchParams } from "next/navigation";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

// const renderMarkdownWithLineBreaks = (text: string) => {
//   const markdownWithBreaks = text.replace(/\n/g, '  \n');

//   return (
//     <div className="prose prose-sm text-gray-600 font-light">
//       <ReactMarkdown remarkPlugins={[remarkGfm]}>
//         {markdownWithBreaks}
//       </ReactMarkdown>
//     </div>
//   );cx  
// };

// export default function BusinessAnalysis() {
//   const router = useRouter();
//   const handleLogoClick = () => router.push("/");

//   const [activeSection, setActiveSection] = useState<string>("Executive Summary");
//   const [activeSubsection, setActiveSubsection] = useState<string | null>(null);

//   const searchParams = useSearchParams();
//   const companyName = searchParams?.get("company") || "Example Company"; // Get company name from URL or default to "Example Company"

//   const subsectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

//   // Static data for market report (no API call)
//   const marketReportData = {
//     "Executive Summary": {
//       "Product Overview": "Nike stands as a global icon in athletic footwear — a brand that’s not just about sports, but culture. With cutting-edge design, bold collaborations, and a legacy of performance, Nike dominates across key markets like North America, Europe, and Asia-Pacific. Holding a 27–30% market share, its strength lies in innovation, global reach, and a powerful brand story. But with fierce competition from adidas, Puma, and the rise of Gen Z darlings like Hoka and On, staying ahead is a moving target.",
    
//       "Key Market Findings": [
//         "🟢 FY2024 footwear revenue hit **$33 billion**, forming **68%** of total company earnings.",
//         "👟 **Running shoes** make up approx. **40%** of that pie, while **basketball shoes** contribute about **30%**.",
//         "🌍 Digital and DTC sales channels continue to rise, especially in Asia and Europe.",
//         "📉 North American growth is flattening — possibly due to market saturation and aggressive pricing tactics."
//       ],
    
//       "Product Opportunities": {
//         "headline": "📈 Where the Swoosh Can Grow Next",
//         "points": [
//           "🌿 Eco-friendly materials and sustainable product lines — a rising consumer expectation.",
//           "🌍 Regional expansion in Africa and Tier 2/3 Indian cities.",
//           "👩‍🦰 Women's sportswear is an underutilized category with major revenue potential.",
//           "🎨 Collabs with fashion and music influencers to expand lifestyle relevance.",
//           "🧠 AI and data-powered personalization for performance-driven product design."
//         ]
//       },
    
//       "Challenges & Risks": "Let’s keep it real — the road ahead isn’t without speed bumps:\n\n- 🔄 Supply chain disruptions from geopolitical instability and raw material shortages.\n- 💸 Price sensitivity in saturated markets could lead to discount wars.\n- 🧢 Rising popularity of niche, 'cool' brands like Hoka, On, and Allbirds among Gen Z.\n- 📱 Overdependence on digital channels raises privacy, ad cost, and platform control concerns.\n\nNike needs to be nimble, adaptive, and culturally tuned-in to keep leading.",
    
//       "Strategic Recommendation": "🎯 **Nike’s Playbook for 2025 and Beyond**\n\n- **Double down on smart and sustainable innovation** — Think recyclable materials, carbon-neutral shoes, and app-connected wearables.\n- **Decentralize manufacturing hubs** — Localize more to avoid global disruptions.\n- **Dominate emerging markets** — Local language campaigns, regional ambassadors, and culturally relevant collections.\n- **Invest in AI and CRM tools** to build hyper-personalized shopping journeys.\n- **Expand into women-led sports and wellness spaces**, leveraging micro-influencers and storytelling.\n\nThe goal? Stay iconic — and stay irreplaceable."
//     },    
//     "Introduction": {
//       "Product Definition and Scope": "👟 **Nike Shoes: More Than Just Footwear**\n\nNike's footwear lineup spans performance-driven shoes for running, basketball, soccer, and other sports — as well as lifestyle sneakers that blend comfort and style. This report focuses exclusively on **Nike-branded athletic shoes**, excluding apparel, accessories, and equipment. From Air Max to Pegasus, the scope covers all major collections contributing to Nike’s market presence.",
    
//       "Purpose of the Report": "📌 **Why This Report Exists**\n\nThis report is designed to help you:\n- Understand Nike’s current market position\n- Decode consumer preferences and behavior\n- Identify growth opportunities across regions and categories\n- Spot key challenges and competitive pressures\n\nThe goal? Provide clear, actionable insights to inform business and product strategy.",
    
//       "Methodology": "🔍 **How We Built This Report**\n\nWe relied on **secondary research**, drawing data from:\n- Company annual reports (Nike Inc.)\n- Market intelligence platforms (Statista, RunRepeat, etc.)\n- Industry-specific case studies and footwear trend reports\n\nOur approach ensured broad coverage of both financial performance and consumer trends.",
    
//       "Data Collection Methods": {
//         "description": "📊 **Where the Numbers Come From**",
//         "points": [
//           "Extensive web research on revenue, market share, and regional sales.",
//           "Analysis of Nike’s investor presentations and product category reports.",
//           "Insights from third-party sources like NPD Group and RunRepeat.",
//           "Use of segmentation tools to study behavior by age, gender, and region.",
//           "Competitive benchmarking against brands like adidas, Puma, and Hoka."
//         ]
//       },
    
//       "Assumptions and Limitations": "⚠️ **Read This Before You Interpret the Data**\n\n- All figures are based on the most recent data available (2023–2025).\n- Some product-level revenue splits are estimated using category trends, not disclosed financials.\n- Market share numbers may vary slightly across sources — our estimate reflects an average range.\n- Consumer sentiment analysis is based on publicly available reviews, surveys, and search trends.\n\nThese limitations are typical of secondary market research, but we’ve ensured accuracy wherever possible."
//     },
//     "Product Overview": {
//       "Product Definition and Characteristics": "👟 **What Defines a Nike Shoe?**\n\nNike shoes combine performance, style, and innovation. They feature advanced cushioning technologies (like Air, ZoomX), breathable materials, and sport-specific design enhancements. Available across a **broad price range (₹3,000–₹15,000)**, Nike targets both premium and value-conscious segments with product lines like Air Max, Revolution, and Jordan.",
      
//       "Demographics": "🎯 **Who’s Wearing Nike?**\n\nNike's core audience includes:\n- **Age**: 15–40 years old\n- **Gender**: Male-dominated historically, but female consumers are rapidly growing\n- **Location**: Urban and semi-urban regions, especially in North America, Europe, and Asia\n- **Lifestyle**: Active, fitness-focused, fashion-aware individuals, including athletes, students, and young professionals",
      
//       "Product Applications": "🏃‍♂️ **Where and How Nike Shoes Are Used**\n\nNike shoes cater to a wide range of activities:\n- **Running** (e.g., Nike Pegasus, ZoomX)\n- **Basketball** (e.g., Jordan, Lebron series)\n- **Training/Gym** (e.g., Metcon)\n- **Casual & Streetwear** (e.g., Air Force 1, Dunk)\n- **Lifestyle/Everyday wear** with comfort and aesthetic appeal",
      
//       "Market Segmentation": {
//         "description": "📊 **Breaking the Market Down**",
//         "segments": [
//           "**By Product Type**: Running, Basketball, Lifestyle, Training, Soccer, Skateboarding",
//           "**By Consumer**: Men, Women, Kids",
//           "**By Price Range**: Value (₹3K–₹5K), Mid-tier (₹5K–₹9K), Premium (₹9K+)",
//           "**By Channel**: Direct-to-consumer (online/offline), Marketplace platforms, Retail partners"
//         ]
//       },
    
//       "Product Lifecycle": "🔄 **Where Nike Products Stand in Their Lifecycle**\n\nNike manages multiple products across different lifecycle stages:\n\n- **Introduction**: Smart footwear and app-integrated shoes (experimental lines)\n- **Growth**: Sustainable shoes like the Space Hippie series\n- **Maturity**: Classics like Air Max, Pegasus, and Air Force 1 — still in high demand\n- **Decline**: Older legacy models phased out or merged into retro collections\n\nNike’s product strategy continuously renews interest through re-launches, collaborations, and tech upgrades."
//     },
//     "Market Dynamics": {
//       "Market Drivers": "🚀 **What’s Fueling Nike's Growth?**\n\n- **Brand Loyalty**: A massive global fanbase built through decades of performance and cultural relevance.\n- **Product Innovation**: Nike continues to lead in material science, smart footwear, and sustainability (e.g., Flyknit, Space Hippie).\n- **Digital Expansion**: DTC (Direct-to-Consumer) and Nike App have boosted margins and customer engagement.\n- **Athleisure Trend**: Demand for stylish, sporty casual wear continues to rise — keeping Nike relevant even off the field.",
      
//       "Market Restraints": "⛔ **What’s Holding the Market Back?**\n\n- **High Price Points** in emerging markets limit mass accessibility.\n- **Dependency on Overseas Manufacturing** leads to supply chain delays during global disruptions.\n- **Saturation in Mature Markets** (e.g., North America) means slowing growth without diversification.\n- **Counterfeit Market** continues to affect brand integrity and revenue in key regions.",
    
//       "Market Opportunities": {
//         "headline": "💡 Untapped Growth Potential",
//         "points": [
//           "🌍 Expansion in Africa and underserved Southeast Asian cities",
//           "👟 Growth in **women-led** athletic footwear and fitness categories",
//           "🔄 Circular economy and **eco-friendly product lines**",
//           "📱 Greater integration of AI for personalized shopping and product design",
//           "🎯 Collaborations with **regional influencers** to localize branding"
//         ]
//       },
    
//       "Market Challenges": "⚠️ **Obstacles in the Path**\n\n- Rising competition from nimble, trend-focused brands like Hoka and On\n- Fluctuating raw material costs and geopolitical trade instability\n- Stricter sustainability compliance expected in developed markets\n- Consumer attention spans are shrinking — demanding more frequent product refresh cycles and marketing innovation"
//     },
    
//     "Competitive Landscape": {
//       "Market Share Analysis": "📊 **Who's Winning the Race?**\n\nNike maintains a **global market share of 27–30%** in athletic footwear, leading across categories like running and basketball. adidas follows closely with around 20%, while Puma, Skechers, and emerging players like Hoka and On are rapidly scaling. Nike’s DTC channels also claim a larger slice of the profit pool compared to wholesale-dependent rivals.",
    
//       "Key Competitors": [
//         "🔹 adidas: Strong in soccer and Europe-centric lifestyle segments",
//         "🔹 Puma: Trending in Gen Z and affordable athleisure categories",
//         "🔹 Hoka: Rapidly growing in the premium running shoe segment",
//         "🔹 On: Tech-driven brand gaining traction in urban performance footwear",
//         "🔹 Skechers: Budget-friendly and comfort-first, strong in US and India"
//       ],
    
//       "Company Profiles": "🏢 **Competitor Snapshots**\n\nEach major competitor is profiled based on revenue, brand strength, target demographic, and product focus. These mini profiles help benchmark Nike's positioning:\n\n- **adidas**: Emphasis on soccer, lifestyle, and sustainability\n- **Hoka**: Comfort-focused running, gaining Gen Z loyalty\n- **On**: Swiss-engineered, minimal aesthetic, urban athletes\n- **Skechers**: Mass-market, casual comfort leader",
    
//       "SWOT Analysis": {
//         "Strengths": ["Brand recognition", "Innovation", "Global athlete endorsements"],
//         "Weaknesses": ["High pricing", "Supply chain dependency"],
//         "Opportunities": ["Eco-product lines", "AI-driven customization", "Emerging markets"],
//         "Threats": ["Niche brand competition", "Market saturation", "Counterfeits"]
//       },
    
//       "Competitive Benchmarking": "📈 **Nike vs. the Field**\n\nUsing KPIs like revenue, gross margin, market share, innovation index, and brand recall, Nike leads in brand equity and athlete partnerships. However, adidas performs strongly on sustainability and fashion collabs, while On and Hoka are gaining ground in innovation per unit sold. Nike’s innovation-to-price ratio remains favorable but is being challenged in specific niches like high-performance running.",
    
//       "Market Positioning": "🧭 **Where Nike Stands**\n\nNike is positioned as a **premium performance + lifestyle** brand with a bold, global appeal. Its messaging blends elite sport with cultural moments (e.g., collaborations with Travis Scott, Serena Williams). It leads in storytelling and digital innovation but must maintain its edge as newer brands disrupt niche verticals like sustainable performance and gender-specific gear."
//     },
//     "Product Segmentation Analysis": {
//       "By Product Variant": "🧬 **Nike’s Diverse Product Variants**\n\nNike offers a range of variants to serve every athletic need:\n- **Running Shoes**: Nike Pegasus, ZoomX, Vaporfly\n- **Basketball Shoes**: Air Jordan, LeBron, Kyrie\n- **Training Shoes**: Metcon, Free TR\n- **Lifestyle/Streetwear**: Air Force 1, Dunk, Blazer\n- **Customizable Models**: Through Nike By You platform",
      
//       "By Application": "🏃‍♀️ **Applications by Use-Case**\n\n- **Performance Sports**: Running, basketball, football\n- **Fitness/Training**: Gym, CrossFit, HIIT\n- **Casual Wear**: Lifestyle, college wear, athleisure\n- **Collector/Streetwear**: Limited editions, collabs (e.g., Travis Scott, Off-White)",
      
//       "By End-User": {
//         "title": "👤 Target Segments by User Type",
//         "segments": [
//           "**Men** – The largest revenue contributor, especially in running & basketball",
//           "**Women** – Fast-growing segment driven by fitness and lifestyle wear",
//           "**Kids & Teens** – Driven by trends, back-to-school seasons, and sneaker culture"
//         ]
//       },
    
//       "By Region": "🌎 **Regional Demand Trends**\n\n- **North America**: Core market, but facing saturation\n- **Europe**: Growth in sports lifestyle and eco-conscious lines\n- **Asia-Pacific**: Strong expansion, especially in India and Southeast Asia\n- **Africa & Latin America**: Emerging regions with increasing DTC interest"
//     },
    
//     "Market Forecast": {
//       "Short-Term (1-3 years)": "📉 **Near-Term Outlook**\n\nNike’s Q4 2024 forecast shows a mid-teens percentage revenue drop, primarily due to inventory issues and softened North American demand. Still, the global athletic footwear market is projected to hit **$185.82 billion by 2025**, growing at **6.86% CAGR** till 2030 (source: Mordor Intelligence). Expect modest recovery fueled by emerging markets and DTC channels.",
    
//       "Long-Term (5-10 years)": "📈 **Vision 2030: Long-Term Projections**\n\nNike is likely to retain market leadership as it invests in:\n- Smart footwear and wearable tech\n- Sustainable innovation\n- Expansion into Gen Z-centric lines\n- New distribution formats like AR/VR-based try-ons\n\nBrand relevance and ecosystem innovation will drive sustained CAGR beyond 6–7%.",
    
//       "Product Projections by Segmentation": {
//         "Running Shoes": "Expected to remain top-performing, especially in Asia and among women.",
//         "Basketball Shoes": "Growth tied to athlete influence and cultural relevance.",
//         "Lifestyle/Streetwear": "Driven by collabs, influencer culture, and Gen Z adoption."
//       },
    
//       "Sensitivity Analysis": "📊 **What Could Shake the Forecast?**\n\n- **High sensitivity to inflation and discretionary income** in emerging markets\n- **Supply chain fragility** due to global tensions or logistics constraints\n- **Brand image risk** if sustainability goals fall behind\n- **Social media influence** can rapidly shift market trends and demand curves"
//     },
    
//     "Technological Trends": {
//       "Emerging Technologies": "🛠️ **Emerging Tech in Footwear**\n\n- Self-lacing systems (Nike Adapt)\n- 3D printed midsoles\n- Connected wearables with performance tracking",
      
//       "Innovations in Product Design and Manufacturing": "🧵 **Design & Manufacturing Shifts**\n\n- Flyknit and FlyEase tech for sustainability and accessibility\n- Modular shoe parts for customization and repair\n- AI-driven sizing and fit enhancements",
    
//       "Impact of AI IoT, and Automation": "🤖 **Smart Systems Driving Efficiency**\n\n- AI-powered personalization in shopping\n- IoT-enabled wearables for athletes\n- Robotic warehouses and automated fulfillment centers",
    
//       "Sustainability and Green Technologies": "🌱 **Greener Choices, Greener Futures**\n\n- Space Hippie shoes from recycled materials\n- Waterless dyeing technologies\n- Net-zero factories in progress",
    
//       "Adoption of New Materials": "🧪 **Next-Gen Materials**\n\n- Bio-based leather alternatives (e.g., Piñatex)\n- Recyclable foam and soles\n- Breathable, compostable fabric blends"
//     },
    
//     "Consumer Behavior Analysis": {
//       "Target Audience Profile": "👤 **Who’s Buying Nike?**\n\nNike’s primary consumer base includes adults aged 15–45, with growing influence from Gen Z and younger Millennials. Fitness-focused, fashion-forward, and digitally native, these consumers value performance as much as brand story.",
      
//       "Demographics": "📍 Urban, middle-to-upper income segments in North America, Europe, India, and East Asia. Gender balance is shifting as women’s segments grow faster.",
      
//       "Psychographics": "🧠 Active lifestyle, brand consciousness, aspirational buyers, sustainability-aware, tech-savvy",
      
//       "Buying Behavior": [
//         "🛒 Mix of online (Nike app, marketplaces) and offline (flagships, retailers)",
//         "📦 High repeat purchase for runners and athletes (3–4x/year)",
//         "🧢 Trend-driven buying for limited editions and collabs"
//       ],
    
//       "Purchase Frequency": "📆 Active users buy every 3–6 months depending on usage (e.g., runners) or collection drops (sneakerheads). Seasonal spikes in Q2 and Q4 are common.",
    
//       "Brand Loyalty": "🔁 Very high — driven by tech trust, athlete endorsements, and habit. Nike loyalty programs and app gamification further boost stickiness.",
    
//       "Influences on Purchase Decisions": "📲 Reviews, peer recommendations, influencer collabs, athlete endorsements, and Instagram aesthetics play a big role.",
    
//       "Consumer Feedback and Satisfaction": "🌟 Generally positive for design, fit, and innovation. Minor complaints around pricing and stock availability in exclusive drops.",
    
//       "Influence of Digital Platforms and E-commerce": "🛍️ 50%+ of Nike's sales now come from digital channels. The Nike App, SNKRS, and personalized email campaigns drive engagement and conversion."
//     },
    
//     "Competitor Analysis": {
//       "Price Range": "💰 **Nike vs. Competitors (Price Bands)**\n\n- **Nike**: ₹3,000 – ₹15,000 (Average ₹7,000)\n- **adidas**: ₹2,500 – ₹14,000\n- **Puma**: ₹2,000 – ₹10,000\n- **Hoka/On**: ₹10,000 – ₹18,000 (premium segment)\n- **Skechers**: ₹2,000 – ₹7,000 (value focused)",
    
//       "Demographics": "🧍‍♂️ Each competitor targets distinct niches:\n- **Nike**: Sport + lifestyle + aspirational\n- **adidas**: Urban, fashion-conscious\n- **Hoka/On**: Performance-driven runners\n- **Skechers**: Comfort-first, older age groups and budget buyers"
//     },    
//   };

//   // Sidebar Sections (Matches static data)
//   const sidebarSections = [
//     {
//       title: "Executive Summary",
//       key: "Executive Summary",
//       icon: FileText,
//       items: [
//         "Product Overview",
//         "Key Market Findings",
//         "Product Opportunities",
//         "Challenges & Risks",
//         "Strategic Recommendation",
//       ],
//     },
//     {
//       title: "Introduction",
//       key: "Introduction",
//       icon: Rocket,
//       items: [
//         "Product Definition and Scope",
//         "Purpose of the Report",
//         "Methodology",
//         "Data Collection Methods",
//         "Assumptions and Limitations",
//       ],
//     },
//     {
//       title: "Product Overview",
//       key: "Product Overview",
//       icon: Users,
//       items: [
//         "Product Definition and Characteristics",
//         "Demographics",
//         "Product Applications",
//         "Market Segmentation",
//         "Product Lifecycle",
//       ],
//     },
//     {
//       title: "Market Dynamics",
//       key: "Market Dynamics",
//       icon: Activity,
//       items: [
//         "Market Drivers",
//         "Market Restraints",
//         "Market Opportunities",
//         "Market Challenges",
//       ],
//     },
//     {
//       title: "Competitive Landscape",
//       key: "Competitive Landscape",
//       icon: BarChart2,
//       items: [
//         "Market Share Analysis",
//         "Key Competitors",
//         "Company Profiles",
//         "SWOT Analysis",
//         "Competitive Benchmarking",
//         "Market Positioning",
//       ],
//     },
//     {
//       title: "Product Segmentation Analysis",
//       key: "Product Segmentation Analysis",
//       icon: Layers,
//       items: [
//         "By Product Variant",
//         "By Application",
//         "By End-User",
//         "By Region",
//       ],
//     },
//     {
//       title: "Market Forecast",
//       key: "Market Forecast",
//       icon: TrendingUp,
//       items: [
//         "Short-Term (1-3 years)",
//         "Long-Term (5-10 years)",
//         "Product Projections by Segmentation",
//         "Sensitivity Analysis",
//       ],
//     },
//     {
//       title: "Technological Trends",
//       key: "Technological Trends",
//       icon: Cpu,
//       items: [
//         "Emerging Technologies",
//         "Innovations in Product Design and Manufacturing",
//         "Impact of AI IoT, and Automation",
//         "Sustainability and Green Technologies",
//         "Adoption of New Materials",
//       ],
//     },
//     {
//       title: "Consumer Behavior Analysis",
//       key: "Consumer Behavior Analysis",
//       icon: Smile,
//       items: [
//         "Target Audience Profile",
//         "Demographics",
//         "Psychographics",
//         "Buying Behavior",
//         "Purchase Frequency",
//         "Brand Loyalty",
//         "Influences on Purchase Decisions",
//         "Consumer Feedback and Satisfaction",
//         "Influence of Digital Platforms and E-commerce",
//       ],
//     },
//     {
//       title: "Competitor Analysis",
//       key: "Competitor Analysis",
//       icon: Users2,
//       items: [
//         "Price Range",
//         "Demographics",
//       ],
//     },
//   ];

//   return (
//     <div className="flex h-screen bg-gray-100 font-sans">
//       {/* Sidebar */}
//       <div className="w-64 bg-gradient-to-b from-green-600 to-blue-700 text-white p-4 overflow-y-auto">
//         <div
//           className="flex items-center mb-8 cursor-pointer"
//           onClick={handleLogoClick}
//         >
//           <img
//             src="images/logo.jpg"
//             alt="Small Logo"
//             className="w-10 h-10 mr-2 rounded-full"
//           />
//           <h1 className="text-2xl font-bold font-poppins">Figurush</h1>
//         </div>
//         {sidebarSections.map((section) => (
//           <div key={section.title} className="mb-6">
//             <button
//               className="flex items-center w-full text-left text-lg font-semibold font-roboto hover:text-gray-200"
//               onClick={() => {
//                 setActiveSection(section.title);
//                 setActiveSubsection(null);
//               }}
//             >
//               <section.icon className="w-5 h-5 mr-2" />
//               <span>{section.title}</span>
//               <ChevronDown className="w-4 h-4 ml-auto" />
//             </button>
//             {activeSection === section.title && (
//               <ul className="mt-2 ml-6 space-y-1">
//                 {section.items.map((item) => (
//                   <li
//                     key={item}
//                     className={`text-sm cursor-pointer font-light ${
//                       activeSubsection === item
//                         ? "text-yellow-300 font-bold"
//                         : "text-gray-300 hover:text-white"
//                     }`}
//                     onClick={() => setActiveSubsection(item)}
//                   >
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Main content */}
//       <div className="flex-1 p-10 overflow-y-auto bg-white shadow-lg rounded-lg">
//         {/* Company Name */}
//         <h1 className="text-5xl font-extrabold text-blue-700 mb-6 font-poppins">
//           {companyName}
//         </h1>
//         <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
//           {activeSection}
//         </h2>

//         {marketReportData[activeSection as keyof typeof marketReportData] ? (
//           Object.entries(
//             marketReportData[activeSection as keyof typeof marketReportData]
//           ).map(([subKey, content]) => (
//             <div
//               key={subKey}
//               ref={(el) => {
//                 subsectionRefs.current[subKey] = el;
//               }}
//               className={`mb-8 p-6 rounded-md ${
//                 activeSubsection === subKey
//                   ? "bg-gray-100 border border-gray-300"
//                   : ""
//               }`}
//             >
//               <h3 className="text-2xl font-semibold mb-3 text-gray-700 font-roboto">
//                 {subKey}
//               </h3>

//               {/* 🔁 Dynamic Content Rendering */}
//               {typeof content === "string" ? (
//                 renderMarkdownWithLineBreaks(content)
//               ) : Array.isArray(content) ? (
//                 <ul className="list-disc list-inside text-gray-600 space-y-1 pl-5">
//                   {content.map((point, index) => (
//                     <li key={index} className="text-md font-light">
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               ) : typeof content === "object" && content !== null ? (
//                 "headline" in content && "points" in content ? (
//                   <div className="text-gray-600">
//                     <p className="text-md font-medium mb-2">
//                       {content.headline}
//                     </p>
//                     <ul className="list-disc list-inside space-y-1 pl-5">
//                       {content.points.map((point: string, index: number) => (
//                         <li key={index} className="text-md font-light">
//                           {point}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ) : (
//                   <div className="text-gray-600 space-y-4">
//                     {Object.entries(content).map(([key, value], idx) => (
//                       <div key={idx}>
//                         <p className="text-md font-medium mb-2">{key}</p>
//                         {Array.isArray(value) ? (
//                           <ul className="list-disc list-inside pl-5 space-y-1">
//                             {value.map((item, i) => (
//                               <li key={i} className="text-md font-light">
//                                 {item}
//                               </li>
//                             ))}
//                           </ul>
//                         ) : typeof value === "string" ? (
//                           renderMarkdownWithLineBreaks(value)
//                         ) : typeof value === "object" && value !== null ? (
//                           <div className="ml-4 border-l pl-4 space-y-1">
//                             {Object.entries(value).map(([innerKey, innerValue], j) => (
//                               <div key={j}>
//                                 <p className="text-sm font-semibold">{innerKey}</p>
//                                 {typeof innerValue === "string" ? (
//                                   renderMarkdownWithLineBreaks(innerValue)
//                                 ) : (
//                                   <p className="text-sm text-gray-600">
//                                     {JSON.stringify(innerValue)}
//                                   </p>
//                                 )}
//                               </div>
//                             ))}
//                           </div>
//                         ) : (
//                           <p className="text-sm italic text-gray-500">
//                             Unsupported nested format
//                           </p>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )
//               ) : (
//                 <p className="text-gray-500 italic">Unsupported content format</p>
//               )}
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No data available for {activeSection}</p>
//         )}



//       </div>
//     </div>
//   );
// }


// // "use client";

// // import { useState, useEffect, useRef } from "react";
// // import { ChevronDown, FileText, Rocket, Users } from "lucide-react";
// // import { useRouter } from "next/navigation";
// // import { useSearchParams } from "next/navigation";

// // // API Endpoint
// // const API_BASE_URL = "http://localhost:8000"; // Update with deployed FastAPI URL if needed

// // export default function BusinessAnalysis() {
// //   const router = useRouter();
// //   const handleLogoClick = () => router.push("/");

// //   const [activeSection, setActiveSection] =
// //     useState<string>("Executive Summary");
// //   const [activeSubsection, setActiveSubsection] = useState<string | null>(null);

// //   const searchParams = useSearchParams();
// //   const companyName = searchParams.get("company"); // 🔥 Get company name from URL


// //   const [marketReportData, setMarketReportData] = useState<any>(null);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [error, setError] = useState<string | null>(null);

// //   const subsectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

// //   // Sidebar Sections (Matches API Fields)
// //   const sidebarSections = [
// //     {
// //       title: "Executive Summary",
// //       key: "Executive Summary",
// //       icon: FileText,
// //       items: [
// //         "Product Overview",
// //         "Key Market Findings",
// //         "Product Opportunities",
// //         "Challenges & Risks",
// //         "Strategic Recommendation",
// //       ],
// //     },
// //     {
// //       title: "Introduction",
// //       key: "Introduction",
// //       icon: Rocket,
// //       items: ["Product Definition", "Product Scope"],
// //     },
// //     {
// //       title: "Competitor Analysis",
// //       key: "Competitor Analysis",
// //       icon: Users,
// //       items: ["Price Range", "Demographics"],
// //     },
// //   ];

// //   // Fetch Market Report Data from FastAPI
// //   useEffect(() => {
// //     async function fetchMarketReport() {
// //       if (!companyName) return; // Avoid fetching if no company is found

// //       try {
// //         setLoading(true);
// //         // const response = await fetch(`${API_BASE_URL}/market-reports/nike`); // Replace "Nike" dynamically if needed
// //         const response = await fetch(`${API_BASE_URL}/market-reports/${encodeURIComponent(companyName)}`);

// //         if (!response.ok) {
// //           throw new Error(`HTTP error! Status: ${response.status}`);
// //         }

// //         const data = await response.json();
// //         console.log("Fetched Data:", data); // Debugging
// //         setMarketReportData(data);
// //       } catch (err) {
// //         console.error("Error fetching market report:", err);
// //         setError("Error fetching market report data. Please try again.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     fetchMarketReport();
// //   }, [companyName]);

// //   useEffect(() => {
// //     if (activeSection && subsectionRefs.current[activeSection]) {
// //         // Scroll to the subsection if clicked
// //         subsectionRefs.current[activeSection]?.scrollIntoView({
// //             behavior: "smooth",
// //             block: "center",
// //         });
// //     }
// // }, [activeSubsection]);

// //   return (
// //     <div className="flex h-screen bg-gray-100 font-sans">
// //       {/* Sidebar */}
// //       <div className="w-64 bg-gradient-to-b from-green-600 to-blue-700 text-white p-4 overflow-y-auto">
// //         <div
// //           className="flex items-center mb-8 cursor-pointer"
// //           onClick={handleLogoClick}
// //         >
// //           <img
// //             src="images/logo.jpg"
// //             alt="Small Logo"
// //             className="w-10 h-10 mr-2 rounded-full"
// //           />
// //           <h1 className="text-2xl font-bold font-poppins">Figurush</h1>
// //         </div>
// //         {sidebarSections.map((section) => (
// //           <div key={section.title} className="mb-6">
// //             <button
// //               className="flex items-center w-full text-left text-lg font-semibold font-roboto hover:text-gray-200"
// //               onClick={() => {
// //                 setActiveSection(section.title);
// //                 setActiveSubsection(null);
// //               }}
// //             >
// //               <section.icon className="w-5 h-5 mr-2" />
// //               <span>{section.title}</span>
// //               <ChevronDown className="w-4 h-4 ml-auto" />
// //             </button>
// //             {activeSection === section.title && (
// //               <ul className="mt-2 ml-6 space-y-1">
// //                 {section.items.map((item) => (
// //                   <li
// //                     key={item}
// //                     className={`text-sm cursor-pointer font-light ${
// //                       activeSubsection === item
// //                         ? "text-yellow-300 font-bold"
// //                         : "text-gray-300 hover:text-white"
// //                     }`}
// //                     onClick={() => setActiveSubsection(item)}
// //                   >
// //                     {item}
// //                   </li>
// //                 ))}
// //               </ul>
// //             )}
// //           </div>
// //         ))}
// //       </div>

// //       {/* Main content */}
// //       <div className="flex-1 p-10 overflow-y-auto bg-white shadow-lg rounded-lg">
// //         {loading ? (
// //           <p className="text-gray-500 text-lg">Loading market report data...</p>
// //         ) : error ? (
// //           <p className="text-red-500 text-lg">{error}</p>
// //         ) : marketReportData && marketReportData[activeSection] ? (
// //           <>
// //             <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
// //               {activeSection}
// //             </h2>

// //             {marketReportData[activeSection] &&
// //               Object.entries(marketReportData[activeSection]).map(
// //                 ([subKey, content]) => (
// //                   <div
// //                     key={subKey}
// //                     ref={(el) => (subsectionRefs.current[subKey] = el)}
// //                     className={`mb-8 p-6 rounded-md ${
// //                       activeSubsection === subKey
// //                         ? "bg-gray-100 border border-gray-300"
// //                         : ""
// //                     }`}
// //                   >
// //                     <h3 className="text-2xl font-semibold mb-3 text-gray-700 font-roboto">
// //                       {subKey}
// //                       {/* {subKey.replace("_", " ")} */}
// //                     </h3>
// //                     <p className="text-md text-gray-600 leading-relaxed font-light">
// //                       {/* {content} */}
// //                       <span
// //                         dangerouslySetInnerHTML={{
// //                           __html: content.replace(/\n/g, "<br />"),
// //                         }}
// //                       />
// //                     </p>
// //                   </div>
// //                 )
// //               )}
// //           </>
// //         ) : (
// //           <p className="text-gray-500">No data available for {activeSection}</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // // "use client";

// // // import { useState, useEffect, useRef } from "react";
// // // import Chart from "chart.js/auto";
// // // import {
// // //     ChevronDown,
// // //     FileText,
// // //     BarChart2,
// // //     Rocket,
// // //     Package,
// // //     Users,
// // //     Layers,
// // //     TrendingUp,
// // //     Cpu,
// // //     UserCheck,
// // //     Shield,
// // //     Settings,
// // // } from "lucide-react";
// // // import { useRouter } from "next/navigation";

// // // export default function BusinessAnalysis() {
// // //     const router = useRouter();

// // //     const handleLogoClick = () => {
// // //       router.push("/"); // Redirects to home page
// // //     };

// // //     const [activeSection, setActiveSection] = useState<string>("Executive Summary");
// // //     const [activeSubsection, setActiveSubsection] = useState<string | null>(null);

// // //     // Ref to track and scroll to sections
// // //     const subsectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
// // //     const chartRef1 = useRef<HTMLCanvasElement | null>(null);
// // //     const chartRef2 = useRef<HTMLCanvasElement | null>(null);
// // //     const marketValueChart = useRef<Chart | null>(null);
// // //     const unitsSoldChart = useRef<Chart | null>(null);

// // //     interface MarketReportData {
// // //         [key: string]: {
// // //             [subKey: string]: string;
// // //         };
// // //     }

// // //     // Store the dictionary data (the market report data)
// // //     const marketReportData: MarketReportData = {
// // //         "Executive Summary": {
// // //             "Product Overview":
// // //                 "VR Glasses, designed for immersive virtual reality experiences, offer a cutting-edge platform for both entertainment and professional use. These glasses feature:\n\n- High-definition visual display: Optimized for ultra-clear imagery with a 120-degree field of vision.\n- Lightweight ergonomic design: Ensures comfort during extended use.\n- Advanced motion tracking: Utilizes sensors to precisely capture head movements for a more responsive user experience.\n- Integrated audio: Built-in surround sound delivers a truly immersive experience.\n- Wireless connectivity: Seamlessly pairs with smartphones, consoles, and computers via Bluetooth or Wi-Fi.\n\nUnique Value Proposition: The combination of top-tier resolution, high-performance motion sensors, and ergonomic design sets these VR Glasses apart, making them a versatile solution for gaming, virtual tours, simulations, education, and remote work environments.",

// // //             "Key Market Findings":
// // //                 "The global VR market is expected to experience exponential growth, with VR hardware being a major driver. The following insights highlight key findings related to the VR Glasses market:\n\nMarket Size: The global virtual reality market size was valued at <b>USD 21.83 billion</b> in 2022 and is projected to grow at a compound annual growth rate (CAGR) of <b>15.3%</b> from 2023 to 2028.\n\nTarget Audience: Key demographics include tech-savvy consumers aged 18-34, gaming enthusiasts, education institutions, and corporate professionals looking for virtual collaboration tools.\n\nCompetitive Landscape: Major competitors in the market include Oculus (Meta), HTC Vive, Sony PlayStation VR, and Samsung Gear VR. While these brands dominate, there is significant room for mid-range and feature-enhanced products that address unmet needs, such as improved portability and higher comfort levels.\n\nGrowth Trends: The integration of VR in industries beyond entertainment, such as education, healthcare, real estate, and virtual tourism, is a key driver of future demand.\n\nSee Graph 1: Projected Market Growth (2022–2028)",

// // //             "Product Opportunities":
// // //                 "Several opportunities exist for VR Glasses to expand market reach:\n\nUnmet Customer Needs: Survey data indicates that 45% of VR users desire lighter, more comfortable devices for extended use. Offering a more ergonomic solution could attract this untapped segment.\n\nEducational Applications: The global adoption of VR in education is forecasted to grow by 18% annually, creating a potential avenue for VR Glasses to be marketed as a learning tool.\n\nExpansion in Corporate Training: Companies are increasingly leveraging VR for employee training, onboarding, and remote collaboration. Expanding VR Glasses into enterprise-level solutions with customizable content could position the product as a go-to device for business solutions.\n\nSee Table 1: Emerging Market Applications for VR Glasses",

// // //             "Challenges & Risks":
// // //                 "While the VR Glasses market is poised for growth, several challenges must be addressed:\n\nHigh Competition: Established brands like Oculus and HTC dominate market share, making it difficult for new entrants to gain traction.\n\nCost Sensitivity: VR products are often viewed as luxury items, and high pricing could limit adoption, especially in emerging markets where cost sensitivity is a key factor.\n\nAdoption Barriers: Despite growing awareness, consumer reluctance to adopt VR, citing discomfort, motion sickness, and a lack of appealing content, remains an obstacle.\n\nRegulatory Concerns: Varying international regulations regarding data privacy, especially in applications involving personal and biometric data, could pose compliance challenges.\n\nSee Graph 2: Competitive Positioning and Consumer Adoption Barriers",

// // //             "Strategic Recommendation":
// // //                 "To enhance the market performance of VR Glasses, the following strategies are recommended:\n\nFocus on Comfort and Accessibility: Redesign the product for lightweight and ergonomic comfort, targeting underserved customer needs. Additionally, offering a lower-cost model for budget-conscious consumers can open new market segments.\n\nExpand into Education and Corporate Use: Create partnerships with educational institutions and corporations to market VR Glasses as a professional tool for virtual training and collaboration.\n\nImprove Content Offerings: Partner with content creators to develop exclusive experiences that demonstrate the value of VR in education, entertainment, and remote work, driving consumer interest.\n\nTarget Emerging Markets: Explore pricing strategies and regional marketing campaigns aimed at expanding into high-growth areas like Southeast Asia and Latin America.\n\nSee Case Study: Oculus Go’s Penetration Strategy in Emerging Markets"
// // //             },
// // //             "Key Market Findings": {
// // //                 "Trends in the market sector":
// // //                     "The AR glasses market is growing rapidly due to high demand for immersive experiences...",
// // //             },
// // //             "Product Opportunities": {
// // //                 "MVP Roadmap":
// // //                     "The Minimum Viable Product (MVP) for AR glasses should include core functionalities...",
// // //             },
// // //             "Challenges & Risks": {
// // //                 "Elevator pitch":
// // //                     "AR Glasses represent a cutting-edge advancement in wearable technology...",
// // //             },
// // //         };

// // //     const sidebarSections = [
// // //         {
// // //             title: "Executive Summary",
// // //             icon: FileText,
// // //             items: [
// // //                 "Product Overview",
// // //                 "Key Market Findings",
// // //                 "Product Opportunities",
// // //                 "Challenges & Risks",
// // //                 "Strategic Recommendation"
// // //             ],
// // //         },
// // //         {
// // //             title: "Introduction",
// // //             icon: Rocket,
// // //             items: [
// // //                 "Product Definition & Scope",
// // //                 "Purpose of the Report",
// // //                 "Methodology",
// // //                 "Data Collection Methods",
// // //                 "Analytical Tools Used",
// // //                 "Assumption & Limitation"
// // //             ],
// // //         },
// // //         {
// // //             title: "Product Overview",
// // //             icon: Package,
// // //             items: [
// // //                 "Product Definition & Characteristic",
// // //                 "Product Application",
// // //                 "Market Segmentation",
// // //                 "Product Lifecycle"
// // //             ],
// // //         },
// // //         {
// // //             title: "Market Dynamics",
// // //             icon: BarChart2,
// // //             items: [
// // //                 "Market Drivers",
// // //                 "Technological Innovations in the product",
// // //                 "Increasing Demand in specific Applications",
// // //                 "Regulatory Support",
// // //                 "Market Restraints",
// // //                 "Market Opportunities",
// // //                 "Market Challenges"
// // //             ],
// // //         },
// // //         {
// // //             title: "Competitive Landscape",
// // //             icon: Users,
// // //             items: [
// // //                 "Market Share Analysis",
// // //                 "Key Competitors",
// // //                 "Company Profiles",
// // //                 "Product Portfolio",
// // //                 "Pricing Strategy",
// // //                 "Financial Performance",
// // //                 "Recent Development",
// // //                 "SWOT Analysis",
// // //                 "Competitive Benchmarking",
// // //                 "Performance Comparison",
// // //                 "Market Positioning"
// // //             ]
// // //         },
// // //         {
// // //             title: "Product Segementation Analysis",
// // //             icon: Layers,
// // //             items: [
// // //                 "By Product Variant",
// // //                 "By Application",
// // //                 "By End-User",
// // //                 "By Region",
// // //             ]
// // //         },
// // //         {
// // //             title: "Market Forecast",
// // //             icon: TrendingUp,
// // //             items: [
// // //                 "Short Term",
// // //                 "Long Term",
// // //                 "Product Projections by Segmentation",
// // //                 "Scenario Analysis",
// // //                 "Sensitivity Analysis",
// // //             ]
// // //         },
// // //         {
// // //             title: "Technological Trends",
// // //             icon: Cpu,
// // //             items: [
// // //                 "Emerging Technologies Relevant to the Product",
// // //                 "Innovations in Product Design and Manufacturing",
// // //                 "Impact of AI, IoT, and Automation",
// // //                 "Sustainability and Green Technologies in Product Development",
// // //                 "Adoption of New Materials",
// // //             ]
// // //         },
// // //         {
// // //             title: "Consumer Behaviour Analysis",
// // //             icon: UserCheck,
// // //             items: [
// // //                 "Target Audience Profile",
// // //                 "Demographics",
// // //                 "Psychographics",
// // //                 "Buying Behaviour",
// // //                 "Purchase Frequency",
// // //                 "Brand Loyalty",
// // //                 "Influences on Purchase Decisions",
// // //                 "Consumers Feedback & Satisfaction",
// // //                 "Influence of Digital Platform & E-commerce"
// // //             ]
// // //         },
// // //         {
// // //             title: "Regulatory Environment",
// // //             icon: Shield,
// // //             items: [
// // //                 "Key Regulations & Standards Affecting the Product",
// // //                 "Compliance Requirement",
// // //                 "Certification & Testing",
// // //                 "Safety & Environemental Standards",
// // //                 "Impact of Trade Policies",
// // //                 "Import/Export Restrictions",
// // //                 "Regulatory Developments",
// // //                 "Recent Changes in Legislation",
// // //                 "Future Regulatory Outlook",
// // //             ]
// // //         },
// // //     ];

// // //     useEffect(() => {
// // //         if (activeSubsection && subsectionRefs.current[activeSubsection]) {
// // //             // Scroll to the subsection if clicked
// // //             subsectionRefs.current[activeSubsection]?.scrollIntoView({
// // //                 behavior: "smooth",
// // //                 block: "center",
// // //             });
// // //         }
// // //     }, [activeSubsection]);

// // //     useEffect(() => {
// // //         if (activeSection === "Executive Summary") {
// // //             const data = [
// // //                 { Year: 2022, Market_Value: 15.2, Units_Sold: 721 },
// // //                 { Year: 2023, Market_Value: 13.9, Units_Sold: 843 },
// // //                 { Year: 2024, Market_Value: 18.5, Units_Sold: 897 },
// // //                 { Year: 2025, Market_Value: 22.8, Units_Sold: 922 },
// // //                 { Year: 2026, Market_Value: 27.6, Units_Sold: 1006 }
// // //             ];

// // //             const labels = data.map(item => item.Year);
// // //             const marketValues = data.map(item => item.Market_Value);
// // //             const unitsSold = data.map(item => item.Units_Sold);

// // //             // Destroy previous charts if they exist
// // //             if (marketValueChart.current) {
// // //                 marketValueChart.current.destroy();
// // //             }
// // //             if (unitsSoldChart.current) {
// // //                 unitsSoldChart.current.destroy();
// // //             }

// // //             // Market Value Line Chart
// // //             if (chartRef1.current) {
// // //                 marketValueChart.current = new Chart(chartRef1.current, {
// // //                     type: 'line',
// // //                     data: {
// // //                         labels: labels,
// // //                         datasets: [{
// // //                             label: 'Market Value (in USD billions)',
// // //                             data: marketValues,
// // //                             borderColor: 'rgba(75, 192, 192, 1)',
// // //                             backgroundColor: 'rgba(75, 192, 192, 0.2)',
// // //                             borderWidth: 2,
// // //                             tension: 0.3,
// // //                             fill: true
// // //                         }]
// // //                     },
// // //                     options: {
// // //                         responsive: true,
// // //                         animation: {
// // //                             duration: 1500,
// // //                             easing: 'easeInOutBounce'
// // //                         },
// // //                         scales: {
// // //                             y: {
// // //                                 beginAtZero: true,
// // //                                 title: {
// // //                                     display: true,
// // //                                     text: 'Market Value (in USD billions)'
// // //                                 }
// // //                             },
// // //                             x: {
// // //                                 title: {
// // //                                     display: true,
// // //                                     text: 'Year'
// // //                                 }
// // //                             }
// // //                         }
// // //                     }
// // //                 });
// // //             }

// // //             // Units Sold Bar Chart
// // //             if (chartRef2.current) {
// // //                 unitsSoldChart.current = new Chart(chartRef2.current, {
// // //                     type: 'bar',
// // //                     data: {
// // //                         labels: labels,
// // //                         datasets: [{
// // //                             label: 'Units Sold (in thousands)',
// // //                             data: unitsSold,
// // //                             backgroundColor: 'rgba(153, 102, 255, 0.6)',
// // //                             borderColor: 'rgba(153, 102, 255, 1)',
// // //                             borderWidth: 1
// // //                         }]
// // //                     },
// // //                     options: {
// // //                         responsive: true,
// // //                         animation: {
// // //                             duration: 1500,
// // //                             easing: 'easeInOutBounce'
// // //                         },
// // //                         scales: {
// // //                             y: {
// // //                                 beginAtZero: true,
// // //                                 title: {
// // //                                     display: true,
// // //                                     text: 'Units Sold (in thousands)'
// // //                                 }
// // //                             },
// // //                             x: {
// // //                                 title: {
// // //                                     display: true,
// // //                                     text: 'Year'
// // //                                 }
// // //                             }
// // //                         }
// // //                     }
// // //                 });
// // //             }
// // //         }
// // //     }, [activeSection, activeSubsection]);

// // //     return (
// // //         <div className="flex h-screen bg-gray-100 font-sans">
// // //             {/* Sidebar */}
// // //             <div className="w-64 bg-gradient-to-b from-green-600 to-blue-700 text-white p-4 overflow-y-auto">
// // //                 <div className="flex items-center mb-8 cursor-pointer"
// // //                 onClick={handleLogoClick}>
// // //                     <img src="images/logo.jpg" alt="Small Logo" className="w-10 h-10 mr-2 rounded-full" />
// // //                     <h1 className="text-2xl font-bold font-poppins">Figurush</h1>
// // //                 </div>
// // //                 {sidebarSections.map((section) => (
// // //                     <div key={section.title} className="mb-6">
// // //                         <button
// // //                             className="flex items-center w-full text-left text-lg font-semibold font-roboto hover:text-gray-200"
// // //                             onClick={() => {
// // //                                 setActiveSection(section.title);
// // //                                 setActiveSubsection(null); // Reset subsection when changing sections
// // //                             }}
// // //                         >
// // //                             <section.icon className="w-5 h-5 mr-2" />
// // //                             <span>{section.title}</span>
// // //                             <ChevronDown className="w-4 h-4 ml-auto" />
// // //                         </button>
// // //                         {activeSection === section.title && (
// // //                             <ul className="mt-2 ml-6 space-y-1">
// // //                                 {section.items.map((item) => (
// // //                                     <li
// // //                                         key={item}
// // //                                         className={`text-sm cursor-pointer font-light ${activeSubsection === item
// // //                                             ? "text-yellow-300 font-bold"
// // //                                             : "text-gray-300 hover:text-white"
// // //                                             }`}
// // //                                         onClick={() => setActiveSubsection(item)}
// // //                                     >
// // //                                         {item}
// // //                                     </li>
// // //                                 ))}
// // //                             </ul>
// // //                         )}
// // //                     </div>
// // //                 ))}
// // //             </div>

// // //             {/* Main content */}
// // //             <div className="flex-1 p-10 overflow-y-auto bg-white shadow-lg rounded-lg">
// // //                 <div className="mb-8">
// // //                     <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
// // //                         {activeSection}
// // //                     </h2>
// // //                     {marketReportData[activeSection] &&
// // //                         Object.entries(marketReportData[activeSection]).map(
// // //                             ([subSectionTitle, subSectionContent], index) => (
// // //                                 <div
// // //                                     key={subSectionTitle}
// // //                                     ref={(el) =>
// // //                                         (subsectionRefs.current[subSectionTitle] = el)
// // //                                     }
// // //                                     className={`mb-8 p-6 rounded-md ${activeSubsection === subSectionTitle
// // //                                         ? "bg-gray-100 border border-gray-300"
// // //                                         : ""
// // //                                         }`}
// // //                                 >
// // //                                     <h3 className="text-2xl font-semibold mb-3 text-gray-700 font-roboto">
// // //                                         {subSectionTitle}
// // //                                     </h3>
// // //                                     {/* <p className="text-md text-gray-600 leading-relaxed font-light">
// // //                                         {subSectionContent.split("\n").map((line, i) => (
// // //                                             <span key={i}>
// // //                                                 {line}
// // //                                                 <br />
// // //                                             </span>
// // //                                         ))}
// // //                                     </p> */}
// // //                                     <p className="text-md text-gray-600 leading-relaxed font-light">
// // //                                         <span
// // //                                             dangerouslySetInnerHTML={{
// // //                                                 __html: subSectionContent.replace(/\n/g, "<br />"),
// // //                                             }}
// // //                                         />
// // //                                     </p>

// // //                                     {/* Insert charts after Key Market Findings */}
// // //                                     {activeSection === "Executive Summary" && subSectionTitle === "Key Market Findings" && (
// // //                                         <div>
// // //                                             <canvas ref={chartRef1} id="marketValueChart" style={{ marginTop: '40px' }}></canvas>
// // //                                         </div>
// // //                                     )}
// // //                                     {/* Insert charts after Product Opportunities */}
// // //                                     {activeSection === "Executive Summary" && subSectionTitle === "Product Opportunities" && (
// // //                                         <div>
// // //                                             <canvas ref={chartRef2} id="unitsSoldChart" style={{ marginTop: '40px' }}></canvas>
// // //                                         </div>
// // //                                     )}

// // //                                 </div>
// // //                             )
// // //                         )}
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // }
