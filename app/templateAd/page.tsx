"use client"

// import { useState } from 'react';

// export default function ProductAdCard() {
//     const productImage = '/images/belowSide.png'; // URL of the product image
  
//     return (
//       <div className="ad-card-container">
//         <div className="ad-card">
//           <div className="ad-header">
//             <h2 className="ad-title">Boost Ecommerce Growth Today</h2>
//             <h3 className="ad-subtitle">One Platform, Infinite Possibilities</h3>
//             <button className="get-started-button">Get Started Now 🚀</button>
//           </div>
//           <div className="ad-image-container">
//             <img src={productImage} alt="Product" className="product-image" />
//           </div>
//         </div>
  
//         <style jsx>{`
//           .ad-card-container {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100vh;
//             background-color: #f5f5f5;
//           }
//           .ad-card {
//             background: #fff;
//             border-radius: 16px;
//             box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
//             width: 700px;
//             overflow: hidden;
//             text-align: center;
//             position: relative;
//           }
//           .ad-header {
//             background-color: #f9fafb;
//             padding: 40px 20px;
//             border-bottom: 1px solid #e2e8f0;
//           }
//           .ad-title {
//             font-size: 2rem;
//             margin: 0;
//             color: #2d3748;
//             font-weight: 600;
//           }
//           .ad-subtitle {
//             font-size: 1.5rem;
//             margin: 10px 0;
//             color: #4a5568;
//             font-weight: 500;
//           }
//           .get-started-button {
//             background-color: #2d3748;
//             color: #fff;
//             border: none;
//             padding: 12px 24px;
//             border-radius: 25px;
//             cursor: pointer;
//             transition: background-color 0.3s;
//             margin-top: 20px;
//           }
//           .get-started-button:hover {
//             background-color: #1a202c;
//           }
//           .ad-image-container {
//             padding: 30px;
//           }
//           .product-image {
//             width: 100%;
//             height: auto;
//             object-fit: contain;
//             border-radius: 12px;
//           }
//         `}</style>
//       </div>
//     );
//   }
  




export default function ProductAdCard() {
    const productImage = '/images/belowSide.png'; // URL of the product image
  
    return (
      <div className="ad-card-container">
        <div className="ad-card">
          <img src={productImage} alt="Product" className="product-image" />
          <div className="ad-circle-outer">
            <div className="ad-circle-inner">
              <h2 className="ad-title">Boost Ecommerce Growth Today</h2>
              <h3 className="ad-subtitle">One Platform, Infinite Possibilities</h3>
              <button className="get-started-button">Get Started Now 🚀</button>
            </div>
          </div>
        </div>
  
        <style jsx>{`
          .ad-card-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f5f5f5;
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