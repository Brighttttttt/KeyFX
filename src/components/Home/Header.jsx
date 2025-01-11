import React from 'react';
import Converter from './utils/Converter';
import WorldTour from './utils/WorldTour';
import arrowRight from "../../assets/svg/home/arrowRight.svg";

const Header = ({isMobile}) => {

    const viewportHeight = window.visualViewport?.height;

    return (
        <div
            className={"sm:h-fit relative w-full max-w-max-width-main flex flex-col"}
            style={{height: `calc(${viewportHeight}px - var(--navbar-height))`}}>
            <div className='flex justify-center mainPage'>
                <div
                    className={`${isMobile ? 'mt-0 pt-0 w-full text-center' : 'md:pt-5 text-center'} flex flex-col items-stretch justify-center sm:gap-0 gap-2`}>
                    <p className='text-grad roboto md:text-6xl text-[18px] fw600'>Empowering</p>
                    <p className='md:mt-3 roboto md:text-6xl text-[18px] fw600 text900'>Your Business Globally</p>
                    <p className='md:mt-2 mt-1 md:text-xl text-[14px] roboto text500'
                       style={!isMobile ? {width: '658px'} : {}}>
                        Your One-Stop for
                        <span className='fw600 d-inline text800'> International Payments</span>
                        ,
                        <span className='fw600 d-inline text800'> Currency Exchange</span>
                        , and
                        <span className='fw600 d-inline text800'> Cards</span>
                    </p>
                    <div className={`flex flex-row md:flex-col sm:gap-3 gap-1 justify-center mt-3`}>
                        <button
                            className='md:w-fit w-full flex items-center justify-center gap-2 font-plusJakartaSans font-medium md:text-lg text-sm text-white rounded-full border-none bg-[#394375] hover:bg-none sm:px-6 sm:py-[10px] py-1'>
                            {isMobile ? "Account" : "Open an Account"}
                            <img alt="arrowRight" src={arrowRight} className={"md:w-fit w-[18px]"}/>
                        </button>
                        <button
                            className='md:w-fit w-full rounded-full text600 font-plusJakartaSans text-[#182252] md:text-lg text-sm font-medium sm:px-6 sm:py-[10px] py-1 border-1 border-solid border-[#182252] bg-transparent'>Talk
                            to Our Team
                        </button>
                    </div>
                </div>
            </div>
            <WorldTour/>
            <Converter/>
        </div>
    );
};

export default Header;
