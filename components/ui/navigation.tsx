// components/Navigation.tsx

// import { useState } from 'react';
import { Users, Package, FileText, Lightbulb, Cpu, ClipboardList, Settings } from 'lucide-react';
import { useRouter } from "next/navigation";

const navigationItems = [
  { title: 'Brands', icon: Users },
  { title: 'Projects', icon: Package },
  { title: 'Competitor Insights', icon: FileText },
  { title: 'Inspiration Gallery', icon: Lightbulb },
  { title: 'Creative Scoring AI', icon: Cpu },
  { title: 'Creative Utility Suite', icon: ClipboardList },
  { title: 'Settings', icon: Settings },
];

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/"); // Redirects to home page
  };


  return (
    <aside className="fixed top-0 left-0 h-screen w-80 min-w-[280px] p-6 flex flex-col bg-gradient-to-b from-green-600 to-blue-700 text-white z-40">
      <div className="flex items-center mb-8 cursor-pointer"
      onClick={handleLogoClick}>
        <img src="images/logo.jpg" alt="Small Logo" className="w-10 h-10 mr-2 rounded-full" />
        <span className="text-2xl font-bold font-poppins">Figurush</span>
      </div>
      <nav className="space-y-2 flex-grow">
        {navigationItems.map((item) => (
          <div
            key={item.title}
            className={`flex items-center p-2 rounded-lg cursor-pointer ${activeSection === item.title ? 'bg-gray-100 text-green-600' : 'text-white hover:bg-gray-400'}`}
            onClick={() => setActiveSection(item.title)}
          >
            <item.icon className="w-6 h-6 mr-2" />
            {item.title}
          </div>
        ))}
      </nav>
    </aside>
  );
}
