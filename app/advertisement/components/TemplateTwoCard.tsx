"use client"

import ActionButtons from "@/components/ActionButtons";
import TwoCard from "@/components/template/twoCard";

export default function TemplateTwoCard() {
    const productImage = '/images/belowSide.png';

    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = productImage; // URL to be downloaded
      link.download = 'ProductImage.png'; // Default filename
      link.click();
    };
  
    const handleEdit = () => {
      alert('Edit functionality can be implemented here!');
    };
  
    return (
      <div className="ad-card-container">
        <TwoCard
        productImage="/images/belowSide.png" 
        title="Boost Ecommerce Growth Today"
        subtitle="One Platform, Infinite Possibilities"
        showButtons={false} // No buttons for the template
      />
        {/* <div className="ad-card">
          <img src={productImage} alt="Product" className="product-image" />
          <div className="ad-circle-outer">
            <div className="ad-circle-inner">
              <h2 className="ad-title">Boost Ecommerce Growth Today</h2>
              <h3 className="ad-subtitle">One Platform, Infinite Possibilities</h3>
              <button className="get-started-button">Get Started Now 🚀</button>
            </div>
          </div>
        </div> */}

        {/* Reusable Action Buttons */}
        <ActionButtons imageUrl={productImage} onEdit={handleEdit} />

        {/* Buttons placed below the card */}
        {/* <div className="action-buttons">
          <button className="action-button" onClick={handleDownload}>
            <span className="button-icon">⬇️</span>
            <span className="button-text">Download</span>
          </button>
          <button className="action-button" onClick={handleEdit}>
            <span className="button-icon">✏️</span>
            <span className="button-text">Edit</span>
          </button>
        </div> */}
  
        <style jsx>{`
          .ad-card-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f5f5f5;
          }
        `}</style>
      </div>
    );
  }
  