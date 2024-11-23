import React from 'react';
import Carousel from './utils/Carousel';

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
      id: 1, title: 'Card 1', content: (
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
      id: 2, title: 'Card 2', content: (
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
      id: 3, title: 'Card 1', content: (
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
  ]
  
  return (
    <div className={` mainPage ${isMobile ? "pt-10" : "pt-32"}`}>
      <div className='text-start '>
        <p className='small text400'>B l o g</p>
        <p className='mt-3 roboto text800 fw600' style={{fontSize: '44px'}}>Let's talk business</p>
      </div>
      <div>
        <Carousel cards={cards} isMobile={isMobile} component={'business'}/>
      </div>
      {/* <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-4  mt-32 '>
                <div className='rounded-lg business-csr-card p-2'>
                    <img alt="Not Found" className='w-full' src="/13.png" />
                    <p className='mt-3 fw600 text-lg'>Title</p>
                    <p className='small MidnightHaze'>Spend securely using our Mastercard debit cards in the currency of your choice. Take advantage of competitive conversion rates and seamless transactions, both online and in-store.</p>

                    <div className='mt-3 book-mark rounded-md flex items-center justify-between px-3 py-1'>
                        <div className='flex items-center'>
                            <img className='w-14 h-14 rounded-md' alt='not available' src='/12.png' />
                            <div>
                                <p className='fw-bold'>Header</p>
                                <p className='small'>January 13,</p>
                                <p className='small'>2023</p>
                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#627394" className="bi bi-bookmark" viewBox="0 0 16 16">
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='rounded-lg business-csr-card p-2'>
                    <img alt="Not Found" className='w-full' src="/13.png" />
                    <p className='mt-3 fw600 text-lg'>Title</p>
                    <p className='small MidnightHaze'>Spend securely using our Mastercard debit cards in the currency of your choice. Take advantage of competitive conversion rates and seamless transactions, both online and in-store.</p>

                    <div className='mt-3 book-mark rounded-md flex items-center justify-between px-3 py-1'>
                        <div className='flex items-center'>
                            <img className='w-14 h-14 rounded-md' alt='not available' src='/12.png' />
                            <div>
                                <p className='fw-bold'>Header</p>
                                <p className='small'>January 13,</p>
                                <p className='small'>2023</p>
                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#627394" className="bi bi-bookmark" viewBox="0 0 16 16">
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default TalkBusiness;