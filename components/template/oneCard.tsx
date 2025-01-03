'use client';

interface OneCardProps {
  productImage: string;
  title: string;
  subtitle: string;
  showButtons?: boolean; // Optional prop to toggle action buttons
}

export default function OneCard({ productImage, title, subtitle, showButtons = false }: OneCardProps) {
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
        }
        .ad-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          width: 500px;
          height: 500px;
          overflow: hidden;
          text-align: center;
          position: relative;
        }
        .ad-header {
          background-color: #f9fafb;
          padding: 20px 10px;
          border-bottom: 1px solid #e2e8f0;
        }
        .ad-title {
          font-size: 1.5rem;
          margin: 0;
          color: #2d3748;
          font-weight: 600;
        }
        .ad-subtitle {
          font-size: 1.2rem;
          margin: 8px 0;
          color: #4a5568;
          font-weight: 500;
        }
        .get-started-button {
          background-color: #2d3748;
          color: #fff;
          border: none;
          padding: 8px 16px;
          border-radius: 25px;
          cursor: pointer;
          transition: background-color 0.3s;
          margin-top: 15px;
        }
        .get-started-button:hover {
          background-color: #1a202c;
        }
        .ad-image-container {
          padding: 20px;
        }
        .product-image {
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
}
