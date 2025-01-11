import React from 'react';
import radialBlur from "../../assets/images/radial_blur.png";
import {useMediaQuery} from "../../hooks/useMediaQuery";
import {dimensions} from "../../core/values/dimensions";
import {Marquee} from "../ui/marquee";


const Commerce = ({isMobile}) => {
    const comm = [
        {
            id: 1,
            title: 'Unified Banking Services',
            img: './business3.svg',
            desc: 'Experience the convenience of integrated banking. Our unified platform offers a singular, streamlined interface for all your international finance needs.'
        },
        {
            id: 2,
            title: 'Personalized Global Support',
            img: './Personalized Global Support.svg',
            desc: 'Our reach is worldwide but our service is tailored. We provide dedicated support to help you navigate the intricacies of the global financial landscape.'
        },
        {
            id: 3,
            title: 'Competitive Rates',
            img: './Competitive Rates.svg',
            desc: 'We strive to outmatch traditional banking rates, ensuring your business saves on every transaction.'
        },
        {
            id: 4,
            title: 'Unified Banking Services',
            img: './business3.svg',
            desc: 'Experience the convenience of integrated banking. Our unified platform offers a singular, streamlined interface for all your international finance needs.'
        },
    ];
    const rowTwo = [
        {
            id: 3,
            title: 'Competitive Rates',
            img: './Competitive Rates.svg',
            desc: 'We strive to outmatch traditional banking rates, ensuring your business saves on every transaction.'
        },
        {
            id: 4,
            title: 'Streamlined Cross-Border Payments',
            img: './Streamlined Cross-Border Payments.svg',
            desc: 'With KeyFX, boundaries blur as you effortlessly send and receive payments worldwide, fueling international trade and services.'
        },
        {
            id: 5,
            title: 'Optimized FX Solutions',
            img: './Optimized FX Solutions.svg',
            desc: 'Benefit from superior foreign exchange rates. Our solutions are designed to minimize conversion costs and to smartly manage foreign exchange risk.'
        },
        {
            id: 6,
            title: 'Unified Banking Services',
            img: './business3.svg',
            desc: 'Experience the convenience of integrated banking. Our unified platform offers a singular, streamlined interface for all your international finance needs.'
        },
    ];
    const isBreakPoint = useMediaQuery(dimensions.sm);

    return (
        <div
            className={`w-full justify-items-center pt-24 proposition-card pb-32 flex flex-col gap-16 bg-commerce-gradient `}>
            <div className='lg:px-0 px-4 w-full text-center max-w-max-width-main mx-auto'>
                <p className={`small ${isMobile ? 'text-grad2 fw600' : 'text300'}`}>S e r v e r s</p>
                <p className='mt-3 roboto text700 fw600' style={{fontSize: '44px'}}>Empowering Global Commerce</p>
                <p className='text-lg mt-3 lg:px-32 text500' style={{fontSize: '18px'}}>
                    At KeyFX, we pave the way for seamless international commerce through advanced financial
                    technology. Our comprehensive platform is the cornerstone for businesses big and small,
                    simplifying and securing global transactions. Here's how we stand out:
                </p>
            </div>
            <div>
                <Marquee fade={!isBreakPoint}
                         pauseOnHover={false}
                         numberOfCopies={10}
                         className={"gap-8 py-20"} innerClassName="gap-8">
                    {comm.map((commerce, index) => (
                        <div key={commerce.id}
                             className={'slider_card relative md:w-[516px] w-[342px] md:h-[308px] h-[340px] bg-white shadow-[0px_0px_36px_0px_#98A2B34D] md:px-10 px-6 md:py-10 py-6 rounded-xl text-wrap border-1 border-[#AFB7DC] flex flex-col items-start justify-center'}>
                            <img alt="hover" src={radialBlur}
                                 className={"absolute inset-0 md:w-[516px] w-[342px] md:h-[308px] h-[364px] -z-20 blur-md transition-opacity duration-300"}/>
                            <img alt="Not Found" src={commerce.img}/>
                            <p className='roboto fw600 text-xl mt-4 text700'>{commerce.title}</p>
                            <p className='small text500 ellipsis'>{commerce.desc}</p>
                        </div>
                    ))}
                </Marquee>
                <Marquee fade={!isBreakPoint}
                         pauseOnHover={false}
                         reverse={true}
                         numberOfCopies={10}
                         className={"gap-8 py-20 -mt-32"} innerClassName="gap-8">
                    {rowTwo.map((commerce, index) => (
                        <div key={commerce.id}
                             className={'slider_card relative md:w-[516px] w-[342px] md:h-[308px] h-[340px] bg-white shadow-[0px_0px_36px_0px_#98A2B34D] md:px-10 px-6 md:py-10 py-6 rounded-xl text-wrap border-1 border-[#AFB7DC] flex flex-col items-start justify-center'}>
                            <img alt="hover" src={radialBlur}
                                 className={"absolute inset-0 md:w-[516px] w-[342px] md:h-[308px] h-[364px] -z-20 blur-md transition-opacity duration-300"}/>
                            <img alt="Not Found" src={commerce.img}/>
                            <p className='roboto fw600 text-xl mt-4 text700'>{commerce.title}</p>
                            <p className='small text500 ellipsis'>{commerce.desc}</p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Commerce;
