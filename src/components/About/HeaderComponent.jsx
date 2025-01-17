import React from "react";
import bgLg from "../../assets/svg/about/bg_lg.svg";
import bgMobile from "../../assets/svg/about/bg_mobile.svg";
import dollar from "../../assets/svg/about/Dollar.svg";
import eur from "../../assets/svg/about/EUR.svg";
import jpy from "../../assets/svg/about/jpy.svg";
import component from "../../assets/svg/about/Component.svg";
import lnr from "../../assets/svg/about/lnr.svg";
import gpb from "../../assets/svg/about/GPB.svg";

function HeaderComponent() {

    const icons = [
        {
            src: dollar,
            alt: "Dollar",
            class: "sm:w-[180px] w-[90px] absolute lg:right-[20%] md:right-[5%] right-[-5%] animate-bounce-slow",
        },
        {
            src: eur,
            alt: "Euro",
            class: "sm:w-[180px] w-[90px] absolute lg:left-[20%] md:left-[5%] left-0 animate-bounce-slow",
        },
        {
            src: jpy,
            alt: "Japanese Yen",
            class: "sm:w-[180px] w-[90px] absolute lg:left-[10%] left-[-2%] top-[30%] animate-bounce-slow",
        },
        {
            src: component,
            alt: "Component",
            class: "sm:w-[180px] w-[90px] absolute lg:left-[15%] md:left-[0] left-[-4%] md:top-[60%] bottom-[2%] animate-bounce-slow",
        },
        {
            src: lnr,
            alt: "Linear",
            class: "sm:w-[180px] w-[90px] absolute lg:right-[10%] right-[-2%] top-[30%] animate-bounce-slow",
        },
        {
            src: gpb,
            alt: "British Pound",
            class: "sm:w-[180px] w-[90px] absolute lg:right-[15%] md:right-0 right-[-2%] md:top-[60%] bottom-[2%] animate-bounce-slow",
        },
    ];

    return (
        <header className={"max-w-[1440px] mx-auto relative md:min-h-[474px] min-h-[480px] overflow-hidden flex justify-stretch items-stretch pt-[80px]"}>
            <picture className={"absolute top-0 w-full"}>
                <source srcSet={bgLg} media="(min-width: 426px)"/>
                <source srcSet={bgMobile} media="(max-width: 425px)"/>
                <img src={bgMobile} alt="Responsive Image" className={"md:w-fit w-full"}/>
            </picture>

            <div className='static w-full h-full flex justify-center items-center py-10'>
                <div className={"w-full h-full absolute z-20"}>
                    {icons.map((icon, index) => (
                        <img
                            key={index}
                            src={icon.src}
                            alt={icon.alt}
                            className={icon.class}
                            loading="lazy"
                        />
                    ))}
                </div>
                <div className={"text-center relative z-30"}>
                    <p className='roboto font-semibold md:text-[60px] text-[44px] text-transparent bg-clip-text bg-gradient-to-r from-[#00D2D3] to-[#3593FF]'>Unlock
                        Global</p>
                    <p className='roboto md:text-[60px] text-[44px] md:leading-10 leading-none font-semibold text900'>Potential
                        with KEYFX</p>
                    <p className='mt-5 text-lg roboto text500 [&_strong]:font-semibold lg:w-[658px] sm:w-[80%] mx-auto md:px-0 px-4'>
                        <strong>At KEYFX</strong>, we make international payments easy for businesses of all sizes. Our
                        digital business accounts <strong>streamline cross-border transactions</strong>, giving
                        you <strong>access to the best FX rates</strong> while reducing the <strong>costs of global
                        trade.</strong>
                    </p>
                </div>
            </div>
        </header>
    );
}

export default HeaderComponent;