"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const UpperNavigation = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const handleDropdownToggle = () => setDropdownOpen(!isDropdownOpen);
  const handleDropdownItemClick = (path: string) => {
    setDropdownOpen(false);
    router.push(path);
  };

  const handleLogoClick = () => {
    router.push("/"); // Redirects to the home page
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-green-600 to-blue-600 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center cursor-pointer"
        onClick={handleLogoClick}>
          <Image
            src="/images/logo.jpg"
            alt="Figurush Logo"
            width={32}
            height={32}
            className="w-10 h-10 mr-2 rounded-full"
          />
          <span className="font-bold text-xl text-white">Figurush</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <div className="relative">
            <button
              onClick={handleDropdownToggle}
              className="text-gray-200 hover:text-white flex items-center focus:outline-none"
            >
              <span className="mr-1">Features</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white text-gray-900 rounded-lg shadow-lg py-2 z-10">
                <button
                  onClick={() => handleDropdownItemClick("/reportInput")}
                  className="block px-4 py-2 text-left hover:bg-gray-100 w-full"
                >
                  Market Report
                </button>
                <button
                  onClick={() => handleDropdownItemClick("/adDashboard")}
                  className="block px-4 py-2 text-left hover:bg-gray-100 w-full"
                >
                  Advertisement
                </button>
              </div>
            )}
          </div>
          <a href="/Pricing" className="text-gray-200 hover:text-white">
            Pricing
          </a>
          <a href="/Blogs" className="text-gray-200 hover:text-white">
            Blogs
          </a>
          <a href="/Support" className="text-gray-200 hover:text-white">
            Support
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/Login" className="text-white hover:text-gray-300">
            Log in
          </a>
          <a
            href="/googlePlaystore"
            className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-200"
          >
            Open App
          </a>
        </div>
      </nav>
    </header>
  );
};

export default UpperNavigation;
