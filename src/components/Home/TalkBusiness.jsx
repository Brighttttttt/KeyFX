import React, {useState} from 'react';
import Carousel from './utils/Carousel';
import arrowGray from "../../assets/svg/home/arrowGray.svg";
import arrowWhite from "../../assets/svg/home/arrowWhite.svg";

const TalkBusiness = ({ isMobile }) => {
  const cards = [
    {
      id: 1, title: 'Card 1', content: (
        <div className='rounded-lg p-2 talkCard'>
          <img alt="Not Found" className='w-full' src="/13.png"/>
          <p className='mt-3 fw600 text-lg text-left pb-3'>Title</p>
          <p className='small px-0 text-left MidnightHaze'>Spend securely using our Mastercard debit cards in the currency of your
            choice. Take advantage of competitive conversion rates and seamless transactions, both online and
            in-store.</p>
          
          <div className='mt-3 book-mark rounded-md flex items-center justify-between px-3 py-1'>
            <div className='flex items-center'>
              <img className='w-14 h-14 rounded-md' alt='not available' src='/12.png'/>
              <div className='ps-3'>
                <p className='fw-bold text-left'>Header</p>
                <p className='small text-left mt-0'>January 13,</p>
                <p className='small text-left mt-0'>2023</p>
              </div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#627394" className="bi bi-bookmark"
                   viewBox="0 0 16 16">
                <path
                  d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
              </svg>
            </div>
          </div>
        </div>
      
      )
    },
    {
      id: 2, title: 'Card 1', content: (
        <div className='rounded-lg p-2 talkCard'>
          <img alt="Not Found" className='w-full' src="/13.png"/>
          <p className='mt-3 fw600 text-lg text-left pb-3'>Title</p>
          <p className='small text-left MidnightHaze'>Spend securely using our Mastercard debit cards in the currency of your choice.
            Take advantage of competitive conversion rates and seamless transactions, both online and in-store.</p>
          
          <div className='mt-3 book-mark rounded-md flex items-center justify-between px-3 py-1'>
            <div className='flex items-center'>
              <img className='w-14 h-14 rounded-md' alt='not available' src='/12.png'/>
              <div className='ps-3'>
                <p className='fw-bold text-left'>Header</p>
                <p className='small text-left mt-0'>January 13,</p>
                <p className='small text-left mt-0'>2023</p>
              </div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#627394" className="bi bi-bookmark"
                   viewBox="0 0 16 16">
                <path
                  d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
              </svg>
            </div>
          </div>
        </div>
      
      )
    },
    {
      id: 3, title: 'Card 2', content: (
        <div className='rounded-lg p-2 talkCard'>
          <img alt="Not Found" className='w-full' src="/13.png"/>
          <p className='mt-3 fw600 text-lg text-left pb-3'>Title</p>
          <p className='small text-left MidnightHaze'>Spend securely using our Mastercard debit cards in the currency of your choice.
            Take advantage of competitive conversion rates and seamless transactions, both online and in-store.</p>
          
          <div className='mt-3 book-mark rounded-md flex items-center justify-between px-3 py-1'>
            <div className='flex items-center'>
              <img className='w-14 h-14 rounded-md' alt='not available' src='/12.png'/>
              <div className='ps-3'>
                <p className='fw-bold text-left'>Header</p>
                <p className='small text-left mt-0'>January 13,</p>
                <p className='small text-left mt-0'>2023</p>
              </div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#627394" className="bi bi-bookmark"
                   viewBox="0 0 16 16">
                <path
                  d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
              </svg>
            </div>
          </div>
        </div>
      
      )
    },
    {
      id: 4, title: 'Card 1', content: (
        <div className='rounded-lg p-2 talkCard'>
          <img alt="Not Found" className='w-full' src="/13.png"/>
          <p className='mt-3 fw600 text-lg text-left pb-3'>Title</p>
          <p className='small text-left MidnightHaze'>Spend securely using our Mastercard debit cards in the currency of your choice.
            Take advantage of competitive conversion rates and seamless transactions, both online and in-store.</p>
          
          <div className='mt-3 book-mark rounded-md flex items-center justify-between px-3 py-1'>
            <div className='flex items-center'>
              <img className='w-14 h-14 rounded-md' alt='not available' src='/12.png'/>
              <div className='ps-3'>
                <p className='fw-bold text-left'>Header</p>
                <p className='small text-left mt-0'>January 13,</p>
                <p className='small text-left mt-0'>2023</p>
              </div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#627394" className="bi bi-bookmark"
                   viewBox="0 0 16 16">
                <path
                  d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
              </svg>
            </div>
          </div>
        </div>
      
      )
    },
    {
      id: 5, title: 'Card 1', content: (
        <div className='rounded-lg p-2 talkCard'>
          <img alt="Not Found" className='w-full' src="/13.png"/>
          <p className='mt-3 fw600 text-lg text-left pb-3'>Title</p>
          <p className='small text-left  MidnightHaze'>Spend securely using our Mastercard debit cards in the currency of your
            choice. Take advantage of competitive conversion rates and seamless transactions, both online and
            in-store.</p>
          
          <div className='mt-3 book-mark rounded-md flex items-center justify-between px-3 py-1'>
            <div className='flex items-center'>
              <img className='w-14 h-14 rounded-md' alt='not available' src='/12.png'/>
              <div className='ps-3'>
                <p className='fw-bold text-left'>Header</p>
                <p className='small text-left mt-0'>January 13,</p>
                <p className='small text-left mt-0'>2023</p>
              </div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#627394" className="bi bi-bookmark"
                   viewBox="0 0 16 16">
                <path
                  d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
              </svg>
            </div>
          </div>
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
                      className={`w-10 h-10 justify-items-center rounded-full ${currentIndex === 0 ? 'step2 disabled' : 'step1'}`}
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
                      className={`w-10 h-10 justify-items-center rounded-full ${currentIndex + cardsToShow >= totalCards ? 'step2 disabled' : 'step1'}`}
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