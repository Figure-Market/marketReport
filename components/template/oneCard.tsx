'use client';

interface TwoCardProps {
  productImage: string;
  title: string;
  subtitle: string;
  showButtons?: boolean; // Optional prop to toggle action buttons
}

export default function TwoCard({ productImage, title, subtitle, showButtons = false }: TwoCardProps) {
  return (
    <div className="ad-card-container">
      <div className="ad-card">
        <div className="ad-header">
          <h2 className="ad-title">{title}</h2>
          <h3 className="ad-subtitle">{subtitle}</h3>
          {!showButtons && <button className="get-started-button">Get Started Now 🚀</button>}
        </div>
        <div className="ad-image-container">
          <img src={productImage} alt="Product" className="product-image" />
        </div>
      </div>
      <style jsx>{`
        .ad-card-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: transparent;
          padding-bottom: 20px;
        }

        .ad-card {
          background: white;
          border-radius: 18px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          width: 500px;
          height: 580px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .ad-card:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .ad-header {
          padding: 24px;
          background-color: #f7fafc;
          border-bottom: 1px solid #e2e8f0;
          text-align: center;
        }

        .ad-title {
          font-size: 1.6rem;
          margin: 0;
          color: #2d3748;
          font-weight: 700;
        }

        .ad-subtitle {
          font-size: 1.1rem;
          margin-top: 8px;
          color: #4a5568;
          font-weight: 500;
        }

        .get-started-button {
          margin-top: 12px;
          background: linear-gradient(90deg, #3182ce, #2b6cb0);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .get-started-button:hover {
          background: linear-gradient(90deg, #2b6cb0, #2a4365);
        }

        .ad-image-container {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #f0f0f0;
          border-radius: 0 0 18px 18px;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s;
        }

        .product-image:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
