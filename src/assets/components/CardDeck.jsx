import React from 'react';
import "./css/CardDeck.css"

const CardDeck = ({ cardsData, activeIndex, setActiveIndex}) => {
  if (!cardsData || cardsData.length === 0) {
    return <div className="empty-deck">Nenhuma janela aberta.</div>;
  }

  const handleNext = () => {
    if (activeIndex < cardsData.length - 1) setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex((prev) => prev - 1);
  };

  return (
    <div className="deck-container">
      {cardsData.map((card, index) => {
        const isDiscarded = index < activeIndex;
        const isActive = index === activeIndex;
        const isStacked = index > activeIndex;
        const offset = isStacked ? (index - activeIndex) * 6 : 0;
        const handleCardClick = (e) => {
          if (!isActive) return; // Só interage se for a carta do topo

          // 1. Ignora o clique se o usuário clicou em um link ou no cabeçalho
          if (e.target.closest('.card-link') || e.target.closest('.window-header')) return;

          // 2. Ignora o clique se o usuário estiver apenas selecionando texto para copiar
          if (window.getSelection().toString().length > 0) return;

          // 3. Descobre exatamente onde o mouse clicou dentro da carta
          const rect = e.currentTarget.getBoundingClientRect();
          const clickX = e.clientX - rect.left;

          // 4. Se clicou bem na borda direita (onde fica a barra de rolagem), ignora
          if (clickX > rect.width - 22) return;

          // 5. Avança se clicou na metade direita, Volta se clicou na esquerda
          if (clickX > rect.width / 2) {
            handleNext();
          } else {
            handlePrev();
          }
        };

        return (
          <div
            key={card.id || index}
            className={`portfolio-card ${isDiscarded ? 'discarded' : isActive? 'active' : ''}`}
            style={{
              zIndex: cardsData.length - index,
              transform: isStacked ? `translate(-${offset}px, ${offset}px)` : '',
              cursor: isActive ? 'pointer' : 'default' // Muda o cursor apenas na carta ativa
            }}
            onClick={handleCardClick} /* O CLIQUE AGORA FICA AQUI */
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
              {card.links && card.links.length > 0 && (
                <div className="card-links-container">
                  {card.links.map((linkItem, idx) => (
                    <a 
                      key={idx}
                      href={linkItem.url} 
                      className="card-link"
                      target={linkItem.target?"_blank":""}
                      rel="noopener noreferrer"
                    >
                      {linkItem.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default CardDeck;