import React, { useState } from 'react';
import ImageWindow from './components/ImageWindow';
import CardDeck from './components/CardDeck';
import "./css/Card_Image.css"

const Card_Image = ({ data }) => {
  // Estado que controla qual card/imagem está sendo exibido no momento
  const [activeIndex, setActiveIndex] = useState(0);

  // Funções de avançar e voltar

  // Garante que o componente não quebre se não houver dados
  if (!data || data.length === 0) return <div>Sem dados de portfólio.</div>;

  // Pega as informações do card que está no topo
  const activeCard = data[activeIndex];

  return (
    <div className="portfolio-display-layout">
      
      {/* Painel Esquerdo: Janela de Imagem */}
      <div className="left-panel">
        <CardDeck 
          cardsData={data} 
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>

      {/* Painel Direito: Deck de Cartas */}
      <div className="right-panel">
        <ImageWindow 
          image={activeCard.image} 
          windowTitle={activeCard.windowTitle} 
          altText={`Imagem ilustrativa de ${activeCard.title}`}
        />
      </div>

    </div>
  );
};

export default Card_Image;