import React, { useRef, useEffect } from "react";

const InfiniteCarousel = () => {
  const carouselRef = useRef(null);
  const scrollAmountRef = useRef(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    const cards = Array.from(carousel.children);
    
    // Clone each card for an infinite loop effect
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      carousel.appendChild(clone);
    });

    // Continuous scroll function
    const scrollCarousel = () => {
      scrollAmountRef.current += 1; // Adjust speed by changing increment
      if (scrollAmountRef.current >= cards[0].offsetWidth + 1) { // Includes margin
        scrollAmountRef.current = 0;
        // Move the first card to the end for a seamless scroll effect
        carousel.appendChild(carousel.firstElementChild);
      }
      carousel.style.transform = `translateX(${-scrollAmountRef.current}px)`;
      requestAnimationFrame(scrollCarousel);
    };

    scrollCarousel(); // Start scrolling

    return () => cancelAnimationFrame(scrollCarousel); // Clean up animation on unmount
  }, []);


  const comm = [
    { id: 1, title: 'Unified Banking Services', img: './business3.svg', desc: 'Experience the convenience of integrated banking. Our unified platform offers a singular, streamlined interface for all your international finance needs.' },
    { id: 2, title: 'Personalized Global Support', img: './Personalized Global Support.svg', desc: 'Our reach is worldwide but our service is tailored. We provide dedicated support to help you navigate the intricacies of the global financial landscape.' },
    { id: 3, title: 'Competitive Rates', img: './Competitive Rates.svg', desc: 'We strive to outmatch traditional banking rates, ensuring your business saves on every transaction.' },
    { id: 4, title: 'Unified Banking Services', img: './business3.svg', desc: 'Experience the convenience of integrated banking. Our unified platform offers a singular, streamlined interface for all your international finance needs.' },
];
const rowtwo = [
    { id: 3, title: 'Competitive Rates', img: './Competitive Rates.svg', desc: 'We strive to outmatch traditional banking rates, ensuring your business saves on every transaction.' },
    { id: 4, title: 'Streamlined Cross-Border Payments', img: './Streamlined Cross-Border Payments.svg', desc: 'With KeyFX, boundaries blur as you effortlessly send and receive payments worldwide, fueling international trade and services.' },
    { id: 5, title: 'Optimized FX Solutions', img: './Optimized FX Solutions.svg', desc: 'Benefit from superior foreign exchange rates. Our solutions are designed to minimize conversion costs and to smartly manage foreign exchange risk.' },
    { id: 6, title: 'Unified Banking Services', img: './business3.svg', desc: 'Experience the convenience of integrated banking. Our unified platform offers a singular, streamlined interface for all your international finance needs.' },
];


  return (
    <div className="overflow-hidden">
      <div
        ref={carouselRef}
        className="flex space-x-4 whitespace-nowrap"
        style={{ display: "flex", whiteSpace: "nowrap" }}
      >
        {/* Cards */}
        {comm.map((commerce, index) => (
          <div key={index} className="carousel-card">
            <div className="multiShadow w-full">
              <div className="multiShadow-bg"></div>
              <div className="new-card py-12 px-5 h-full bg-white rounded-xl text-wrap">
                <img alt="Not Found" src={commerce.img} />
                <p className="roboto fw600 text-xl">{commerce.title}</p>
                <p className="small">{commerce.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
