"use client"

import { useState } from "react";
import {
  ChevronDown,
  Bell,
  CreditCard,
  Search,
  HelpCircle,
  Image,
  Camera,
  FileText,
  Video,
  Instagram,
  Package,
  Layers,
  Users,
  FileText as CompetitorInsights,
  Lightbulb,
  ClipboardList,
  Cpu,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AssetSelectionPage() {
  const [activeSection, setActiveSection] = useState("Brands");

  const navigationItems = [
    { title: "Brands", icon: Users },
    { title: "Projects", icon: Package },
    { title: "Competitor Insights", icon: CompetitorInsights },
    { title: "Inspiration Gallery", icon: Lightbulb },
    { title: "Creative Scoring AI", icon: Cpu },
    { title: "Creative Utility Suite", icon: ClipboardList },
    { title: "Settings", icon: Settings },
  ];

  const assetTypes = [
    { icon: Image, title: "Ad Creatives", description: "Generate conversion-focused ad creatives for your product/service in seconds using our AI.", color: "bg-green-500" },
    { icon: Camera, title: "Product Photo Ads", description: "Transform your product photo into a professional-looking shoot with AI-generated environments.", color: "bg-blue-500", isNew: true },
    { icon: Image, title: "Stock Images", description: "Generate unique and commercially safe stock images using our Artificial Intelligence.", color: "bg-teal-500", isNew: true },
    { icon: FileText, title: "Ad Texts", description: "Generate texts that utilize high-conversion-rate copywriting methodologies using our AI.", color: "bg-cyan-500" },
    { icon: Video, title: "Ad Videos", description: "Generate conversion-focused videos using your product images, thanks to our AI.", color: "bg-green-600", isNew: true },
    { icon: Instagram, title: "Social Creatives", description: "Generate engagement-focused social media post creatives in seconds using our AI.", color: "bg-blue-600" },
    { icon: Package, title: "Ad Package", description: "Generate strategies, ad creatives, texts, and target audiences within a single project.", color: "bg-lime-500" },
    { icon: Layers, title: "Batch Creatives", description: "Generate creatives in batches using multiple background/product images within a single project.", color: "bg-green-700" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-96 p-6 flex flex-col bg-gradient-to-b from-green-600 to-blue-700 text-white">
        <div className="flex items-center mb-8">
        <img src="images/logo.jpg" alt="Small Logo" className="w-10 h-10 mr-2 rounded-full" />
          <span className="text-2xl font-bold font-poppins">Figurush</span>
        </div>
        <nav className="space-y-2 flex-grow">
          {navigationItems.map((item) => (
            <div
              key={item.title}
              className={`flex items-center p-2 rounded-lg cursor-pointer ${
                activeSection === item.title
                  ? "bg-gray-100 text-green-600"
                  : "text-white hover:bg-gray-400"
              }`}
              onClick={() => setActiveSection(item.title)}
            >
              <item.icon className="w-6 h-6 mr-2" />
              {item.title}
            </div>
          ))}
        </nav>
        <Card className="mt-auto">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-1">Trial</h3>
            <p className="text-sm text-gray-800 mb-2">Trial ends in 6 days.</p>
            <div className="text-2xl font-bold text-green-500">10 Credits</div>
          </CardContent>
        </Card>
      </aside>

      {/* Main content */}
      <main className="flex-grow p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="relative w-64">
            <Input placeholder="StoreFilter" className="pl-10 pr-4 py-2" />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="bg-white">
              Upgrade 🔥
            </Button>
            <Button variant="outline" className="bg-white">
              Additional Credits <CreditCard className="ml-2 h-4 w-4" />
            </Button>
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium">
              GS
            </div>
          </div>
        </header>

        {/* Asset Selection */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">AI-Generated Asset Selection</h2>
              <p className="text-gray-600">
                Select the asset type you would like to generate using our Artificial Intelligence.
              </p>
            </div>
            <Button variant="outline" className="bg-white">
              How does it work? <HelpCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assetTypes.map((asset, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className={`w-12 h-1 ${asset.color} mb-4 rounded`}></div>
                  <asset.icon className="w-8 h-8 mb-2 text-gray-600" />
                  <h3 className="font-semibold mb-1">{asset.title}</h3>
                  {asset.isNew && <Badge className="mb-2">NEW</Badge>}
                  <p className="text-sm text-gray-600">{asset.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
