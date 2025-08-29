// /lib/marketReportData.ts

export type ChartSpec =
  | {
      id: string;
      title: string;
      type: "bar" | "line" | "area" | "pie" | "radar";
      description?: string;
      data: any[];
      // common keys
      xKey?: string;
      yKey?: string;
      // multi-series
      series?: { name: string; key: string }[];
      // pie/radar specifics
      nameKey?: string;
      valueKey?: string;
      // optional: height
      height?: number;
      // ✅ new field: controls where to render in report
      subsection?: string;
      colors?: string[]; // ✅ optional palette per chart
    };

export type SectionContent =
  | string
  | string[]
  | {
      headline?: string;
      points?: string[];
      [key: string]: any;
    };

export type MarketReportData = Record<
  string,
  {
    [subSection: string]: SectionContent;
  } & {
    charts?: ChartSpec[];
  }
>;

// ──────────────────────────────────────────────────────────────────────────────

export const marketReportData: MarketReportData = {
  "Executive Summary": {
    "Product Overview": `
Nike is the global reference brand in athletic footwear, combining performance engineering with cultural relevance.  
The company operates at scale across **North America, Europe, and Asia–Pacific**, and sustains premium positioning through technology platforms (*Air, ZoomX, Flyknit*), athlete partnerships, and a diversified portfolio spanning performance, lifestyle, and Jordan.  

With an estimated **27–30% global share**, Nike’s competitive moat is reinforced by its design velocity, storytelling, and direct-to-consumer (DTC) ecosystem.
`,

    "Key Market Findings": `
- FY2024 footwear revenue is estimated at **$33B**, representing ~**68%** of total company revenue; gross margin resilience supported by DTC mix.  
- Category mix skews to performance: **Running ~40%**, **Basketball ~30%**, Lifestyle/Street **~18–20%**; training and other categories comprise the balance.  
- Channel shift continues: **DTC penetration >50%** in developed markets, lifting lifetime value (LTV) and data visibility; wholesale remains critical in APAC and LATAM.  
- Regional dynamics diverge: **North America** is maturing with price elasticity and promo intensity; **Europe** benefits from sports-lifestyle momentum; **APAC** (esp. India/SEA) drives unit growth.  
- Competitive intensity is rising in niche performance: **Hoka** and **On** outpace the market in premium running, while **adidas** retains strength in soccer and fashion collaborations.
`,

    "Product Opportunities": `
📌 **Priority Growth Vectors (12–36 months)**

- Women’s performance & lifestyle: close assortment gaps in running/training fits; inclusive sizing and targeted storytelling.  
- Tier-2/3 city expansion in **India & Southeast Asia** with price-architecture tuned to local ASP thresholds.  
- Sustainable lines (recycled & bio-based materials) positioned as premium feature sets, not compliance.  
- Data-driven personalization: fit guidance, training programs, and drop access via the **Nike App** to lift conversion and repeat purchase.  
- Selective fashion/music collaborations that extend lifestyle relevance without diluting performance credibility.
`,

    "Challenges & Risks": `
Execution risk remains elevated as the category normalizes from pandemic peaks and inventory rebalancing.

- Supply chain fragility: geopolitical exposure and material cost volatility can impact availability and margin.  
- North America pricing pressure: promotional cadence risks conditioning consumers to discounts.  
- Niche challengers: faster innovation cycles in premium running threaten share in high-value cohorts.  
- Counterfeits & marketplace quality control: persistent brand integrity risk.  
- Digital platform dependency: rising paid-media costs and privacy changes pressure DTC acquisition efficiency.
`,

    "Strategic Recommendation": `
🎯 **2025–2027 Strategic Priorities**

---

### 1) Lead in Performance Where It Matters Most
- Accelerate running innovation cadence (foam, plate geometry, energy return).  
- Formalize a “Pro Lab” funnel to commercial lines within 12–18 months.  
- Protect basketball icons with fewer, bigger, better launches; expand court-to-street storytelling.  

---

### 2) Scale Women’s and Wellness
- Build a women’s-first fit system and bottoms-to-shoes merchandising.  
- Launch community programs with female coaches and creators.  

---

### 3) Localize for Emerging Markets
- City-level playbooks with local athletes and ambassadors.  
- Price packs tuned to regional ASP bands.  
- Expand Click-&-Collect and retail partners for last-mile reliability.  

---

### 4) Make Sustainability a Value Proposition
- Increase recycled/bio-based content per line with transparent labeling.  
- Scale repair/recycle services to support premium willingness to pay.  

---

### 5) Win with Data & DTC Economics
- Invest in CRM and experimentation stack (offer testing, cohorts, CLV models).  
- Tighten wholesale door segmentation to reduce promotional leakage.  

---

📊 **Success Metrics (headline targets)**
- DTC mix: **+300–500 bps**  
- Repeat purchase rate: **+5–7 pts**  
- Women’s share of footwear revenue: **+400 bps**  
- Premium running sell-through: **>80% in season**  
- Units with recycled/bio materials: **>35% by FY27**
`,

    charts: [
      {
        id: "market-share-pie",
        title: "Global Athletic Footwear Market Share (2024)",
        type: "pie",
        subsection: "Key Market Findings", // ✅ show below Key Market Findings
        description: "Nike leads globally; challengers are compounding in premium running and lifestyle niches.",
        data: [
          { name: "Nike", value: 29.5 },
          { name: "adidas", value: 20.2 },
          { name: "Puma", value: 7.1 },
          { name: "Skechers", value: 6.4 },
          { name: "Hoka", value: 3.2 },
          { name: "On", value: 2.9 },
          { name: "Others", value: 30.7 }
        ],
        nameKey: "name",
        valueKey: "value",
        height: 300
      },
      {
        id: "category-revenue-bar",
        title: "Nike Footwear Revenue by Category (FY2024, $B)",
        type: "bar",
        subsection: "Challenges & Risks", // ✅ show ABOVE Strategic Recommendation
        data: [
          { category: "Running", revenue: 13.2 },
          { category: "Basketball", revenue: 9.7 },
          { category: "Lifestyle", revenue: 6.1 },
          { category: "Training", revenue: 2.7 },
          { category: "Soccer", revenue: 1.3 }
        ],
        xKey: "category",
        yKey: "revenue",
        height: 280
      }
    ]
  },

  "Introduction": {
    "Product Definition and Scope": `
  👟 **Nike Shoes: More Than Footwear**
  
  Nike’s footwear portfolio spans performance-driven models (running, basketball, soccer) and lifestyle sneakers that blend comfort and culture.  
  This report focuses exclusively on **Nike-branded athletic shoes** (excluding apparel/equipment).  
  
  Coverage includes core franchises (Air Max, Pegasus, Jordan, Dunk) and innovations driving Nike’s premium position.
  `,
  
    "Purpose of the Report": `
  📌 **Why This Report Exists**
  
  This report is designed to help stakeholders:
  - Understand Nike’s market position and competitive moat.  
  - Decode consumer preferences and buying behaviors.  
  - Identify growth opportunities by region, product line, and consumer cohort.  
  - Assess risks from pricing, supply chain, and emerging challengers.  
  
  The goal is to provide **actionable insights** for product strategy and market execution.
  `,
  
    "Methodology": `
  🔍 **Approach & Sources**
  
  The report uses **secondary research** across:
  - Nike Inc. filings (10-K, investor presentations).  
  - Market intelligence platforms (Statista, NPD Group, RunRepeat).  
  - Category-level case studies and footwear trend reports.  
  - Consumer sentiment from reviews, social search, and influencer traction.
  `,
  
    "Data Collection Methods": `
  📊 **Where the Data Comes From**
  
  - Financial disclosures: revenue splits, margins, DTC vs wholesale mix.  
  - Competitive benchmarking: adidas, Puma, Hoka, On.  
  - Digital trend analysis: Google search, Instagram hashtags, TikTok mentions.  
  - Regional segmentation models (age, gender, income, city tiers).  
  - Third-party data providers (NPD, Statista, Euromonitor).
  `,
  
    "Assumptions and Limitations": `
  ⚠️ **Interpretation Caveats**
  
  - All revenue splits are **FY2023–2025 estimates**; product-level disclosure is limited.  
  - Market share % varies slightly across data providers; this report uses weighted averages.  
  - Consumer sentiment analysis is directional — based on reviews, surveys, and digital chatter.  
  - Forecasts assume **mid-single-digit CAGR** for athletic footwear through 2030, barring shocks.  
  
  These assumptions align with industry norms, but final precision depends on Nike disclosures.
  `,
  
    charts: [
      {
        id: "data-sources-pie",
        title: "Data Source Breakdown",
        type: "pie",
        subsection: "Data Collection Methods", // ✅ chart below subsection
        description: "Most insights derive from company filings and third-party market research.",
        data: [
          { name: "Company Filings", value: 35 },
          { name: "Market Intelligence Platforms", value: 25 },
          { name: "Consumer Sentiment & Surveys", value: 20 },
          { name: "Competitive Benchmarking", value: 15 },
          { name: "Other Sources", value: 5 }
        ],
        nameKey: "name",
        valueKey: "value",
        height: 280
      },
      {
        id: "assumptions-bar",
        title: "Key Assumption Sensitivity",
        type: "bar",
        subsection: "Assumptions and Limitations", // ✅ chart below subsection
        description: "Impact of core assumptions on revenue forecast.",
        data: [
          { factor: "Revenue Split Accuracy", impact: 8 },
          { factor: "Regional Growth Variance", impact: 7 },
          { factor: "Consumer Sentiment Bias", impact: 6 },
          { factor: "Market Share Estimates", impact: 5 },
          { factor: "Forecast CAGR Assumption", impact: 9 }
        ],
        xKey: "factor",
        yKey: "impact",
        height: 300
      }
    ]
  },

  "Product Overview": {
    "Product Definition and Characteristics": `
  👟 **What Defines a Nike Shoe**
  
  Nike shoes combine **performance engineering** with cultural relevance.  
  Key features include:
  - Advanced cushioning platforms (Air, ZoomX, React).  
  - Lightweight, breathable uppers (Flyknit, FlyEase).  
  - Price spectrum from **$40 entry-level trainers** to **$250+ elite performance models**.  
  
  Nike balances accessibility with premium storytelling, ensuring relevance across athlete, casual, and collector audiences.
  `,
  
    "Demographics": `
  🎯 **Who Wears Nike?**
  
  Nike’s consumer base is diverse but skews toward **youthful, urban, and digitally savvy** audiences.
  
  - Age: Core 15–40 yrs; fastest growth among women 20–35.  
  - Gender: Historically male-dominated, but **female segments are growing faster**.  
  - Geography: Strong in **North America & Europe**; rapid growth in **India, SEA, and Africa**.  
  - Lifestyle: Fitness-driven, trend-conscious, and culturally connected.
  `,
  
    "Product Applications": `
  🏃‍♂️ **How Consumers Use Nike**
  
  Nike spans performance + lifestyle:
  - Running (Pegasus, Vaporfly).  
  - Basketball (Jordan, LeBron).  
  - Training (Metcon).  
  - Soccer (Phantom, Tiempo).  
  - Streetwear/Lifestyle (Air Force 1, Dunk).  
  - Collectibles (limited collabs, Off-White, Travis Scott).  
  `,
  
    "Market Segmentation": `
  📊 **Nike Market Segments**
  
  - **By Product Type**: Running, Basketball, Training, Soccer, Lifestyle.  
  - **By Consumer**: Men, Women, Kids/Teens.  
  - **By Price Tier**: Value ($40–80), Mid ($80–150), Premium ($150+).  
  - **By Channel**: DTC app/online, Nike stores, wholesale partners.  
  `,
  
    "Product Lifecycle": `
  🔄 **Lifecycle Stages**
  
  - **Introduction**: Smart footwear, connected apps (early adoption).  
  - **Growth**: Sustainable footwear (e.g., Space Hippie).  
  - **Maturity**: Classics (Air Force 1, Pegasus, Jordan Retro).  
  - **Decline**: Legacy SKUs phased into retro or outlet channels.  
  
  Nike refreshes demand through **relaunches, collabs, and limited drops**.
  `,
  
    charts: [
      {
        id: "demographics-bar",
        title: "Nike Consumer Demographics (Global, % Share)",
        type: "bar",
        subsection: "Demographics",
        description: "Nike’s core audience skews younger with accelerating female adoption.",
        data: [
          { group: "Men 15–30", share: 32 },
          { group: "Men 31–45", share: 18 },
          { group: "Women 15–30", share: 28 },
          { group: "Women 31–45", share: 12 },
          { group: "Teens & Kids", share: 10 }
        ],
        xKey: "group",
        yKey: "share",
        height: 300
      },
      {
        id: "applications-radar",
        title: "Nike Product Applications (Index 100 = Avg Use)",
        type: "radar",
        subsection: "Product Applications",
        description: "Performance categories dominate but lifestyle demand is structurally strong.",
        data: [
          { activity: "Running", index: 120 },
          { activity: "Basketball", index: 95 },
          { activity: "Training", index: 80 },
          { activity: "Soccer", index: 70 },
          { activity: "Lifestyle/Streetwear", index: 110 },
          { activity: "Collectibles", index: 60 }
        ],
        nameKey: "activity",
        valueKey: "index",
        height: 350
      },
      {
        id: "segmentation-bar",
        title: "Revenue Share by Price Tier (2024, %)",
        type: "bar",
        subsection: "Market Segmentation",
        description: "Mid-tier remains Nike’s revenue engine; premium tier drives margin & brand halo.",
        data: [
          { tier: "Value ($40–80)", share: 20 },
          { tier: "Mid ($80–150)", share: 50 },
          { tier: "Premium ($150+)", share: 30 }
        ],
        xKey: "tier",
        yKey: "share",
        height: 280
      },
      {
        id: "lifecycle-line",
        title: "Nike Product Lifecycle Dynamics (Indexed Demand, 2020–2025)",
        type: "line",
        subsection: "Product Lifecycle",
        description: "Lifestyle icons mature steadily; sustainable & smart footwear show sharp growth.",
        data: [
          { year: 2020, Classics: 100, Sustainable: 40, Smart: 20 },
          { year: 2021, Classics: 105, Sustainable: 55, Smart: 30 },
          { year: 2022, Classics: 110, Sustainable: 70, Smart: 40 },
          { year: 2023, Classics: 112, Sustainable: 90, Smart: 55 },
          { year: 2024, Classics: 115, Sustainable: 110, Smart: 75 },
          { year: 2025, Classics: 117, Sustainable: 130, Smart: 95 }
        ],
        xKey: "year",
        series: [
          { name: "Classics", key: "Classics" },
          { name: "Sustainable", key: "Sustainable" },
          { name: "Smart", key: "Smart" }
        ],
        height: 320
      }
    ]
  },

  "Market Dynamics": {
    "Market Drivers": `
  🚀 **What’s Fueling Nike’s Growth**
  
  - **Brand Equity**: Decades of athlete endorsements + cultural storytelling.  
  - **Innovation Velocity**: Advanced cushioning (ZoomX, React), sustainable tech (Flyknit, Space Hippie).  
  - **DTC Ecosystem**: Nike App, SNKRS, and stores driving higher margins + richer data.  
  - **Athleisure Trend**: Demand for versatile performance + lifestyle footwear.  
  - **Global Reach**: Stronghold in North America & Europe, with growth in APAC.  
  `,
  
    "Market Restraints": `
  ⛔ **Headwinds for Nike**
  
  - Premium pricing limits scale in **emerging markets**.  
  - Dependence on overseas manufacturing → supply chain shocks.  
  - **Saturation in North America** → slowing growth.  
  - Counterfeits & grey market undermine brand integrity.  
  - Rising compliance burden around sustainability.  
  `,
  
    "Market Opportunities": `
  💡 **Where Growth Can Accelerate**
  
  - Tier-2/3 cities in **India, Southeast Asia, and Africa**.  
  - **Women-led** performance and lifestyle categories.  
  - Circular economy → recycled & bio-based product lines.  
  - **AI personalization** in fit, training, and shopping journeys.  
  - Localized collabs with regional fashion & music influencers.  
  `,
  
    "Market Challenges": `
  ⚠️ **Risks That Threaten Execution**
  
  - Nimble disruptors (Hoka, On) accelerating in niche running.  
  - Volatile raw material costs & global trade tensions.  
  - Stricter sustainability standards in EU & North America.  
  - Consumer attention fatigue → requires constant refresh cycles.  
  `,
  
    charts: [
      {
        id: "drivers-bar",
        title: "Relative Importance of Market Growth Drivers (2024)",
        type: "bar",
        subsection: "Market Drivers",
        description: "Brand equity and innovation velocity remain Nike’s strongest accelerators.",
        data: [
          { driver: "Brand Equity", importance: 90 },
          { driver: "Innovation Velocity", importance: 85 },
          { driver: "DTC Ecosystem", importance: 80 },
          { driver: "Athleisure Trend", importance: 70 },
          { driver: "Global Reach", importance: 65 }
        ],
        xKey: "driver",
        yKey: "importance",
        height: 300
      },
      {
        id: "restraints-bar",
        title: "Impact Intensity of Market Restraints",
        type: "bar",
        subsection: "Market Restraints",
        description: "High reliance on overseas supply and mature North America remain core issues.",
        data: [
          { restraint: "High Pricing in Emerging Markets", impact: 75 },
          { restraint: "Supply Chain Dependency", impact: 85 },
          { restraint: "NA Market Saturation", impact: 80 },
          { restraint: "Counterfeit Market", impact: 70 },
          { restraint: "Sustainability Compliance", impact: 65 }
        ],
        xKey: "restraint",
        yKey: "impact",
        height: 280
      },
      {
        id: "opportunities-radar",
        title: "Emerging Market Opportunities (Indexed Potential)",
        type: "radar",
        subsection: "Market Opportunities",
        description: "Women’s category and eco-products stand out as scalable growth vectors.",
        data: [
          { area: "Women’s Performance", potential: 95 },
          { area: "Emerging Cities (India/SEA/Africa)", potential: 90 },
          { area: "Eco/Sustainable Lines", potential: 85 },
          { area: "AI Personalization", potential: 80 },
          { area: "Local Collabs", potential: 75 }
        ],
        nameKey: "area",
        valueKey: "potential",
        height: 320
      },
      {
        id: "challenges-line",
        title: "Evolution of Key Challenges (2020–2025)",
        type: "line",
        subsection: "Market Challenges",
        description: "Supply volatility and rising competition risks intensifying over time.",
        data: [
          { year: 2020, Competition: 50, SupplyChain: 60, Sustainability: 40, ConsumerFatigue: 45 },
          { year: 2021, Competition: 55, SupplyChain: 70, Sustainability: 50, ConsumerFatigue: 50 },
          { year: 2022, Competition: 65, SupplyChain: 75, Sustainability: 60, ConsumerFatigue: 55 },
          { year: 2023, Competition: 70, SupplyChain: 80, Sustainability: 65, ConsumerFatigue: 60 },
          { year: 2024, Competition: 75, SupplyChain: 85, Sustainability: 72, ConsumerFatigue: 68 },
          { year: 2025, Competition: 80, SupplyChain: 90, Sustainability: 80, ConsumerFatigue: 75 }
        ],
        xKey: "year",
        series: [
          { name: "Competition", key: "Competition" },
          { name: "SupplyChain", key: "SupplyChain" },
          { name: "Sustainability", key: "Sustainability" },
          { name: "ConsumerFatigue", key: "ConsumerFatigue" }
        ],
        height: 330
      }
    ]
  },
  

  "Competitive Landscape": {
    "Market Share Analysis": `
  📊 **Who’s Winning the Category**
  
  Nike maintains leadership in global athletic footwear, with strongholds in running and basketball.  
  adidas retains strength in soccer and fashion-driven collabs; Hoka and On are scaling quickly in premium running niches.
  `,
  
    "Key Competitors": `
  **Peer Set Overview**
  - **adidas** — soccer leadership, strong lifestyle collabs, Europe-centric brand energy.  
  - **Puma** — value-to-mid positioning, Gen-Z appeal in athleisure.  
  - **Hoka** — maximalist cushioning, explosive growth in premium running.  
  - **On** — Swiss engineering, urban performance/lifestyle crossover.  
  - **Skechers** — comfort-first, value-led, scale in US and India.  
  `,
  
    "Company Profiles": `
  **Snapshot Attributes (Nike focus)**
  - **Brand Equity**: global icon status powered by athlete storytelling.  
  - **Innovation**: platforms (Air, ZoomX, React); sustainable materials (Flyknit, Space Hippie).  
  - **Distribution**: scaled DTC (App/Stores) + selective wholesale.  
  `,
  
    "SWOT Analysis": `
  **Nike SWOT (condensed)**
  - **Strengths** — brand recognition, innovation cadence, athlete endorsements.  
  - **Weaknesses** — high pricing in EMs, supply chain dependency.  
  - **Opportunities** — women’s, eco-lines, emerging cities, AI personalization.  
  - **Threats** — niche disruptors (Hoka/On), counterfeit risk, NA saturation.  
  `,
  
    "Competitive Benchmarking": `
  **How Nike Stacks Up**
  - DTC economics outperform wholesale-heavy peers.  
  - Innovation & lifestyle storytelling drive premium willingness to pay.  
  - Channel mix varies by brand strategy and geography.  
  `,
  
    "Market Positioning": `
  **Brand Heat & Consideration**
  - Search interest shows the attention cycle across brands.  
  - Nike remains top-of-mind globally, with Hoka/On rising in urban/performance cohorts.  
  `,
  
    charts: [
      // ── Market Share (pie) ────────────────────────────────────────────────
      {
        id: "global-share-2024",
        title: "Global Athletic Footwear Market Share (2024)",
        type: "pie",
        subsection: "Market Share Analysis",
        description: "Nike leads globally; niche challengers are compounding in premium running.",
        data: [
          { name: "Nike", value: 29.5 },
          { name: "adidas", value: 20.2 },
          { name: "Puma", value: 7.1 },
          { name: "Skechers", value: 6.4 },
          { name: "Hoka", value: 3.2 },
          { name: "On", value: 2.9 },
          { name: "Others", value: 30.7 }
        ],
        nameKey: "name",
        valueKey: "value",
        height: 300,
        colors: ["#2563eb","#16a34a","#f59e0b","#ef4444","#8b5cf6","#06b6d4","#94a3b8"] // blue, green, amber, red, violet, cyan, slate
      },
  
      // ── Price Positioning (bar) ───────────────────────────────────────────
      {
        id: "median-price-by-brand",
        title: "Median Price by Brand (USD)",
        type: "bar",
        subsection: "Key Competitors",
        description: "Premium positioning supports Nike’s brand halo; Hoka/On are priced at a high-performance premium.",
        data: [
          { brand: "Nike", median: 140 },
          { brand: "adidas", median: 130 },
          { brand: "Puma", median: 95 },
          { brand: "Hoka", median: 170 },
          { brand: "On", median: 180 },
          { brand: "Skechers", median: 80 }
        ],
        xKey: "brand",
        yKey: "median",
        height: 280,
        colors: ["#0ea5e9"] // sky
      },
  
      // ── Channel Mix Benchmark (stacked bar) ───────────────────────────────
      {
        id: "channel-mix-by-brand",
        title: "Channel Mix by Brand (2024, % Revenue)",
        type: "bar",
        subsection: "Competitive Benchmarking",
        description: "Nike’s DTC skew raises margin & data advantage; wholesale remains key for reach at other brands.",
        data: [
          { brand: "Nike", DTC: 58, Wholesale: 42 },
          { brand: "adidas", DTC: 44, Wholesale: 56 },
          { brand: "Puma", DTC: 35, Wholesale: 65 },
          { brand: "Hoka", DTC: 48, Wholesale: 52 },
          { brand: "On", DTC: 50, Wholesale: 50 }
        ],
        xKey: "brand",
        series: [
          { name: "DTC", key: "DTC" },
          { name: "Wholesale", key: "Wholesale" }
        ],
        height: 300,
        colors: ["#10b981","#94a3b8"] // emerald, slate
      },
  
      // ── Brand Heat / Consideration (multi-line) ───────────────────────────
      {
        id: "brand-heat-index",
        title: "Brand Search Interest Index (2020–2025, 100 = 2020)",
        type: "line",
        subsection: "Market Positioning",
        description: "Rising trend for premium running challengers; Nike remains the reference brand.",
        data: [
          { year: 2020, Nike: 100, adidas: 100, Hoka: 100, On: 100, Puma: 100 },
          { year: 2021, Nike: 108, adidas: 103, Hoka: 118, On: 122, Puma: 101 },
          { year: 2022, Nike: 112, adidas: 104, Hoka: 135, On: 140, Puma: 103 },
          { year: 2023, Nike: 115, adidas: 106, Hoka: 150, On: 155, Puma: 104 },
          { year: 2024, Nike: 118, adidas: 107, Hoka: 162, On: 170, Puma: 105 },
          { year: 2025, Nike: 120, adidas: 108, Hoka: 170, On: 182, Puma: 106 }
        ],
        xKey: "year",
        series: [
          { name: "Nike", key: "Nike" },
          { name: "adidas", key: "adidas" },
          { name: "Hoka", key: "Hoka" },
          { name: "On", key: "On" },
          { name: "Puma", key: "Puma" }
        ],
        height: 320,
        colors: ["#2563eb","#16a34a","#f59e0b","#ef4444","#8b5cf6"] // brand lines
      },
  
      // ── SWOT Quant (single-brand bar) ─────────────────────────────────────
      {
        id: "nike-swot-scores",
        title: "Nike SWOT Quant (0–100)",
        type: "bar",
        subsection: "SWOT Analysis",
        description: "Directional quantification of SWOT themes to support prioritization.",
        data: [
          { factor: "Strengths", score: 92 },
          { factor: "Weaknesses", score: 48 },
          { factor: "Opportunities", score: 80 },
          { factor: "Threats", score: 62 }
        ],
        xKey: "factor",
        yKey: "score",
        height: 260,
        colors: ["#22c55e"] // green
      }
    ]
  },
  
  "Product Segmentation Analysis": {
    "By Product Variant": `
  🧬 **Nike’s Portfolio Breadth**
  
  Nike maintains distinct product lines to serve every athlete & lifestyle need:
  - **Running** (Pegasus, Vaporfly, Invincible).  
  - **Basketball** (Jordan, LeBron, KD).  
  - **Training/Gym** (Metcon, Free TR).  
  - **Soccer** (Phantom, Tiempo, Mercurial).  
  - **Lifestyle/Streetwear** (Air Force 1, Dunk, Blazer).  
  - **Customizable Models** via *Nike By You*.  
  `,
  
    "By Application": `
  🏃 **Applications by Use-Case**
  
  - **Performance Sports**: running, basketball, soccer, training.  
  - **Fitness/Training**: gym, CrossFit, HIIT.  
  - **Casual Wear**: lifestyle, college, athleisure.  
  - **Collector/Streetwear**: hype drops & collabs (Travis Scott, Off-White).  
  `,
  
    "By End-User": `
  👤 **Target Segments**
  
  - **Men** → largest contributor, esp. performance (running & basketball).  
  - **Women** → fastest growth, driven by fitness & lifestyle.  
  - **Kids/Teens** → strong seasonal cycles (back-to-school, sneaker culture).  
  `,
  
    "By Region": `
  🌎 **Regional Demand Trends**
  
  - **North America**: saturated, flat unit growth, strong basketball culture.  
  - **Europe**: lifestyle + eco lines outperform.  
  - **Asia-Pacific**: rapid expansion; India & SEA fueling demand.  
  - **Latin America & Africa**: early-stage markets with DTC experimentation.  
  `,
  
    charts: [
      // ── Product Variant Split ────────────────────────────
      {
        id: "variant-revenue-pie",
        title: "Revenue Share by Product Variant (2024, %)",
        type: "pie",
        subsection: "By Product Variant",
        description: "Running and Basketball dominate the portfolio; lifestyle supports cultural relevance.",
        data: [
          { variant: "Running", value: 38 },
          { variant: "Basketball", value: 30 },
          { variant: "Training", value: 12 },
          { variant: "Soccer", value: 8 },
          { variant: "Lifestyle/Streetwear", value: 12 }
        ],
        nameKey: "variant",
        valueKey: "value",
        height: 300,
        colors: ["#2563eb","#16a34a","#f59e0b","#ef4444","#06b6d4"]
      },
  
      // ── Applications Radar ───────────────────────────────
      {
        id: "application-radar",
        title: "Nike Applications Demand Index (2024, 100 = Avg)",
        type: "radar",
        subsection: "By Application",
        description: "Performance categories remain strong; lifestyle nearly as important.",
        data: [
          { use: "Running", index: 120 },
          { use: "Basketball", index: 110 },
          { use: "Training/Gym", index: 90 },
          { use: "Soccer", index: 80 },
          { use: "Lifestyle/Casual", index: 115 },
          { use: "Collector", index: 70 }
        ],
        nameKey: "use",
        valueKey: "index",
        height: 330,
        colors: ["#0ea5e9","#8b5cf6","#10b981","#f59e0b","#ef4444","#64748b"]
      },
  
      // ── End-User Bar ─────────────────────────────────────
      {
        id: "enduser-bar",
        title: "Revenue Contribution by End-User (2024, $B)",
        type: "bar",
        subsection: "By End-User",
        description: "Men dominate share; women’s segment accelerates YoY.",
        data: [
          { group: "Men", revenue: 20.5 },
          { group: "Women", revenue: 9.8 },
          { group: "Kids/Teens", revenue: 4.7 }
        ],
        xKey: "group",
        yKey: "revenue",
        height: 280,
        colors: ["#3b82f6"] // indigo
      },
  
      // ── Region Growth Line ───────────────────────────────
      {
        id: "regional-line",
        title: "Regional Revenue Growth Index (2020–2025)",
        type: "line",
        subsection: "By Region",
        description: "APAC outpaces; NA plateaus; Europe shows steady lifestyle-driven growth.",
        data: [
          { year: 2020, NorthAmerica: 100, Europe: 100, APAC: 100, LATAM: 100 },
          { year: 2021, NorthAmerica: 102, Europe: 104, APAC: 110, LATAM: 103 },
          { year: 2022, NorthAmerica: 103, Europe: 107, APAC: 122, LATAM: 106 },
          { year: 2023, NorthAmerica: 103, Europe: 110, APAC: 138, LATAM: 110 },
          { year: 2024, NorthAmerica: 102, Europe: 114, APAC: 155, LATAM: 115 },
          { year: 2025, NorthAmerica: 101, Europe: 118, APAC: 170, LATAM: 122 }
        ],
        xKey: "year",
        series: [
          { name: "North America", key: "NorthAmerica" },
          { name: "Europe", key: "Europe" },
          { name: "APAC", key: "APAC" },
          { name: "LATAM & Africa", key: "LATAM" }
        ],
        height: 320,
        colors: ["#1d4ed8","#16a34a","#f97316","#9333ea"] // blue, green, orange, purple
      }
    ]
  },

  "Market Forecast": {
    "Short-Term (1-3 years)": `
  📉 **Outlook FY2024–2026**
  
  - Near-term pressures from **inventory rebalancing** and **North America saturation**.  
  - Global market expected to grow at **~6–7% CAGR** through 2025.  
  - Recovery led by **Asia-Pacific & Europe**, while **North America flattens**.  
  - Nike to lean on **DTC acceleration** and **emerging cities** for momentum.  
  `,
  
    "Long-Term (5-10 years)": `
  📈 **Vision 2030: Sustained Expansion**
  
  - Athletic footwear market projected at **$250–270B by 2030** (6–7% CAGR).  
  - Nike likely to sustain leadership via **smart footwear, eco-innovation, and women’s categories**.  
  - Digital integration (AI sizing, AR try-ons) will become table stakes.  
  - Regional diversification key: **India, Southeast Asia, and Africa** are high-growth zones.  
  `,
  
    "Product Projections by Segmentation": `
  🔎 **Category-Level Outlook**
  
  - **Running** → remains #1, driven by women + APAC demand.  
  - **Basketball** → steady, supported by global NBA fandom + streetwear crossover.  
  - **Lifestyle/Streetwear** → strong cultural tailwind via collabs.  
  - **Training** → moderate growth as fitness tech expands.  
  - **Soccer** → niche but resilient in Europe & LATAM.  
  `,
  
    "Sensitivity Analysis": `
  ⚠️ **Forecast Sensitivities**
  
  - **Inflation & discretionary income** → high impact in EMs.  
  - **Supply chain fragility** → persistent global exposure.  
  - **Sustainability delivery gap** → reputational + compliance risk.  
  - **Social media virality** → trend cycles can accelerate/dampen demand.  
  `,
  
    charts: [
      // ── Short-Term (regional bar) ────────────────────────────
      {
        id: "shortterm-bar",
        title: "Regional Revenue Forecast FY2024–2026 (% YoY)",
        type: "bar",
        subsection: "Short-Term (1-3 years)",
        description: "APAC and Europe expected to drive short-term recovery; North America flat.",
        data: [
          { region: "North America", FY2024: -3, FY2025: 1, FY2026: 2 },
          { region: "Europe", FY2024: 2, FY2025: 4, FY2026: 5 },
          { region: "APAC", FY2024: 6, FY2025: 8, FY2026: 9 },
          { region: "LATAM", FY2024: 3, FY2025: 4, FY2026: 5 }
        ],
        xKey: "region",
        series: [
          { name: "FY2024", key: "FY2024" },
          { name: "FY2025", key: "FY2025" },
          { name: "FY2026", key: "FY2026" }
        ],
        height: 300,
        colors: ["#ef4444","#3b82f6","#16a34a"] // red, blue, green
      },
  
      // ── Long-Term (line CAGR) ───────────────────────────────
      {
        id: "longterm-line",
        title: "Global Athletic Footwear Market ($B, 2020–2030E)",
        type: "line",
        subsection: "Long-Term (5-10 years)",
        description: "Industry CAGR projected at 6–7% through 2030; Nike positioned to maintain leadership.",
        data: [
          { year: 2020, Market: 150 },
          { year: 2022, Market: 165 },
          { year: 2024, Market: 185 },
          { year: 2026, Market: 210 },
          { year: 2028, Market: 235 },
          { year: 2030, Market: 260 }
        ],
        xKey: "year",
        series: [{ name: "Market Size", key: "Market" }],
        height: 320,
        colors: ["#2563eb"] // blue
      },
  
      // ── Product Segmentation (stacked bar) ──────────────────
      {
        id: "category-stack",
        title: "Revenue Projections by Category (2025 vs 2030, $B)",
        type: "bar",
        subsection: "Product Projections by Segmentation",
        description: "Running remains dominant; Lifestyle accelerates from collab culture.",
        data: [
          { year: "2025", Running: 55, Basketball: 30, Lifestyle: 25, Training: 12, Soccer: 8 },
          { year: "2030", Running: 70, Basketball: 35, Lifestyle: 40, Training: 18, Soccer: 10 }
        ],
        xKey: "year",
        series: [
          { name: "Running", key: "Running" },
          { name: "Basketball", key: "Basketball" },
          { name: "Lifestyle", key: "Lifestyle" },
          { name: "Training", key: "Training" },
          { name: "Soccer", key: "Soccer" }
        ],
        height: 330,
        colors: ["#16a34a","#2563eb","#f59e0b","#ef4444","#8b5cf6"] // green, blue, amber, red, violet
      },
  
      // ── Sensitivity Tornado ─────────────────────────────────
      {
        id: "sensitivity-tornado",
        title: "Forecast Sensitivity Analysis (Impact Range on CAGR, bps)",
        type: "bar",
        subsection: "Sensitivity Analysis",
        description: "Inflation and supply chain fragility exert the largest downside risks.",
        data: [
          { factor: "Inflation / Disposable Income", downside: -120, upside: 40 },
          { factor: "Supply Chain Fragility", downside: -100, upside: 20 },
          { factor: "Sustainability Gap", downside: -80, upside: 30 },
          { factor: "Social Media Trend Cycles", downside: -50, upside: 60 }
        ],
        xKey: "factor",
        series: [
          { name: "Downside", key: "downside" },
          { name: "Upside", key: "upside" }
        ],
        height: 320,
        colors: ["#ef4444","#22c55e"] // red = downside, green = upside
      }
    ]
  },

  "Technological Trends": {
    "Emerging Technologies": `
  🛠️ **Key Emerging Innovations**
  
  - **Self-lacing systems** (Nike Adapt).  
  - **3D-printed midsoles** for performance customization.  
  - **Smart wearables** connected to apps & training ecosystems.  
  - **Augmented reality (AR) try-ons** via Nike App.  
  - **Blockchain/NFT sneakers** (digital twin for authenticity).  
  `,
  
    "Innovations in Product Design and Manufacturing": `
  🧵 **How Nike Designs Differently**
  
  - **Flyknit / FlyEase** for lightweight, adaptive, and accessible performance.  
  - **Modular construction** → repairability, customization.  
  - **Automation in factories** reduces lead times.  
  - **3D prototyping** accelerates R&D.  
  `,
  
    "Impact of AI IoT, and Automation": `
  🤖 **Digital + Smart Systems**
  
  - **AI** → personalization, fit guidance, predictive demand.  
  - **IoT** → connected shoes, athlete monitoring.  
  - **Automation** → robotics in warehouses & factories.  
  Together, these raise margins & improve consumer stickiness.  
  `,
  
    "Sustainability and Green Technologies": `
  🌱 **Nike’s Eco-Tech Roadmap**
  
  - **Space Hippie line** (recycled yarn).  
  - **Waterless dyeing** techniques.  
  - **Carbon-neutral factories** (in progress).  
  - Scaling **repair/recycle services** as new consumer expectations.  
  `,
  
    "Adoption of New Materials": `
  🧪 **Next-Gen Materials**
  
  - **Bio-based leathers** (e.g., Piñatex).  
  - **Recyclable foams & soles**.  
  - **Compostable fabric blends**.  
  - Transitioning material mix by 2030 to align with sustainability mandates.  
  `,
  
    charts: [
      // ── Emerging Tech (Bubble/Scatter) ────────────────────────────────
      {
        id: "emerging-tech-scatter",
        title: "Emerging Technology Landscape (Maturity vs Adoption)",
        type: "radar", // ✅ could be rendered as scatter if supported
        subsection: "Emerging Technologies",
        description: "Self-lacing and 3D printing are niche but gaining adoption; AR and blockchain remain exploratory.",
        data: [
          { tech: "Self-lacing", maturity: 70, adoption: 30 },
          { tech: "3D Printing", maturity: 65, adoption: 40 },
          { tech: "AR Try-ons", maturity: 50, adoption: 25 },
          { tech: "Smart Wearables", maturity: 75, adoption: 55 },
          { tech: "NFT/Blockchain", maturity: 30, adoption: 15 }
        ],
        nameKey: "tech",
        valueKey: "adoption",
        height: 330,
        colors: ["#2563eb","#10b981","#f97316","#8b5cf6","#ef4444"]
      },
  
      // ── Design/Manufacturing Innovations (bar) ─────────────────────────
      {
        id: "manufacturing-bar",
        title: "Impact of Design & Manufacturing Innovations (0–100 Index)",
        type: "bar",
        subsection: "Innovations in Product Design and Manufacturing",
        description: "Flyknit and modular construction deliver the strongest long-term margin and sustainability impact.",
        data: [
          { innovation: "Flyknit / FlyEase", impact: 90 },
          { innovation: "Modular Construction", impact: 75 },
          { innovation: "3D Prototyping", impact: 70 },
          { innovation: "Automation in Factories", impact: 80 }
        ],
        xKey: "innovation",
        yKey: "impact",
        height: 280,
        colors: ["#16a34a"]
      },
  
      // ── AI/IoT/Automation (stacked bar) ───────────────────────────────
      {
        id: "ai-iot-stack",
        title: "Adoption Levels: AI vs IoT vs Automation (2020–2025)",
        type: "bar",
        subsection: "Impact of AI IoT, and Automation",
        description: "AI personalization accelerates faster than IoT adoption; robotics scale in warehouses.",
        data: [
          { year: 2020, AI: 20, IoT: 10, Automation: 15 },
          { year: 2021, AI: 30, IoT: 15, Automation: 25 },
          { year: 2022, AI: 45, IoT: 25, Automation: 35 },
          { year: 2023, AI: 60, IoT: 35, Automation: 45 },
          { year: 2024, AI: 75, IoT: 45, Automation: 60 },
          { year: 2025, AI: 90, IoT: 55, Automation: 75 }
        ],
        xKey: "year",
        series: [
          { name: "AI", key: "AI" },
          { name: "IoT", key: "IoT" },
          { name: "Automation", key: "Automation" }
        ],
        height: 320,
        colors: ["#3b82f6","#f59e0b","#22c55e"]
      },
  
      // ── Sustainability (Area Growth) ──────────────────────────────────
      {
        id: "sustainability-area",
        title: "Sustainable SKU Penetration (% of Total Portfolio, 2020–2030E)",
        type: "area",
        subsection: "Sustainability and Green Technologies",
        description: "Sustainable footwear projected to exceed 50% of portfolio by 2030.",
        data: [
          { year: 2020, Sustainable: 5 },
          { year: 2022, Sustainable: 10 },
          { year: 2024, Sustainable: 18 },
          { year: 2026, Sustainable: 28 },
          { year: 2028, Sustainable: 40 },
          { year: 2030, Sustainable: 55 }
        ],
        xKey: "year",
        series: [{ name: "Sustainable", key: "Sustainable" }],
        height: 300,
        colors: ["#16a34a"]
      },
  
      // ── Materials Adoption (Pie) ──────────────────────────────────────
      {
        id: "materials-pie",
        title: "Projected Material Mix in Nike Footwear (2030E)",
        type: "pie",
        subsection: "Adoption of New Materials",
        description: "Bio-based and recycled materials expected to represent majority of input mix by 2030.",
        data: [
          { name: "Traditional Synthetics", value: 25 },
          { name: "Recycled Materials", value: 30 },
          { name: "Bio-Based Leathers", value: 20 },
          { name: "Recyclable Foams", value: 15 },
          { name: "Compostable Fabrics", value: 10 }
        ],
        nameKey: "name",
        valueKey: "value",
        height: 300,
        colors: ["#64748b","#16a34a","#f59e0b","#3b82f6","#8b5cf6"]
      }
    ]
  },

  "Consumer Behavior Analysis": {
    "Target Audience Profile": `
  👤 **Nike Consumer Profile (2025)**
  
  - **Age Range**: 15–45 years; Gen Z & younger Millennials most influential.  
  - **Gender**: Historically male-heavy, but women’s share growing **2× faster**.  
  - **Location**: Urban & semi-urban hubs in North America, Europe, India, East Asia.  
  - **Lifestyle**: Active, fitness-oriented, but also fashion-conscious & digitally native.  
  `,
  
    "Demographics": `
  📍 **Core Demographic Segments**
  
  - **Urban Affluent**: high-income, high spend, heavy adoption of limited drops.  
  - **Middle-Class Families**: mix of performance + lifestyle, strong seasonal cycles.  
  - **Emerging Market Youth**: aspirational buyers in India, SEA, Africa.  
  `,
  
    "Psychographics": `
  🧠 **Nike Consumer Mindset**
  
  - **Aspirational** — brand as badge of identity, not just utility.  
  - **Innovation-Oriented** — trust in Nike’s tech & storytelling.  
  - **Sustainability-Aware** — expect eco-lines & transparent sourcing.  
  - **Trend-Seeking** — limited drops, collabs, and social proof drive excitement.  
  `,
  
    "Buying Behavior": `
  🛒 **Purchase Drivers**
  
  - Online-first in developed markets; offline multi-brand retail still key in EMs.  
  - Repeat purchase **3–4x/year** for athletes, **1–2x/year** for casual buyers.  
  - Collabs & limited editions drive “drop-day” traffic spikes.  
  `,
  
    "Purchase Frequency": `
  📆 **Shopping Patterns**
  
  - Runners & athletes → new pairs every **3–6 months**.  
  - Sneakerheads → opportunistic, tied to collab drops.  
  - Seasonality: **Q2 (summer sports)** & **Q4 (holiday gifting)** peaks.  
  `,
  
    "Brand Loyalty": `
  🔁 **Loyalty Dynamics**
  
  - High lifetime value (LTV) from repeat runners.  
  - Nike Membership & **Nike App gamification** boosts stickiness.  
  - Attrition risk: younger Gen Z increasingly experiments with niche brands.  
  `,
  
    "Influences on Purchase Decisions": `
  📲 **Key Influence Channels**
  
  - Athlete endorsements.  
  - Peer recommendations & sneaker culture forums.  
  - Instagram/TikTok aesthetics.  
  - Product reviews & unboxing videos.  
  `,
  
    "Consumer Feedback and Satisfaction": `
  🌟 **Voice of the Consumer**
  
  - **Positives**: comfort, performance, design innovation.  
  - **Negatives**: stock availability, premium pricing, drop-day frustrations.  
  `,
  
    "Influence of Digital Platforms and E-commerce": `
  🛍️ **Digital Dominance**
  
  - >50% of Nike sales now from digital (App, SNKRS, e-comm).  
  - Mobile-first experiences outperform desktop.  
  - Personalized CRM campaigns lift conversion by **20–25%**.  
  - Social commerce integrations (Instagram Shop, TikTok Shop) rising fast.  
  `,
  
    charts: [
      // ── Target Audience Age Pyramid ───────────────────────
      {
        id: "age-pyramid",
        title: "Nike Consumers by Age Group (2024, %)",
        type: "bar",
        subsection: "Target Audience Profile",
        description: "Gen Z and Millennials dominate the Nike consumer base.",
        data: [
          { age: "15–24", share: 35 },
          { age: "25–34", share: 30 },
          { age: "35–44", share: 20 },
          { age: "45+", share: 15 }
        ],
        xKey: "age",
        yKey: "share",
        height: 280,
        colors: ["#2563eb"]
      },
  
      // ── Gender Split Pie ──────────────────────────────────
      {
        id: "gender-split",
        title: "Gender Split of Nike Buyers (2024)",
        type: "pie",
        subsection: "Demographics",
        description: "Women’s share accelerating at ~2× growth vs men.",
        data: [
          { name: "Men", value: 62 },
          { name: "Women", value: 33 },
          { name: "Kids/Teens", value: 5 }
        ],
        nameKey: "name",
        valueKey: "value",
        height: 280,
        colors: ["#3b82f6","#ec4899","#f59e0b"]
      },
  
      // ── Psychographic Radar ───────────────────────────────
      {
        id: "psychographic-radar",
        title: "Nike Consumer Psychographic Index (2025, 0–100)",
        type: "radar",
        subsection: "Psychographics",
        description: "Aspirational and trend-seeking values score highest.",
        data: [
          { trait: "Aspirational", index: 95 },
          { trait: "Innovation-Oriented", index: 85 },
          { trait: "Sustainability-Aware", index: 70 },
          { trait: "Trend-Seeking", index: 90 }
        ],
        nameKey: "trait",
        valueKey: "index",
        height: 320,
        colors: ["#8b5cf6","#10b981","#f59e0b","#ef4444"]
      },
  
      // ── Buying Behavior Funnel ────────────────────────────
      {
        id: "buying-funnel",
        title: "Nike Consumer Journey Funnel (2024, % of Audience)",
        type: "bar",
        subsection: "Buying Behavior",
        description: "Conversion strongest at awareness → interest; biggest drop-off at checkout.",
        data: [
          { stage: "Awareness", value: 100 },
          { stage: "Interest", value: 75 },
          { stage: "Consideration", value: 55 },
          { stage: "Purchase", value: 35 },
          { stage: "Repeat", value: 20 }
        ],
        xKey: "stage",
        yKey: "value",
        height: 300,
        colors: ["#06b6d4"]
      },
  
      // ── Purchase Frequency Line ──────────────────────────
      {
        id: "purchase-frequency-line",
        title: "Average Purchase Frequency (Pairs/Year, 2020–2025)",
        type: "line",
        subsection: "Purchase Frequency",
        description: "Frequency rising due to collabs and digital engagement.",
        data: [
          { year: 2020, Athletes: 2.5, Casual: 1.0, Sneakerheads: 3.0 },
          { year: 2021, Athletes: 2.7, Casual: 1.1, Sneakerheads: 3.5 },
          { year: 2022, Athletes: 3.0, Casual: 1.2, Sneakerheads: 4.0 },
          { year: 2023, Athletes: 3.1, Casual: 1.3, Sneakerheads: 4.2 },
          { year: 2024, Athletes: 3.2, Casual: 1.4, Sneakerheads: 4.5 },
          { year: 2025, Athletes: 3.4, Casual: 1.5, Sneakerheads: 4.8 }
        ],
        xKey: "year",
        series: [
          { name: "Athletes", key: "Athletes" },
          { name: "Casual", key: "Casual" },
          { name: "Sneakerheads", key: "Sneakerheads" }
        ],
        height: 320,
        colors: ["#16a34a","#2563eb","#f59e0b"]
      },
  
      // ── Loyalty Gauge (SWOT-style) ───────────────────────
      {
        id: "loyalty-gauge",
        title: "Nike Brand Loyalty Index (2025, 0–100)",
        type: "bar",
        subsection: "Brand Loyalty",
        description: "Loyalty remains high, though Gen Z churn risk exists.",
        data: [
          { factor: "Overall Loyalty", score: 85 },
          { factor: "Nike Membership Impact", score: 75 },
          { factor: "Attrition Risk", score: 40 }
        ],
        xKey: "factor",
        yKey: "score",
        height: 280,
        colors: ["#22c55e"]
      },
  
      // ── Digital Influence Stacked ────────────────────────
      {
        id: "digital-platforms-stacked",
        title: "Digital Platform Influence on Purchases (2024, %)",
        type: "bar",
        subsection: "Influence of Digital Platforms and E-commerce",
        description: "Mobile apps dominate influence; social commerce rising fast.",
        data: [
          { platform: "Nike App", Direct: 40, Social: 10 },
          { platform: "SNKRS", Direct: 25, Social: 15 },
          { platform: "Instagram Shop", Direct: 10, Social: 20 },
          { platform: "TikTok Shop", Direct: 5, Social: 15 },
          { platform: "Other Marketplaces", Direct: 20, Social: 10 }
        ],
        xKey: "platform",
        series: [
          { name: "Direct", key: "Direct" },
          { name: "Social", key: "Social" }
        ],
        height: 320,
        colors: ["#3b82f6","#ec4899"]
      }
    ]
  },

  
  "Competitor Analysis": {
    "Price Range": `
  💰 **Pricing Architecture Across Competitors**
  
  - **Nike**: Mid-to-premium, \$50–\$200 (₹3,000–₹15,000). Avg ASP ~\$95.  
  - **adidas**: Similar spread, but slightly lower ASP (\$85).  
  - **Puma**: Affordable + fashion, ASP ~\$70.  
  - **Hoka & On**: Premium niche runners, ASP \$150–\$220.  
  - **Skechers**: Value segment, ASP \$60.  
  
  Nike defends premium pricing through innovation, collabs, and brand equity.  
  `,
  
    "Demographics": `
  🧍 **Consumer Focus by Brand**
  
  - **Nike**: Broad-based, blends performance + lifestyle, strong in youth segments.  
  - **adidas**: Fashion-forward + soccer culture, urban youth in Europe.  
  - **Puma**: Gen Z lifestyle, affordable athleisure.  
  - **Hoka**: Performance runners, older Millennials & Gen X.  
  - **On**: Tech-savvy, urban professionals in developed markets.  
  - **Skechers**: Comfort-first, older adults, budget-conscious families.  
  `,
  
    "Benchmarking": `
  📈 **Competitor Benchmark Matrix**
  
  Nike leads in **brand equity, athlete endorsements, and storytelling**, but faces pressure in **sustainability** (where adidas is stronger) and **innovation efficiency per dollar** (where Hoka/On excel).  
  `,
  
    "Value Proposition Comparison": `
  🧭 **Relative Strengths by Attribute**
  
  - **Nike**: Balanced across performance + lifestyle.  
  - **adidas**: Strongest in sustainability + collabs.  
  - **Puma**: Youth lifestyle relevance.  
  - **Hoka/On**: Performance-first innovation, high unit ASP.  
  - **Skechers**: Value + comfort.  
  `,
  
    "Growth Momentum": `
  🚀 **Market Share Momentum**
  
  - **Hoka & On**: growing **20–30% YoY** in premium running.  
  - **adidas**: stabilizing after Yeezy phase-out, rebound in soccer.  
  - **Puma**: steady double-digit growth via athleisure.  
  - **Skechers**: value-driven growth in India & US.  
  - **Nike**: resilient, but growth slower in NA vs APAC.  
  `,
  
    charts: [
      // ── Price Range Comparison (bar) ──────────────────────────────
      {
        id: "price-bar",
        title: "Average Selling Price (ASP) by Brand (2024, USD)",
        type: "bar",
        subsection: "Price Range",
        description: "Nike sits mid-premium; Hoka & On skew higher; Skechers plays value.",
        data: [
          { brand: "Nike", ASP: 95 },
          { brand: "adidas", ASP: 85 },
          { brand: "Puma", ASP: 70 },
          { brand: "Hoka", ASP: 160 },
          { brand: "On", ASP: 180 },
          { brand: "Skechers", ASP: 60 }
        ],
        xKey: "brand",
        yKey: "ASP",
        height: 300,
        colors: ["#2563eb"]
      },
  
      // ── Demographic Split (stacked bar) ────────────────────────────
      {
        id: "demographic-stacked",
        title: "Primary Consumer Demographics by Brand (2024, %)",
        type: "bar",
        subsection: "Demographics",
        description: "Nike maintains breadth, adidas strong in urban youth, Hoka/On skew older performance runners.",
        data: [
          { brand: "Nike", Youth: 40, Women: 25, Men: 35 },
          { brand: "adidas", Youth: 45, Women: 20, Men: 35 },
          { brand: "Puma", Youth: 55, Women: 25, Men: 20 },
          { brand: "Hoka", Youth: 20, Women: 30, Men: 50 },
          { brand: "On", Youth: 25, Women: 35, Men: 40 },
          { brand: "Skechers", Youth: 15, Women: 40, Men: 45 }
        ],
        xKey: "brand",
        series: [
          { name: "Youth", key: "Youth" },
          { name: "Women", key: "Women" },
          { name: "Men", key: "Men" }
        ],
        height: 320,
        colors: ["#3b82f6","#ec4899","#f59e0b"]
      },
  
      // ── Benchmark Radar ──────────────────────────────────────────
      {
        id: "benchmark-radar",
        title: "Competitor Benchmark Matrix (0–100 Index)",
        type: "radar",
        subsection: "Benchmarking",
        description: "Nike tops in brand equity + athlete endorsements; adidas leads sustainability; Hoka/On win innovation efficiency.",
        data: [
          { attribute: "Brand Equity", Nike: 95, adidas: 85, Puma: 75, Hoka: 70, On: 72, Skechers: 60 },
          { attribute: "Innovation", Nike: 90, adidas: 80, Puma: 70, Hoka: 85, On: 88, Skechers: 65 },
          { attribute: "Sustainability", Nike: 70, adidas: 90, Puma: 65, Hoka: 72, On: 70, Skechers: 55 },
          { attribute: "Athlete Endorsements", Nike: 95, adidas: 90, Puma: 65, Hoka: 60, On: 55, Skechers: 50 },
          { attribute: "Lifestyle Relevance", Nike: 92, adidas: 88, Puma: 80, Hoka: 65, On: 70, Skechers: 60 }
        ],
        nameKey: "attribute",
        series: [
          { name: "Nike", key: "Nike" },
          { name: "adidas", key: "adidas" },
          { name: "Puma", key: "Puma" },
          { name: "Hoka", key: "Hoka" },
          { name: "On", key: "On" },
          { name: "Skechers", key: "Skechers" }
        ],
        height: 350,
        colors: ["#2563eb","#16a34a","#f59e0b","#8b5cf6","#ef4444","#64748b"]
      },
  
      // ── Value Proposition (stacked bar) ───────────────────────────
      {
        id: "value-prop-stacked",
        title: "Value Proposition Index by Attribute (0–100)",
        type: "bar",
        subsection: "Value Proposition Comparison",
        description: "adidas leads sustainability; Hoka/On dominate innovation per unit; Nike stays balanced.",
        data: [
          { brand: "Nike", Performance: 90, Lifestyle: 85, Sustainability: 70 },
          { brand: "adidas", Performance: 80, Lifestyle: 88, Sustainability: 90 },
          { brand: "Puma", Performance: 65, Lifestyle: 80, Sustainability: 65 },
          { brand: "Hoka", Performance: 88, Lifestyle: 60, Sustainability: 72 },
          { brand: "On", Performance: 90, Lifestyle: 62, Sustainability: 70 },
          { brand: "Skechers", Performance: 60, Lifestyle: 55, Sustainability: 50 }
        ],
        xKey: "brand",
        series: [
          { name: "Performance", key: "Performance" },
          { name: "Lifestyle", key: "Lifestyle" },
          { name: "Sustainability", key: "Sustainability" }
        ],
        height: 330,
        colors: ["#16a34a","#3b82f6","#f59e0b"]
      },
  
      // ── Growth Momentum Line ─────────────────────────────
      {
        id: "growth-momentum-line",
        title: "Revenue Growth Momentum (Indexed, 2020–2025)",
        type: "line",
        subsection: "Growth Momentum",
        description: "Hoka & On outpace all with premium growth; Nike resilient but slower in NA.",
        data: [
          { year: 2020, Nike: 100, adidas: 100, Puma: 100, Hoka: 100, On: 100, Skechers: 100 },
          { year: 2021, Nike: 104, adidas: 102, Puma: 105, Hoka: 120, On: 118, Skechers: 103 },
          { year: 2022, Nike: 108, adidas: 104, Puma: 110, Hoka: 145, On: 138, Skechers: 108 },
          { year: 2023, Nike: 110, adidas: 103, Puma: 115, Hoka: 170, On: 160, Skechers: 112 },
          { year: 2024, Nike: 112, adidas: 105, Puma: 120, Hoka: 195, On: 185, Skechers: 118 },
          { year: 2025, Nike: 115, adidas: 108, Puma: 125, Hoka: 220, On: 210, Skechers: 125 }
        ],
        xKey: "year",
        series: [
          { name: "Nike", key: "Nike" },
          { name: "adidas", key: "adidas" },
          { name: "Puma", key: "Puma" },
          { name: "Hoka", key: "Hoka" },
          { name: "On", key: "On" },
          { name: "Skechers", key: "Skechers" }
        ],
        height: 350,
        colors: ["#2563eb","#16a34a","#f59e0b","#8b5cf6","#ef4444","#64748b"]
      }
    ]
  },
  
  
};
