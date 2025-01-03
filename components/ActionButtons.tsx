"use client";

interface ActionButtonsProps {
  imageUrl: string;
  onEdit: () => void;
}

export default function ActionButtons({ imageUrl, onEdit }: ActionButtonsProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "ProductImage.png"; // Default filename
    link.click();
  };

  return (
    <div className="action-buttons">
      <button className="action-button" onClick={handleDownload}>
        <span className="button-icon">⬇️</span>
        <span className="button-text">Download</span>
      </button>
      <button className="action-button" onClick={onEdit}>
        <span className="button-icon">✏️</span>
        <span className="button-text">Edit</span>
      </button>

      <style jsx>{`
        .action-buttons {
          display: flex;
          justify-content: center;
          margin-top: 20px;
          width: 60%; /* Adjust button container width */
        }
        .action-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px; /* Space between icon and text */
          background-color: #4a5568;
          color: white;
          padding: 12px 20px;
          margin: 10px;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-size: 1rem;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          transition: background-color 0.3s, transform 0.2s;
        }
        .action-button:hover {
          background-color: #2d3748;
          transform: translateY(-2px); /* Slight lift effect */
        }
        .action-button:active {
          transform: translateY(0); /* Reset lift effect */
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }
        .button-icon {
          font-size: 1.2rem;
        }
        .button-text {
          font-size: 1rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
