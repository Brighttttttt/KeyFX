import React from 'react';
import Converter from './utils/Converter';
import WorldTour from './utils/WorldTour';
import arrowRight from "../../assets/svg/home/arrowRight.svg";

const Header = ({ isMobile }) => {
    return (
        <div>
            <div className='flex justify-center mainPage'>
                <div className={isMobile ? 'mt-0 pt-0 w-full text-center' : 'mt-10 pt-5 text-center'}>
                    <p className='text-grad roboto text-6xl fw600'>Empowering</p>
                    <p className='mt-3 roboto text-6xl fw600 text900'>Your Business Globally</p>
                    <p className='mt-3 text-xl roboto text500' style={!isMobile ? {width: '658px'} : {}}>
                        Your One-Stop for
                        <p className='fw600 d-inline text800'> International Payments</p>
                        ,
                        <p className='fw600 d-inline text800'> Currency Exchange</p>
                        , and
                        <p className='fw600 d-inline text800'> Cards</p>
                    </p>
                    <div className={`flex ${isMobile ? 'flex-col' : 'sm:flex-row'} gap-4 justify-center mt-3`}>
                        <button
                          className='text-l btn rounded-full btn-p flex items-center justify-center gap-2'
                          style={isMobile ? {height: '45px', fontSize: '18px'} : {}}
                        >
                            Open an Account
                            <img alt="arrowRight" src={arrowRight}/>
                        </button>
                        <button className='text-l btn btn-ot rounded-full text600'>Talk to Our Team</button>
                    </div>
                </div>
            </div>
            <WorldTour />
            <Converter />
        </div>
    );
};

export default Header;
