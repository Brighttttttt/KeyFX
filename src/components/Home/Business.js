import React, {useState} from 'react';
import Carousel from './utils/Carousel';

const Business = ({isMobile}) => {
  const [isInView, setIsInView] = useState(false);
  
  setTimeout(() => {
    setIsInView(!isInView);
  }, 2500);
  
  const cards = [
    {
      id: 1, title: 'Card 1', content: (
        <div className={`rounded-lg  ${isMobile ? "py-4 px-3" : "p-6"} corporateCard`}>
          <p className={`${isMobile ? " mt-0" : " mt-3"} roboto text-3xl fw600 text700`}
             style={{fontSize: '30px'}}>Corporate Cards</p>
          <p className='mt-2 text500' style={{fontSize: '16px'}}>Spend securely using our Mastercard debit cards in the
            currency of your choice. Take
            advantage of competitive conversion rates and seamless transactions, both online and in-store.</p>
          <div
            className={`flex items-center sm:gap-4 gap-2 corpCard-anim ${isInView ? 'corpCard-anim-hover' : ''}`}
          >
            <div className={`relative corpDiv upsideDiv ${isInView ? 'corpCard-anim-hover' : ''}`}>
              <img className='absolute bottom-10 sm:left-3 left-0 corp1 Card1Img '
                   alt="Not Found" src="/Icons/corpmasterCard.png"/>
              <img className='relative z-10 corp2 top15 Card2Img' alt="Not Found" src="/Icons/corpCard.png"/>
            </div>
            <div>
              <img alt="Not Found" src="/Icons/corpArrows.svg"/>
            </div>
            <div className='corpDiv2 upsideDiv'>
              <img className='corp4' alt="Not Found" src="/Icons/corp4.svg"/>
            </div>
          </div>
          {/* <img alt="Not Found" src="/Corporate Cards.png" /> */}
        </div>
      )
    },
    {
      id: 2, title: 'Card 2', content: (
        <div className={`rounded-lg corporateCard`}>
          <p className={`corporateTitle roboto text-3xl fw600 text700`}
             style={{fontSize: '30px'}}>Corporate Cards</p>
          <p className='mt-2 text500' style={{fontSize: '16px'}}>Spend securely using our Mastercard debit cards in the
            currency of your choice. Take
            advantage of competitive conversion rates and seamless transactions, both online and in-store.</p>
          {/* <img alt="Not Found" src="/Corporate Cards.png" /> */}
          <div className={`local-acc-card grid grid-cols-7 pb-12 ${isInView ? 'local-acc-card-hover' : ''}`}>
            <div className='flex flex-col col-span-3 relative z-30 justify-center'>
              <div className='bg-white shadow-inner shade1 p-2 rounded-sm flex items-center gap-2'>
                <div className='gbp p-2 roboto rounded-md '>
                  GBP
                </div>
                <p className='font-10'>Get GBP account</p>
              </div>
              <div className='bg-white shadow-inner shade1 p-2 rounded-sm flex items-center gap-2'>
                <div className='usd p-2 roboto rounded-md'>
                  USD
                </div>
                <p className='font-10'>Get USD account</p>
              </div>
              <div className='bg-white shadow-inner shade1 p-2 rounded-sm flex items-center gap-2'>
                <div className='eur roboto p-2 rounded-md'>
                  EUR
                </div>
                <p className='font-10'>Get EUR account</p>
              </div>
            </div>
            <div className='col-span-1 flex items-center relative z-20 h-full'>
              <img className='absolute local-arrow' alt="Not Found" src="/Icons/middleArrow.png"/>
            </div>
            <div className='local-img-wrapper col-span-3'>
              <img className='local-img' alt="Not Found" src="/Icons/localAccountimg.svg"/>
            </div>
          </div>
        </div>
      
      )
    },
    {
      id: 2, title: 'Card 2', content: (
        <div className={`rounded-lg  ${isMobile ? "py-4 px-3" : "p-6"} corporateCard `}>
          <p className={`${isMobile ? " mt-0" : " mt-3"} roboto text-3xl fw600 text700`}
             style={{fontSize: '30px'}}>Global Multi-Currency Account</p>
          <p className='mt-2 text500' style={{fontSize: '16px'}}>Manage your finances globally with an account that
            supports up to 33 currencies. Pay
            and get paid in your chosen currency with ease.</p>
          {/* <img alt="Not Found" src="/Corporate Cards.png" /> */}
          <div className={`local-acc-card local-acc-card2 grid grid-cols-6 mt-14 ${isInView ? 'local-acc-card2-hover' : ''}`}>
            <div className='col-span-3 relative z-10 flex items-start'>
              <img className='local-img2' alt="Not Found" src="/pcard2.png"/>
            </div>
            <div className='col-span-3 relative z-10 flex items-end'>
              <img className='local-img3' alt="Not Found" src="/pcard1.png"/>
            </div>
          </div>
        </div>
      
      )
    },
  ];
  
  return (
    <div className='pt-24 mainPage'>
      <div className='text-start '>
        <p className='small text300'>M u l t i p l e&ensp;P l a t f o r m s</p>
        <p className='mt-4 roboto text800 fw600' style={{fontSize: '44px'}}>Comprehensive Solutions for Businesses</p>
      </div>
      <div>
        <Carousel cards={cards} component={'business'} isMobile={isMobile}/>
      </div>
      {/* <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5  '>
                <div className='rounded-lg business-csr-card py-10 px-5'>
                <p className='mt-3 roboto text-3xl fw600'>Corporate Cards</p>
                <p className='small'>Spend securely using our Mastercard debit cards in the currency of your choice. Take advantage of competitive conversion rates and seamless transactions, both online and in-store.</p>
                <img alt="Not Found" src="/Corporate Cards.png" />
                </div>
            </div> */}
    </div>
  );
};

export default Business;