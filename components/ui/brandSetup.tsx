'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Upload, ChevronDown, X } from 'lucide-react';
import { useRouter } from 'next/router';

interface BrandSetupProps {
  onClose: () => void; // Function to handle closing the modal
  setActiveSection: (section: string) => void; // Function to set active section
}

export default function BrandSetup({ onClose, setActiveSection }: BrandSetupProps) {
  const [brandColors, setBrandColors] = useState<string[]>(['', '', '', '']);
  const [selectedFont, setSelectedFont] = useState('');
  const [brandName, setBrandName] = useState('');
  const [upload, setUpload] = useState<File | null>(null); // Track uploaded file
  const [isFormValid, setIsFormValid] = useState(true);
  const [isMounted, setIsMounted] = useState(false); // To ensure client-side rendering

  const handleColorChange = (index: number, color: string) => {
    const newColors = [...brandColors];
    newColors[index] = color;
    setBrandColors(newColors);
  };

  const fonts = [
    'Arial',
    'Helvetica',
    'Times New Roman',
    'Georgia',
    'Verdana',
    'Roboto',
    'Open Sans',
  ];

  useEffect(() => {
    // Ensures that the router is only used on the client side.
    setIsMounted(true);
  }, []);

  const handleNext = () => {
    // Validate inputs
    if (!brandName || !selectedFont || brandColors.some(color => !color) || !upload) {
      setIsFormValid(false);
      return;
    }

    // Set active section to "Projects"
    setActiveSection("Brands");
  };

  // Don't render the component until the client has mounted
  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-100 w-[60vw] h-[90vh] max-w-4xl max-h-[120vh] rounded-lg shadow-lg p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Brand Setup</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">Ad set information</CardTitle>
            <CardDescription className="text-gray-600">
              Our AI automatically found the brand, audience, and product information. Review and
              modify if necessary.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-blue-600">Brand</h2>
                <Button variant="outline" className="flex items-center gap-2">
                  Import
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>

              {/* Brand Name and Logo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="brandName">Brand name</Label>
                  <Input
                    id="brandName"
                    placeholder="e.g. Nike, Samsung, Disney"
                    className="bg-gray-50"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    required
                  />
                  {!brandName && !isFormValid && <p className="text-red-500 text-sm">Brand name is required.</p>}
                </div>

                <div className="space-y-2">
                  <Label>Logos</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50">
                    <Upload className="h-6 w-6 text-gray-400 mb-2" />
                    <Button
                      variant="ghost"
                      className="text-blue-600"
                      onClick={() => document.getElementById('file-upload')?.click()}
                    >
                      Upload
                    </Button>
                    <input
                      type="file"
                      id="file-upload"
                      className="sr-only"
                      onChange={(e) => setUpload(e.target.files ? e.target.files[0] : null)}
                    />
                  </div>
                  {!upload && !isFormValid && <p className="text-red-500 text-sm">Upload is required.</p>}
                </div>
              </div>

              {/* Brand Colors */}
              <div className="space-y-2">
                <Label>Brand color</Label>
                <div className="flex gap-2">
                  {brandColors.map((color, index) => (
                    <div key={index} className="relative">
                      <input
                        type="color"
                        value={color}
                        onChange={(e) => handleColorChange(index, e.target.value)}
                        className="sr-only"
                        id={`color-${index}`}
                      />
                      <label
                        htmlFor={`color-${index}`}
                        className="w-16 h-16 rounded-lg bg-gray-100 border flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
                      >
                        {color ? (
                          <div
                            className="w-full h-full rounded-lg"
                            style={{ backgroundColor: color }}
                          />
                        ) : (
                          <span className="text-2xl text-gray-400">+</span>
                        )}
                      </label>
                    </div>
                  ))}
                </div>
                {brandColors.some(color => !color) && !isFormValid && (
                  <p className="text-red-500 text-sm">All color fields are required.</p>
                )}
              </div>

              {/* Font Selection */}
              <div className="space-y-2">
                <Label>Font</Label>
                <Select value={selectedFont} onValueChange={setSelectedFont} required>
                  <SelectTrigger className="bg-gray-50">
                    <SelectValue placeholder="Please select brand font" />
                  </SelectTrigger>
                  <SelectContent>
                    {fonts.map((font) => (
                      <SelectItem key={font} value={font}>
                        {font}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {!selectedFont && !isFormValid && <p className="text-red-500 text-sm">Font selection is required.</p>}
              </div>

              {/* Save to Library */}
              <div className="flex items-center space-x-2">
                <Checkbox id="saveLibrary" />
                <label
                  htmlFor="saveLibrary"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Save to the library
                </label>
              </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-end">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8" onClick={handleNext}>
                Next
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
