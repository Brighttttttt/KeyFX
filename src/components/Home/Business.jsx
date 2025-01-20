import React, {useState} from 'react';
import GB from '../../assets/svg/flags/united kingdom.svg';
import US from '../../assets/svg/flags/united states.svg';
import EU from '../../assets/svg/flags/eur.svg';
import corp4 from '../../assets/svg/corp4.svg';
import corpArrows from '../../assets/svg/corpArrows.svg';
import listIconAqua from '../../assets/svg/home/listIconAqua.svg';
import arrowGray from "../../assets/svg/home/arrowGray.svg";
import arrowWhite from "../../assets/svg/home/arrowWhite.svg";
import localAccountimg from "../../assets/svg/localAccountimg.svg";
import corpCard from "../../assets/images/corpCard.png";
import corpmasterCard from "../../assets/images/corpmasterCard.png";
import middleArrow from "../../assets/images/middleArrow.png";
import Carousel from "./utils/Carousel";


const Business = () => {

    const [isInView, setIsInView] = useState(false);
    const cards = [
        {
            id: 1, title: 'Card 1', content: (
                <div className={`rounded-lg sm:px-6 sm:py-6 px-3 py-4 corporateCard`}>
                    <p className={`sm:mt-3 mt-0 roboto text-3xl fw600 text700`}
                       style={{fontSize: '30px'}}>Corporate Cards</p>
                    <p className='mt-2 text500' style={{fontSize: '16px'}}>Spend securely using our Mastercard debit
                        cards in the
                        currency of your choice. Take
                        advantage of competitive conversion rates and seamless transactions, both online and
                        in-store.</p>
                    <div
                        className={`flex items-center sm:gap-4 gap-2 corpCard-anim ${isInView ? 'corpCard-anim-hover' : ''}`}
                    >
                        <div className={`relative corpDiv upsideDiv ${isInView ? 'corpCard-anim-hover' : ''}`}>
                            <img className='absolute bottom-10 sm:left-3 left-0 corp1 Card1Img '
                                 alt="Not Found" src={corpmasterCard}/>
                            <img className='relative z-10 corp2 top15 Card2Img' alt="Not Found"
                                 src={corpCard}/>
                        </div>
                        <div>
                            <img alt="Not Found" src={corpArrows}/>
                        </div>
                        <div className='corpDiv2 upsideDiv'>
                            <img className='corp4' alt="Not Found" src={corp4}/>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 2, title: 'Card 2', content: (
                <div className={`rounded-lg corporateCard`}>
                    <p className={`corporateTitle roboto text-3xl fw600 text700`}
                       style={{fontSize: '30px'}}>Local Accounts</p>
                    <p className='mt-2 text500' style={{fontSize: '16px'}}>Open local accounts in GBP, EUR, and USD with KeyFX and enjoy hassle-free global transactions.

Send and receive payments quickly, avoid high exchange fees, and manage your finances in one platform!</p>
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
                            <img className='absolute local-arrow' alt="Not Found" src={middleArrow}/>
                        </div>
                        <div className='local-img-wrapper col-span-3'>
                            <img className='local-img' alt="Not Found" src={localAccountimg}/>
                        </div>
                    </div>
                </div>

            )
        },
        {
            id: 3, title: 'Card 2', content: (
                <div className={`rounded-lg  sm:px-6 sm:py-6 px-3 py-4 corporateCard relative`}>
                    <p className={`sm:mt-3 mt-0 roboto text-3xl fw600 text700`}
                       style={{fontSize: '30px'}}>Global Multi-Currency Account</p>
                    <p className='mt-2 text500' style={{fontSize: '16px'}}>Manage your finances globally with an account
                        that
                        supports up to 33 currencies. Pay
                        and get paid in your chosen currency with ease.</p>
                    <div className="flex local-acc-card2">
                        <div className="relative w-full">
                            <div className={`multi-currency-card1 ${isInView ? 'multi-currency-card1-hover' : ''}`}>
                                <div className="flex justify-between mb-1.5">
                                    <div
                                        className={`f16 fw-bold text700 roboto ml-5 lh-base ${isInView ? 'text-grad' : ''}`}>
                                        Payment
                                    </div>
                                    <img src={GB} alt="GB" className='mr-5'/>
                                </div>
                                <div className='input-wrapper'>
                                    <div className='text200 font-normal text-xxs'>Sort code</div>
                                    <div className="input">11_00_42</div>
                                    <div className='text200 font-normal text-xxs acc-num'>Account number</div>
                                    <div className="input">76543087</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full">
                            <div className={`multi-currency-card2 ${isInView ? 'multi-currency-card2-hover' : ''}`}>
                                <div
                                    className={`f16 fw-bold text700 roboto mb-2.5 lh-base ${isInView ? 'text-grad' : ''}`}>
                                    Supports up to 33 currencies
                                </div>
                                <div className={`curr-wrapper ${isInView ? 'gbp-hover' : ''}`}>
                                    <div className="flex justify-between w-full">
                                        <div className='flex gap-2'>
                                            <img src={GB} alt="GB"/>
                                            <div className='text700 fw-bold roboto text-sm'>GBP</div>
                                        </div>
                                        <img
                                            src={listIconAqua}
                                            alt="listIconAqua"
                                            style={{
                                                transition: "opacity 1.5s ease",
                                                opacity: isInView ? '1' : '0',
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="curr-wrapper">
                                    <img src={US} alt="US"/>
                                    <div className="text300 fw-bold roboto text-sm">USD</div>
                                </div>
                                <div className="curr-wrapper">
                                    <img src={EU} alt="EU" width={24}/>
                                    <div className="text300 fw-bold roboto text-sm">EUR</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        },
    ];

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
        <div className='w-full pt-24'>
            <div
                className={"mainPage max-w-max-width-main xl:mx-auto flex md:items-end items-start md:gap-0 gap-6 justify-between md:flex-row flex-col"}>
                <div className='w-full text-start'>
                    <p className='small text300'>M u l t i p l e&ensp;P l a t f o r m s</p>
                    <p className='mt-4 roboto text800 fw600' style={{fontSize: '44px'}}>Comprehensive Solutions for
                        Businesses</p>
                </div>
                <div
                    className={`flex gap-4`}>
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
            <div className={"max-w-max-width-main lg:mt-16 md:mt-14 mt-10 mx-auto"}>
                <Carousel cards={cards} component={'business'} cardsToShow={cardsToShow}
                          currentIndex={currentIndex} totalCards={totalCards}/>
            </div>
        </div>
    );
};

export default Business;