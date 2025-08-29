// "use client"

// import ads from '../data/ads';
// import OneCard from '@/components/template/oneCard';
// import TwoCard from '@/components/template/twoCard';
// import { useRouter } from 'next/navigation';
// import { X } from 'lucide-react'; // Importing the close icon

// interface AdDetailPageProps {
//   params: { id: string };
// }

// export default function AdDetailPage({ params }: AdDetailPageProps) {
//   const { id } = params;
//   const router = useRouter();

//   const ad = ads.find((ad) => ad.id === parseInt(id, 10));

//   if (!ad) {
//     return <p className="text-center mt-12">Ad not found.</p>;
//   }

//   const handleClose = () => {
//     router.back();
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 relative">
//         {/* Close Button on the top-right corner */}
//         <button 
//           onClick={handleClose} 
//           className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full"
//           title="Close"
//         >
//           <X className="w-6 h-6" />
//         </button>

//       <div className="flex justify-center items-center">
//         {ad.template === 'TemplateOneCard' ? (
//           <OneCard 
//             productImage={ad.image} 
//             title={ad.title} 
//             subtitle={ad.subtitle} 
//             showButtons={false} 
//           />
//         ) : ad.template === 'TemplateTwoCard' ? (
//           <TwoCard 
//             productImage={ad.image} 
//             title={ad.title} 
//             subtitle={ad.subtitle} 
//             showButtons={false} 
//           />
//         ) : (
//           <p>Template not found</p>
//         )}
//       </div>
//     </div>
//   );
// }

import ads from '../data/ads';
import AdDetailPageClient from './AdDetailPageClient';

export async function generateStaticParams() {
  const adsData = ads.map(ad => ({ id: ad.id.toString() }));
  return adsData;
}

export default function AdDetailPage({ params }: { params: { id: string } }) {
  const ad = ads.find((ad) => ad.id.toString() === params.id);

  return <AdDetailPageClient ad={ad || null} />;
}
