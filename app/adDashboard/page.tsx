"use client"

import { useState, useEffect } from "react";
import {
  ChevronDown,
  FileText,
  Camera,
  Video,
  Instagram,
  ChevronRight,
  Image,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BrandSetup from "@/components/ui/brandSetup";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navigation from "@/components/ui/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


// API Endpoint
// const API_BASE_URL = "http://localhost:8000"; // Update with deployed FastAPI URL if needed

// Define TypeScript Interface for the Brand
interface Brand {
  brand_name: string;
  logo_path: string;
  brand_colors: string[];
  font: string;
  save_to_library: boolean;
}

export default function AdCreativeDashboard() {
  const [activeSection, setActiveSection] = useState("Brands");
  const [isBrandSetupOpen, setIsBrandSetupOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAsset, setSelectedAsset] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [adText, setAdText] = useState({ headline: '', punchline: '', cta: '' })
  const [backgroundImage, setBackgroundImage] = useState('')

  const [brandData, setBrandData] = useState<Brand[]>([]); // State to store JSON data
  const [selectedBrand, setSelectedBrand] = useState("Nike"); // Changed default to "Nike"




  const router = useRouter(); // Initialize useRouter

  // const navigationItems = [
  //   { title: "Brands", icon: Users },
  //   { title: "Projects", icon: Package },
  //   { title: "Competitor Insights", icon: FileText },
  //   { title: "Inspiration Gallery", icon: Lightbulb },
  //   { title: "Creative Scoring AI", icon: Cpu },
  //   { title: "Creative Utility Suite", icon: ClipboardList },
  //   { title: "Settings", icon: Settings },
  // ];

  const steps = ['Asset Selection', 'Creative Size', 'Text on Image', 'Background Image']

  const assetTypes = [
    { icon: Image, title: 'Ad Creatives', description: 'Generate conversion-focused ad creatives for your product/service in seconds using our AI.', color: 'bg-green-500' },
    { icon: Camera, title: 'Product Photo Ads', description: 'Transform your product photo into a professional-looking shoot with AI-generated environments.', color: 'bg-yellow-500', isNew: true },
    { icon: Video, title: 'Ad Videos', description: 'Generate conversion-focused videos using your product images, thanks to our AI.', color: 'bg-green-600', isNew: true },
    { icon: FileText, title: 'Ad Texts', description: 'Generate texts that utilize high-conversion-rate copywriting methodologies using our AI.', color: 'bg-yellow-400' },
    { icon: Image, title: 'Stock Images', description: 'Generate unique and commercially safe stock images using our Artificial Intelligence.', color: 'bg-green-400', isNew: true },
    { icon: Instagram, title: 'Social Creatives', description: 'Generate engagement-focused social media post creatives in seconds using our AI.', color: 'bg-yellow-600' },
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

  // const handleNextStep = () => {
  //   setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  // }

  // const handlePrevStep = () => {
  //   setCurrentStep((prev) => Math.max(prev - 1, 0))
  // }

  // Consolidated form data
  const [formData, setFormData] = useState({
    assetType: "",
    creativeSize: "",
    adText: { headline: "", punchline: "", cta: "" },
    backgroundImage: "",
  });

  // Store Advertisement Data on Final Step
  const handleSubmitAdvertisement = async () => {
    router.push("/advertisement");
  };



  const handleNextStep = () => {
    if (currentStep === 0) {
      setFormData({ ...formData, assetType: selectedAsset });
    }
    if (currentStep === 1) {
      setFormData({ ...formData, creativeSize: selectedSize });
    }
    if (currentStep === 2) {
      setFormData({ ...formData, adText });
    }
    if (currentStep === 3) {
      // Save data including the background image when the final step is reached
      const updatedFormData = { ...formData, backgroundImage };
      setFormData(updatedFormData);
      handleSubmitAdvertisement();
    }

    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));


  const handleBackgroundImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result as string); // Store the base64 string of the image
      };
      reader.readAsDataURL(file);
    }
  };

  // Fetch the JSON data on component mount
  useEffect(() => {
    fetch("/brand.json") // File inside public folder
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data.brands); // Debug fetched data
        setBrandData(data.brands);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);



  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main className="flex-grow p-8 ml-80 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="relative w-64">
            {activeSection === "Projects" ? (
              // Display the selected brand name as text or disabled dropdown
              <div className="pl-10 pr-4 py-2 border bg-gray-200 border-gray-300 rounded-lg w-full flex items-center justify-between">
                <span className="text-gray-700">{selectedBrand}</span>
              </div>
            ) : (
              // Show the dropdown when not in the Projects section
              <Select
                value={selectedBrand}
                onValueChange={(value) => setSelectedBrand(value)}
              >
                <SelectTrigger className="pl-10 pr-4 py-2 border bg-white border-gray-300 rounded-lg w-full">
                  <SelectValue placeholder={selectedBrand || "Select Project"} />
                </SelectTrigger>
                <SelectContent>
                  {brandData.map((brand, index) => (
                    <SelectItem key={index} value={brand.brand_name}>
                      {brand.brand_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="bg-white">
              Upgrade 🔥
            </Button>
            <Button variant="outline" className="bg-white">
              Additional Credits
            </Button>
            <div className="relative">
              <ChevronDown className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium">
              GS
            </div>
          </div>
        </header>

        {/* Brand List Section */}
        {activeSection === "Brands" && (
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">
                  Brand List ({brandData.length}/10)
                </h2>
                <p className="text-gray-600">
                  See your projects and create new ones under the selected brand.
                </p>
              </div>
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
                />
                <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {/* Create a Brand */}
              <Card className="p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50"
                onClick={() => setIsBrandSetupOpen(true)}>
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  +
                </div>
                <h3 className="font-semibold mb-1">Create a Brand</h3>
                <p className="text-sm text-gray-600">
                  Click here to add an additional brand that you can use to generate assets.
                </p>
              </Card>
              {/* Existing StoreFilter */}
              {/* <Card className="p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50"
                onClick={() => setActiveSection("Projects")}>
                <h3 className="font-semibold mb-1">StoreFilter</h3>
                <p className="text-sm text-gray-600">0 Projects Created</p>
              </Card> */}
              {/* Dynamically Render Brand Cards */}
              {brandData.map((brand, index) => (
                <Card
                  key={index}
                  className="p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50"
                  onClick={() => {
                    setSelectedBrand(brand.brand_name); // ✅ Update brand name
                    setActiveSection("Projects"); // ✅ Navigate to Projects section
                  }}
                >
                  {/* Brand Logo */}
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                    <img
                      src={brand.logo_path}
                      alt={`${brand.brand_name} Logo`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  {/* Brand Name */}
                  <h3 className="font-semibold mb-1">{brand.brand_name}</h3>
                  {/* Brand Colors */}
                  <div className="flex space-x-1 mb-2">
                    {brand.brand_colors.map((color, idx) => (
                      <div
                        key={idx}
                        style={{ backgroundColor: color }}
                        className="w-4 h-4 rounded-full border"
                      ></div>
                    ))}
                  </div>
                  {/* Save Status */}
                  <p className="text-sm text-gray-600">
                    {brand.save_to_library ? "Saved" : "Not Saved"}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === "Projects" && (
          <div>
            {/* Steps */}
            <div className="mb-8">
              <div className="flex justify-between items-center">
                {steps.map((step, index) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${index <= currentStep ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}
                    >
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
                  <p className="text-gray-600 mb-6">
                    Select the asset type you would like to generate using our Artificial Intelligence.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {assetTypes.map((asset, index) => (
                      <Card
                        key={index}
                        className={`cursor-pointer hover:shadow-md transition-shadow duration-200 ${selectedAsset === asset.title ? 'ring-2 ring-green-500' : ''}`}
                        onClick={() => setSelectedAsset(asset.title)}
                      >
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
                    <Input type="file" onChange={handleBackgroundImageChange} />
                  </div>
                  {/* {backgroundImage && (
                  <div className="mt-4">
                    <h3 className="font-semibold mb-2">Preview</h3>
                    <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={backgroundImage}
                        alt="Background Preview"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
                        <h2 className="text-2xl font-bold mb-2">{adText.headline}</h2>
                        <p className="text-lg mb-4">{adText.punchline}</p>
                        <Button>{adText.cta}</Button>
                      </div>
                    </div>
                  </div>
                )} */}
                </div>
              )}
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button onClick={handlePrevStep} disabled={currentStep === 0}>
                Previous
              </Button>
              <Button onClick={handleNextStep} disabled={currentStep === steps.length}>
                Next
              </Button>
            </div>

            {/* Final JSON */}
            {/* {currentStep === steps.length - 1 && (
              <div className="mt-6">
                <h3 className="font-bold mb-2">Saved Data:</h3>
                <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(formData, null, 2)}</pre>
              </div>
            )} */}

          </div>
        )}
      </main>
      {isBrandSetupOpen && (
        <BrandSetup
          isOpen={isBrandSetupOpen}
          onClose={() => setIsBrandSetupOpen(false)} // Close the modal when "onClose" is triggered
        />
      )}
    </div>
  );
}