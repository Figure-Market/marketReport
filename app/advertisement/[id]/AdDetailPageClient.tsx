"use client"

import OneCard from '@/components/template/oneCard';
import TwoCard from '@/components/template/twoCard';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { Ad } from '../data/ads';  // Adjust import path as needed

interface AdDetailPageClientProps {
  ad: Ad | null;
}

export default function AdDetailPageClient({ ad }: AdDetailPageClientProps) {
  const router = useRouter();

  if (!ad) {
    return <p className="text-center mt-12">Ad not found.</p>;
  }

  const handleClose = () => {
    router.back();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 relative">
      <button 
        onClick={handleClose} 
        className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full"
        title="Close"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="flex justify-center items-center">
        {ad.template === 'TemplateOneCard' ? (
          <OneCard 
            productImage={ad.image} 
            title={ad.title} 
            subtitle={ad.subtitle} 
            showButtons={false} 
          />
        ) : ad.template === 'TemplateTwoCard' ? (
          <TwoCard 
            productImage={ad.image} 
            title={ad.title} 
            subtitle={ad.subtitle} 
            showButtons={false} 
          />
        ) : (
          <p>Template not found</p>
        )}
      </div>
    </div>
  );
}
