import React from 'react';
import '../../../assets/styles/Carousel.css';

const Carousel = ({cards, component = 'unset', isMobile, currentIndex, cardsToShow, totalCards}) => {

    const translateX = (currentIndex / totalCards) * (100);

    return (
        <div>
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
