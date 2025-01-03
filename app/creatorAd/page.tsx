'use client'

import { useState } from 'react'
import { Bell, ChevronDown, CreditCard, Image, Camera, FileText, Video, Instagram, Package, Layers, ChevronRight, Users, Lightbulb, Cpu, ClipboardList, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdCreator() {
  const [activeSection, setActiveSection] = useState("Brands");
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAsset, setSelectedAsset] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [adText, setAdText] = useState({ headline: '', punchline: '', cta: '' })
  const [backgroundImage, setBackgroundImage] = useState('')

  const navigationItems = [
    { title: "Brands", icon: Users },
    { title: "Projects", icon: Package },
    { title: "Competitor Insights", icon: FileText },
    { title: "Inspiration Gallery", icon: Lightbulb },
    { title: "Creative Scoring AI", icon: Cpu },
    { title: "Creative Utility Suite", icon: ClipboardList },
    { title: "Settings", icon: Settings },
  ];

  const steps = ['Asset Selection', 'Creative Size', 'Text on Image', 'Background Image']

  const assetTypes = [
    { icon: Image, title: 'Ad Creatives', description: 'Generate conversion-focused ad creatives for your product/service in seconds using our AI.', color: 'bg-green-500' },
    { icon: Camera, title: 'Product Photo Ads', description: 'Transform your product photo into a professional-looking shoot with AI-generated environments.', color: 'bg-yellow-500', isNew: true },
    { icon: Image, title: 'Stock Images', description: 'Generate unique and commercially safe stock images using our Artificial Intelligence.', color: 'bg-green-400', isNew: true },
    { icon: FileText, title: 'Ad Texts', description: 'Generate texts that utilize high-conversion-rate copywriting methodologies using our AI.', color: 'bg-yellow-400' },
    { icon: Video, title: 'Ad Videos', description: 'Generate conversion-focused videos using your product images, thanks to our AI.', color: 'bg-green-600', isNew: true },
    { icon: Instagram, title: 'Social Creatives', description: 'Generate engagement-focused social media post creatives in seconds using our AI.', color: 'bg-yellow-600' },
    { icon: Package, title: 'Ad Package', description: 'Generate strategies, ad creatives, texts, and target audiences within a single project.', color: 'bg-lime-500' },
    { icon: Layers, title: 'Batch Creatives', description: 'Generate creatives in batches using multiple background/product images within a single project.', color: 'bg-green-700' },
  ]

  const socialMediaSizes = [
    { name: 'Post Size', size: '1080x1080' },
    { name: 'Landscape Size', size: '1200x628' },
    { name: 'Story Size', size: '1080x1920' },
    { name: 'Portrait Size', size: '1080x1350' },
    { name: 'Pin', size: '1000x1500' },
  ]

  const displaySizes = [
    { name: 'Medium Banner', size: '300x250' },
    { name: 'Leaderboard', size: '728x90' },
    { name: 'Wide Skyscraper', size: '160x600' },
    { name: 'Half Page', size: '300x600' },
    { name: 'L. Leaderboard', size: '970x90' },
  ]

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Fixed Sidebar */}
      <aside className="w-80 p-6 flex flex-col bg-gradient-to-b from-green-600 to-blue-700 text-white fixed top-0 left-0 h-full">
        <div className="flex items-center mb-8">
          <img src="images/logo.jpg" alt="Small Logo" className="w-10 h-10 mr-2 rounded-full" />
          <span className="text-2xl font-bold">Figurush</span>
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
      <main className="flex-grow p-8 ml-80">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="relative w-64">
          <input
              type="text"
              placeholder="StoreFilter"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
            />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="bg-white">Upgrade 🔥</Button>
            <Button variant="outline" className="bg-white">Additional Credits <CreditCard className="ml-2 h-4 w-4" /></Button>
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium">
              GS
            </div>
          </div>
        </header>

        {/* Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index <= currentStep ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {index + 1}
                </div>
                <span className={`ml-2 ${index <= currentStep ? 'text-green-500' : 'text-gray-500'}`}>{step}</span>
                {index < steps.length - 1 && (
                  <ChevronRight className="mx-2 text-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <Card className="bg-white p-6">
          {currentStep === 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">AI-Generated Asset Selection</h2>
              <p className="text-gray-600 mb-6">Select the asset type you would like to generate using our Artificial Intelligence.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {assetTypes.map((asset, index) => (
                  <Card key={index} className={`cursor-pointer hover:shadow-md transition-shadow duration-200 ${selectedAsset === asset.title ? 'ring-2 ring-green-500' : ''}`} onClick={() => setSelectedAsset(asset.title)}>
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

          )}

          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Select Creative Size</h2>
              <p className="text-gray-600 mb-6">Select your creative size below depending on the platform you want to advertise on.</p>
              <Tabs defaultValue="social" className="w-full">
                <TabsList>
                  <TabsTrigger value="social">Social Media Sizes</TabsTrigger>
                  <TabsTrigger value="display">Display Sizes</TabsTrigger>
                </TabsList>
                <TabsContent value="social">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                    {socialMediaSizes.map((size, index) => (
                      <Card key={index} className={`cursor-pointer hover:shadow-md transition-shadow duration-200 ${selectedSize === size.name ? 'ring-2 ring-green-500' : ''}`} onClick={() => setSelectedSize(size.name)}>
                        <CardContent className="p-4 text-center">
                          <Image className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                          <h3 className="font-semibold mb-1">{size.name}</h3>
                          <p className="text-sm text-gray-600">{size.size}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="display">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                    {displaySizes.map((size, index) => (
                      <Card key={index} className={`cursor-pointer hover:shadow-md transition-shadow duration-200 ${selectedSize === size.name ? 'ring-2 ring-green-500' : ''}`} onClick={() => setSelectedSize(size.name)}>
                        <CardContent className="p-4 text-center">
                          <Image className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                          <h3 className="font-semibold mb-1">{size.name}</h3>
                          <p className="text-sm text-gray-600">{size.size}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Text on Image</h2>
              <p className="text-gray-600 mb-6">Our AI recommends a few texts based on your product and target audience. You may also write your own.</p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="headline" className="block text-sm font-medium text-gray-700 mb-1">Headline</label>
                  <Input id="headline" value={adText.headline} onChange={(e) => setAdText({ ...adText, headline: e.target.value })} placeholder="Boost Ecommerce Growth Today" />
                </div>
                <div>
                  <label htmlFor="punchline" className="block text-sm font-medium text-gray-700 mb-1">Punchline</label>
                  <Input id="punchline" value={adText.punchline} onChange={(e) => setAdText({ ...adText, punchline: e.target.value })} placeholder="One Platform, Infinite Possibilities" />
                </div>
                <div>
                  <label htmlFor="cta" className="block text-sm font-medium text-gray-700 mb-1">Call to Action</label>
                  <Input id="cta" value={adText.cta} onChange={(e) => setAdText({ ...adText, cta: e.target.value })} placeholder="Get Started Now" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Choose Background Image</h2>
              <p className="text-gray-600 mb-6">Upload an image for your product or use our image search for premium stock images.</p>
              <div className="mb-4">
                <Input type="file" onChange={(e) => setBackgroundImage(e.target.files[0])} />
              </div>
              {backgroundImage && (
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Preview</h3>
                  <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
                      <h2 className="text-2xl font-bold mb-2">{adText.headline}</h2>
                      <p className="text-lg mb-4">{adText.punchline}</p>
                      <Button>{adText.cta}</Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="mt-8 flex justify-between">
            <Button onClick={handlePrevStep} disabled={currentStep === 0}>Previous</Button>
            <Button onClick={handleNextStep} disabled={currentStep === steps.length - 1}>
              {currentStep === steps.length - 1 ? 'Generate' : 'Next'}
            </Button>
          </div>
        </Card>
      </main>
    </div>
  )
}
