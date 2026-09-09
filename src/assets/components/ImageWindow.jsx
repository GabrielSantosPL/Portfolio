import React from 'react';
import "./css/ImageWindow.css"

const ImageWindow = ({ image, windowTitle, altText }) => {
  return (
    <div className="image-window-container">
      <div className="window-header black-header">
        <span className="window-title">{windowTitle || 'image_viewer.exe'}</span>
        <div className="window-controls">
          <button className="win-btn">_</button>
          <button className="win-btn">□</button>
          <button className="win-btn">X</button>
        </div>
      </div>
      
      <div className="image-content">
        {/* A 'key' usando a URL da imagem garante que a animação rode ao trocar de foto */}
        <img 
          key={image} 
          src={image || "https://placehold.co/2000x1000/e2e8f0/000000?text=Sem+Imagem"} 
          alt={altText || "Ilustração da janela"} 
          className="portfolio-image fade-in-anim"
        />
      </div>
    </div>
  );
};

export default ImageWindow;