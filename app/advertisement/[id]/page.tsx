import ads from '../data/ads';
import TemplateOneCard from '../components/TemplateOneCard';
import TemplateTwoCard from '../components/TemplateTwoCard';

export default function AdDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const ad = ads.find((ad) => ad.id === parseInt(id, 10));

  if (!ad) {
    return <p className="text-center mt-12">Ad not found.</p>;
  }

  switch (ad.template) {
    case 'TemplateOneCard':
      return <TemplateOneCard />;
    case 'TemplateTwoCard':
      return <TemplateTwoCard />;
    default:
      return <p className="text-center mt-12">Template not found.</p>;
  }
}
