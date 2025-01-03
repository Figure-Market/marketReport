'use client';

import UpperNavigation from '@/components/upperNavigation';
import { useRouter } from 'next/navigation';
import ads from '../data/ads';
import AdCard from './AdCard';

export default function AdGrid() {
  const router = useRouter();

  const handleCardClick = (id: number) => {
    router.push(`/advertisement/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Upper Navigation */}
      <UpperNavigation />

      {/* Content Section */}
      <div className="pt-24 px-8">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold tracking-tight">
            Discover Your <span className="text-blue-600">Ad Templates</span>
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            Browse through our curated collection of creative and stunning ad templates tailored for all your needs.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {ads.map((ad) => (
            <div
              key={ad.id}
              onClick={() => handleCardClick(ad.id)}
              className="cursor-pointer transform hover:scale-105 transition duration-300"
            >
              <AdCard ad={ad} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
