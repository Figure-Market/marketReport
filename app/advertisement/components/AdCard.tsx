interface AdCardProps {
  ad: {
    id: number;
    title: string;
    subtitle: string;
    template: string; // Added to determine the template type
    image: string; // Added image property
  };
}

import OneCard from '@/components/template/oneCard';
import TwoCard from '@/components/template/twoCard';
// import TemplateOneCard from './TemplateOneCard';
// import TemplateTwoCard from './TemplateTwoCard';

export default function AdCard({ ad }: AdCardProps) {
  return (
    <div className="relative shadow-lg hover:shadow-xl rounded-lg overflow-hidden"
      style={{
        width: '350px',
        height: '350px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          transform: 'scale(0.7)', // Scale down from 500px to 350px (500 * 0.7 = 350)
          width: '500px',
          height: '500px',
        }}
      >
        {ad.template === 'TemplateOneCard' ? (
          <OneCard
            productImage={ad.image} // Dynamic Image
            title={ad.title}
            subtitle={ad.subtitle}
            showButtons={false} // No buttons in grid view
          />
        ) : ad.template === 'TemplateTwoCard' ? (
          <TwoCard
            productImage={ad.image} // Dynamic Image
            title={ad.title}
            subtitle={ad.subtitle}
            showButtons={false} // No buttons for the template
          />
        ) : (
          <div className="p-4">
            <h2 className="text-xl font-bold">{ad.title}</h2>
            <p className="text-sm mt-2">{ad.subtitle}</p>
          </div>
        )}
      </div>
    </div>
  );
}
