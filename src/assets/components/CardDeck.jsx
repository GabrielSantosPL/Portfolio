import React from 'react';
import "./css/CardDeck.css"

const CardDeck = ({ cardsData, activeIndex, handleNext, handlePrev }) => {
  if (!cardsData || cardsData.length === 0) {
    return <div className="empty-deck">Nenhuma janela aberta.</div>;
  }

  return (
    <div className="deck-container">
      {cardsData.map((card, index) => {
        const isDiscarded = index < activeIndex;
        const isActive = index === activeIndex;
        const isStacked = index > activeIndex;
        const offset = isStacked ? (index - activeIndex) * 6 : 0;

        return (
          <div
            key={card.id || index}
            className={`portfolio-card ${isDiscarded ? 'discarded' : isActive? 'active' : ''}`}
            style={{
              zIndex: cardsData.length - index,
              transform: isStacked ? `translate(-${offset}px, ${offset}px)` : '',
            }}
          >
            <div className="window-header black-header">
              <span className="window-title">{card.windowTitle || 'Portfolio Digital'}</span>
              <div className="window-controls">
                <button className="win-btn">_</button>
                <button className="win-btn">□</button>
                <button className="win-btn">X</button>
              </div>
            </div>

            <div className="card-content">
              {card.title && <h2 className="card-title">{card.title}</h2>}
              {card.text && <p className="card-text">{card.text}</p>}
              {card.link && (
                <a href={card.link} className="card-link" target="_blank" rel="noopener noreferrer">
                  {card.linkText || 'Acessar Link ->'}
                </a>
              )}
            </div>

            {isActive && (
              <div className="click-areas">
                <div className="click-left" onClick={handlePrev} title="Voltar" />
                <div className="click-right" onClick={handleNext} title="Avançar" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CardDeck;