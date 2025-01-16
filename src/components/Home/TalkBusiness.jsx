import React, {useState} from 'react';
import Carousel from './utils/Carousel';
import arrowGray from "../../assets/svg/home/arrowGray.svg";
import arrowWhite from "../../assets/svg/home/arrowWhite.svg";

const TalkBusiness = ({ isMobile }) => {
  const cards = [
    
    {
      id: 1, title: 'Card 1', content: (
        <div className='rounded-lg p-2 talkCard'>
          <a href="https://keyfx.co.uk/blog/reliable-food-beverage-importers-you-can-count-on/">
          <img alt="Not Found" className='w-full' src="https://keyfx.co.uk/blog/wp-content/uploads/2025/01/2150379587-980x340.jpg"/>
          <p className='mt-3 fw600 text-lg text-left pb-3'>Over 140,000 Business Accounts Closed by Major Banks: A Growing Concern for UK Businesses</p>
          <p className='small text-left MidnightHaze'>Recent figures from the UK Treasury Committee highlight a worrisome trend in the financial sector: over 140,000 business accounts were closed by major banks in 2023. This surge in “de-banking” has sparked concerns about the accessibility and dependability of banking services, particularly for small and medium-sized enterprises (SMEs), which are among the hardest hit.</p>
          
          <div className='mt-3 book-mark rounded-md flex items-center justify-between px-3 py-1'>
            <div className='flex items-center'>
              <img className='w-14 h-14 rounded-md' alt='not available' src='/12.png'/>
              <div className='ps-3'>
                <p className='fw-bold text-left'>Danny</p>
                <p className='small text-left mt-0'>January 10,</p>
                <p className='small text-left mt-0'>2025</p>
              </div>
            </div>
          </div>
          </a>
        </div>
      
      )
    },
    {
      id: 2, title: 'Card 1', content: (
        <div className='rounded-lg p-2 talkCard'>
          <a href="https://keyfx.co.uk/blog/closed-business-accounts/">
          <img alt="Not Found" className='w-full' src="https://keyfx.co.uk/blog/wp-content/uploads/2025/01/beverages-79709857-74dbe34b-8502-4174-8d15-d49387c0eecc-980x340.jpg"/>
          <p className='mt-3 fw600 text-lg text-left pb-3'>Reliable Food & Beverage Importers You Can Count On</p>
          <p className='small px-0 text-left MidnightHaze'>Are you struggling to find reliable food and beverage importers in the United Kingdom? Many import and export companies face challenges in identifying trustworthy partners for their vegetable and other food products. This article outlines how to identify top importers in your area, evaluate their industry specialisations, and assess their reputation and customer feedback</p>
          
          <div className='mt-3 book-mark rounded-md flex items-center justify-between px-3 py-1'>
            <div className='flex items-center'>
              <img className='w-14 h-14 rounded-md' alt='not available' src='/12.png'/>
              <div className='ps-3'>
                <p className='fw-bold text-left'>Danny</p>
                <p className='small text-left mt-0'>January 4,</p>
                <p className='small text-left mt-0'>2025</p>
              </div>
            </div>
          </div>
          </a>
        </div>
      
      )
    },
    {
      id: 3, title: 'Card 2', content: (
        <div className='rounded-lg p-2 talkCard'>
          <a href="https://keyfx.co.uk/blog/optimising-your-electrical-equipment-imports-best-suppliers-and-bulk-deals-in-the-uk/">
          <img alt="Not Found" className='w-full' src="https://keyfx.co.uk/blog/wp-content/uploads/2024/12/top-view-circuit-board-repair_with_bgc-980x340.png"/>
          <p className='mt-3 fw600 text-lg text-left pb-3'>Optimising Your Electrical Equipment Imports: Best Suppliers and Bulk Deals in the UK</p>
          <p className='small text-left MidnightHaze'>Sourcing electrical equipment for your business is a critical decision that affects quality, compliance, and cost efficiency. At KEYFX, we provide tailored FX services to importers, enabling seamless payments and cost savings on currency transfers. Top 10 Suppliers of Electrical Equipment in the UK The UK boasts a robust market for electrical equipment, making it.</p>
          
          <div className='mt-3 book-mark rounded-md flex items-center justify-between px-3 py-1'>
            <div className='flex items-center'>
              <img className='w-14 h-14 rounded-md' alt='not available' src='/12.png'/>
              <div className='ps-3'>
                <p className='fw-bold text-left'>Danny</p>
                <p className='small text-left mt-0'>December 25,</p>
                <p className='small text-left mt-0'>2024</p>
              </div>
            </div>
          </div>
          </a>
        </div>
      
      )
    },
  ];

    const [isInView, setIsInView] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 1;
    const totalCards = cards.length;


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

    setTimeout(() => {
        setIsInView(!isInView);
    }, 2500);
  
  return (
      <div className={`w-full max-w-max-width-main overflow-visible ${isMobile ? "pt-10" : "pt-32"}`}>
          <div className={"mainPage max-w-max-width-main xl:mx-auto flex md:items-end items-start md:gap-0 gap-6 justify-between md:flex-row flex-col"}>
              <div className='text-start'>
                  <p className='small text400'>B l o g</p>
                  <p className='mt-3 roboto text800 fw600' style={{fontSize: '44px'}}>Let's talk business</p>
              </div>
              <div className={`flex gap-4`}>
                  <button
                      className={`w-10 h-10 flex justify-center items-center rounded-full ${currentIndex === 0 ? 'step2 disabled' : 'step1'}`}
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
                      className={`w-10 h-10 flex justify-center items-center rounded-full ${currentIndex + cardsToShow >= totalCards ? 'step2 disabled' : 'step1'}`}
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
          </div>
          <div className='max-w-max-width-main lg:mt-16 md:mt-14 mt-10 mx-auto'>
              <Carousel cards={cards} component={'business'} isMobile={isMobile} cardsToShow={cardsToShow}
                        currentIndex={currentIndex} totalCards={totalCards}/>
          </div>
      </div>
  );
};

export default TalkBusiness;