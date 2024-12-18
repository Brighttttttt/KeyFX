import React, { useState } from 'react';
import '../../../assets/styles/Carousel.css';
import arrowGray from '../../../assets/svg/home/arrowGray.svg';
import arrowWhite from '../../../assets/svg/home/arrowWhite.svg';

const Carousel = ({cards, component = 'unset', isMobile}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 1;
  const totalCards = cards.length;
  const translateX = (currentIndex / totalCards) * (component === 'business' ? 100 : 200);
  
  const next = () => {
    if (currentIndex + cardsToShow < totalCards) {
      setCurrentIndex(currentIndex + cardsToShow);
    }
  };
  
  const prev = () => {
    if (currentIndex - cardsToShow >= 0) {
      setCurrentIndex(currentIndex - cardsToShow);
    }
  };
  
  return (
    <div>
      <div
        className={`flex sm:justify-end justify-start sm:mt-0  w-full gap-4 ${isMobile ? " mt-4  mb-12" : "  mb-20"} `}>
        <button
          className={`pl-3 w-10 h-10 rounded-full ${currentIndex === 0 ? 'step2 disabled' : 'step1'}`}
          onClick={prev}
          disabled={currentIndex === 0}
        >
          {currentIndex === 0 ? (
            <img src={arrowGray} alt="arrowGray"/>
          ) : (
            <img src={arrowWhite} alt="arrowWhite" className='rotate-180'/>
          )}
        </button>
        <button
          className={`pl-3 w-10 h-10 rounded-full mr-20 ${currentIndex + cardsToShow >= totalCards ? 'step2 disabled' : 'step1'}`}
          onClick={next}
          disabled={currentIndex + cardsToShow >= totalCards}
        >
          {currentIndex + cardsToShow >= totalCards ? (
            <img src={arrowGray} alt="arrowGray" className='rotate-180'/>
          ) : (
            <img src={arrowWhite} alt="arrowWhite"/>
          )}
        </button>
      </div>
      
      <div className="carousel-container overflow-hidden">
        <div className="carousel">
          <div
            className={`card-container flex  transition-transform duration-500 ${isMobile ? "gap-2" : "gap-4"}`}
            style={{transform: `translateX(-${translateX}%)`}}
          >
            {cards.map(card => (
              <div key={card.id} className="card p-0 m-0"
                   style={component === 'business' ? {} : {minWidth: 'calc(100% / 2.5)'}}>
                
                <>{card.content}</>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
