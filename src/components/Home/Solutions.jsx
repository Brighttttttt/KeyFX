import React, {useState} from 'react';
import Carousel from './utils/Carousel';
import doubleQuote from '../../assets/svg/home/doubleQuote.svg';
import arrowGray from "../../assets/svg/home/arrowGray.svg";
import arrowWhite from "../../assets/svg/home/arrowWhite.svg";

const Solution = ({isMobile}) => {
    const cards = [
        {
            id: 1, title: 'Card 1', content: (
                <div className='bg-white rounded-2xl px-6 py-8 flex gap-4 '>
                    <div>
                        <img alt="doubleQuote" className='-mt-1 rounded-0' src={doubleQuote}/>
                    </div>
                    <div>
                        <p className='fw600 text-gray text-left pb-5'>KeyFX has transformed the way we handle
                            international
                            payments. Their service is fast, reliable, and cost-effective.</p>
                        <div className='mt-10 flex gap-3 items-center'>
                            <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg'
                                 src='/testImgCar.jpg'/>
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
                        <p className='fw600 text-gray text-left pb-5'>Thanks to KeyFX's hedging solutions, we can now
                            manage our
                            currency risks with confidence. Highly recommend!</p>
                        <div className='mt-10 flex gap-3 items-center'>
                            <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg'
                                 src='/testImgCar.jpg'/>
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
                        <p className='fw600 text-gray text-left pb-5'>Thanks to KeyFX's hedging solutions, we can now
                            manage our
                            currency risks with confidence. Highly recommend!</p>
                        <div className='mt-10 flex gap-3 items-center'>
                            <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg'
                                 src='/testImgCar.jpg'/>
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
                        <p className='fw600 text-gray text-left pb-5'>Thanks to KeyFX's hedging solutions, we can now
                            manage our
                            currency risks with confidence. Highly recommend!</p>
                        <div className='mt-10 flex gap-3 items-center'>
                            <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg'
                                 src='/testImgCar.jpg'/>
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
                        <p className='fw600 text-gray text-left pb-5'>Thanks to KeyFX's hedging solutions, we can now
                            manage our
                            currency risks with confidence. Highly recommend!</p>
                        <div className='mt-10 flex gap-3 items-center'>
                            <img alt="Not Found" className='rounded-full bg-gray testMonialCardImg'
                                 src='/testImgCar.jpg'/>
                            <div>
                                <p className='fw600 text700'>Sarah T</p>
                                <p className='small text-left text500'>Ceo</p>
                            </div>
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
        <div className='w-full pt-48'>
            <div className='business-card'>
                <div className={"max-w-max-width-main xl:mx-auto flex md:items-end items-start md:gap-0 gap-6 justify-between md:flex-row flex-col"}>
                    <div>
                        <p className='text-grad text-l'>C u s t o m e r{"\u2007"}T e s t i m o n i a l s</p>
                        <p className='roboto fw600' style={{fontSize: '44px'}}>What they said about KeyFX? Solutions
                            for
                            Businesses</p>
                        <p className='' style={{fontSize: '18px', color: '#D5DAEF'}}>We go the extra mile. The Key.fx
                            system
                            is
                            designed to make it easier for users to make any
                            payments.</p>
                    </div>
                    <div
                        className={`flex gap-4`}>
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
                    {/*<Carousel cards={cards} isMobile={isMobile}/>*/}
                    <Carousel cards={cards} isMobile={isMobile} cardsToShow={cardsToShow}
                              currentIndex={currentIndex} totalCards={totalCards}/>
                </div>
            </div>
            <div className='grad-line'></div>
        </div>
    );
};

export default Solution;