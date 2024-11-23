import React from 'react';
import Carousel from './utils/Carousel';
import doubleQuote from '../../assets/svg/home/doubleQuote.svg';

const Solution = ({ isMobile }) => {
  const cards = [
    {
      id: 1, title: 'Card 1', content: (
        <div className='bg-white rounded-2xl px-6 py-8 flex gap-4 '>
          <div>
            <img alt="doubleQuote" className='-mt-1 w-16 rounded-0' src={doubleQuote}/>
          </div>
          <div>
            <p className='fw600 text-gray text-left pb-5'>KeyFX has transformed the way we handle international
              payments. Their service is fast, reliable, and cost-effective.</p>
            <div className='mt-10 flex gap-3 items-center'>
              <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg' src='/testImgCar.jpg'/>
              <div>
                <p className='fw600 text700'>Sarah T</p>
                <p className='small text-left text500'>Ceo</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2, title: 'Card 1', content: (
        <div className='bg-white rounded-2xl px-6 py-8 flex gap-4 '>
          <div>
            <img alt="doubleQuote" className='-mt-1 w-16 rounded-0' src={doubleQuote}/>
          </div>
          <div>
            <p className='fw600 text-gray text-left pb-5'>Thanks to KeyFX's hedging solutions, we can now manage our
              currency risks with confidence. Highly recommend!</p>
            <div className='mt-10 flex gap-3 items-center'>
              <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg' src='/testImgCar.jpg'/>
              <div>
                <p className='fw600 text700'>Sarah T</p>
                <p className='small text-left text500'>Ceo</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3, title: 'Card 1', content: (
        <div className='bg-white rounded-2xl px-6 py-8 flex gap-4 '>
          <div>
            <img alt="doubleQuote" className='-mt-1 w-16 rounded-0' src={doubleQuote}/>
          </div>
          <div>
            <p className='fw600 text-gray text-left pb-5'>Thanks to KeyFX's hedging solutions, we can now manage our
              currency risks with confidence. Highly recommend!</p>
            <div className='mt-10 flex gap-3 items-center'>
              <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg' src='/testImgCar.jpg'/>
              <div>
                <p className='fw600 text700'>Sarah T</p>
                <p className='small text-left text500'>Ceo</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4, title: 'Card 1', content: (
        <div className='bg-white rounded-2xl px-6 py-8 flex gap-4 '>
          <div>
            <img alt="doubleQuote" className='-mt-1 w-16 rounded-0' src={doubleQuote}/>
          </div>
          <div>
            <p className='fw600 text-gray text-left pb-5'>Thanks to KeyFX's hedging solutions, we can now manage our
              currency risks with confidence. Highly recommend!</p>
            <div className='mt-10 flex gap-3 items-center'>
              <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg' src='/testImgCar.jpg'/>
              <div>
                <p className='fw600 text700'>Sarah T</p>
                <p className='small text-left text500'>Ceo</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5, title: 'Card 1', content: (
        <div className='bg-white rounded-2xl px-6 py-8 flex gap-4 '>
          <div>
            <img alt="doubleQuote" className='-mt-1 w-16 rounded-0' src={doubleQuote}/>
          </div>
          <div>
            <p className='fw600 text-gray text-left pb-5'>Thanks to KeyFX's hedging solutions, we can now manage our
              currency risks with confidence. Highly recommend!</p>
            <div className='mt-10 flex gap-3 items-center'>
              <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg' src='/testImgCar.jpg'/>
              <div>
                <p className='fw600 text700'>Sarah T</p>
                <p className='small text-left text500'>Ceo</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
  ]
  
  return (
    <div className='pt-48'>
      <div className='business-card'>
        <p className='text-grad text-l'>C u s t o m e r{"\u2007"}T e s t i m o n i a l s</p>
        <p className=' roboto fw600 mt-3' style={{fontSize: '44px'}}>What they said about KeyFX? Solutions for
          Businesses</p>
        <p className='mt-4' style={{fontSize: '18px', color: '#D5DAEF'}}>We go the extra mile. The Key.fx system is
          designed to make it easier for users to make any
          payments.</p>
        
        <div className=''>
          <Carousel cards={cards} isMobile={isMobile}/>
        </div>
      </div>
      
      
      <div className='grad-line'></div>
    </div>
  );
};

export default Solution;