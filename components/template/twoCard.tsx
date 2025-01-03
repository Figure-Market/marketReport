'use client';

interface TwoCardProps {
  productImage: string;
  title: string;
  subtitle: string;
  showButtons?: boolean; // Toggle action buttons
}

export default function TwoCard({ productImage, title, subtitle, showButtons = false }: TwoCardProps) {
  return (
    <div className="ad-card-container">
      <div className="ad-card">
        <img src={productImage} alt="Product" className="product-image" />
        <div className="ad-circle-outer">
          <div className="ad-circle-inner">
            <h2 className="ad-title">{title}</h2>
            <h3 className="ad-subtitle">{subtitle}</h3>
            {!showButtons && <button className="get-started-button">Get Started Now 🚀</button>}
          </div>
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
          position: relative;
          width: 500px;
          height: 500px;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ad-circle-outer {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 440px;
          height: 440px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .ad-circle-inner {
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.3);
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
        }
        .ad-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
        }
        .ad-subtitle {
          font-size: 1.25rem;
          font-weight: 500;
          margin: 10px 0;
        }
        .get-started-button {
          background-color: #4a5568;
          color: #ffffff;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          cursor: pointer;
          transition: background-color 0.3s;
          margin-top: 20px;
        }
        .get-started-button:hover {
          background-color: #2d3748;
        }
      `}</style>
    </div>
  );
}
