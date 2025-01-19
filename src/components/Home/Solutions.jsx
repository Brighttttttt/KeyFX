import React, {useState} from 'react';
import Carousel from './utils/Carousel';
import doubleQuote from '../../assets/svg/home/doubleQuote.svg';
import arrowGray from "../../assets/svg/home/arrowGray.svg";
import arrowWhite from "../../assets/svg/home/arrowWhite.svg";

const Solution = () => {
    const cards = [
        {
            id: 1, title: 'Card 1', content: (
                <div className='bg-white rounded-2xl px-6 py-8 flex gap-4 '>
                    <div>
                        <img alt="doubleQuote" className='-mt-1 w-24 rounded-0' src={doubleQuote}/>
                    </div>
                    <div>
                        <p className='fw600 text-gray text-left pb-5'>KeyFX has revolutionised the way I handle global
                            transactions with their multicurrency account. It's incredibly easy to manage funds across
                            different currencies.</p>
                        <div className='mt-10 flex gap-3 items-center'>
                            <div>
                                <p className='fw600 text700'>Sophia M. </p>
                                <p className='small text-left text500'>Business Owner</p>
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
                        <img alt="doubleQuote" className='-mt-1 w-24 rounded-0' src={doubleQuote}/>
                    </div>
                    <div>
                        <p className='fw600 text-gray text-left pb-5'>KeyFX delivers speed and affordability in
                            international payments. Their competitive rates and always-available support team make the
                            process seamless and stress-free.</p>
                        <div className='mt-10 flex gap-3 items-center'>

                            <div>
                                <p className='fw600 text700'> James L.</p>
                                <p className='small text-left text500'>Consultant</p>
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
                        <img alt="doubleQuote" className='-mt-1 w-24 rounded-0' src={doubleQuote}/>
                    </div>
                    <div>
                        <p className='fw600 text-gray text-left pb-5'>KeyFX’s card lets me spend internationally without
                            worrying about fees. It's a perfect combination of convenience, transparency, and
                            exceptional customer service!</p>
                        <div className='mt-10 flex gap-3 items-center'>

                            <div>
                                <p className='fw600 text700'>Emma R.</p>
                                <p className='small text-left text500'>Traveller</p>
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
                        <img alt="doubleQuote" className='-mt-1 w-24 rounded-0' src={doubleQuote}/>
                    </div>
                    <div>
                        <p className='fw600 text-gray text-left pb-5'>KeyFX has completely streamlined my international
                            transactions. Their tools are not just cost-effective but also incredibly user-friendly,
                            saving me time and effort.</p>
                        <div className='mt-10 flex gap-3 items-center'>

                            <div>
                                <p className='fw600 text700'>Amelia T</p>
                                <p className='small text-left text500'>Entrepreneur</p>
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
                        <img alt="doubleQuote" className='-mt-1 w-24 rounded-0' src={doubleQuote}/>
                    </div>
                    <div>
                        <p className='fw600 text-gray text-left pb-5'>KeyFX provides unbeatable exchange rates along
                            with a seamless platform for managing currency conversions. The process is quick, reliable,
                            and completely stress-free.</p>
                        <div className='mt-10 flex gap-3 items-center'>

                            <div>
                                <p className='fw600 text700'>Oliver H.</p>
                                <p className='small text-left text500'>Freelancer</p>
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
                <div
                    className={"max-w-max-width-main xl:mx-auto flex md:items-end items-start md:gap-0 gap-6 justify-between md:flex-row flex-col"}>
                    <div>
                        <p className='text-grad text-lg'>C u s t o m e r&nbsp;&nbsp;T e s t i m o n i a l s</p>
                        <p className='roboto font-semibold text-[44px]'>What they said about KeyFX Solutions for
                            Businesses?</p>
                        <p className='text-lg text-[#D5DAEF]'>We go the extra mile, The KeyFX platform is designed to
                            make it easier for users to make any payments.</p>
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
                <div className='max-w-max-width-main lg:mt-16 md:mt-14 mt-10 mx-auto'>
                    <Carousel cards={cards} cardsToShow={cardsToShow}
                              currentIndex={currentIndex} totalCards={totalCards}/>
                </div>
            </div>
            <div className='grad-line'></div>
        </div>
    );
};

export default Solution;