import React from "react";
import bg from "../../assets/images/bg.png";
import bgMobile from "../../assets/images/bg_mobile.png";
import dollar from "../../assets/images/Dollar.png";
import eur from "../../assets/images/EUR.png";
import jpy from "../../assets/images/jpy.png";
import component from "../../assets/images/Component.png";
import lnr from "../../assets/images/lnr.png";
import gpb from "../../assets/images/GPB.png";

function HeaderComponent() {
    return (
        <div className={"relative pt-[80px]"}>
            <img src={bg} className={"absolute top-0 md:block hidden"} alt={"bg"}/>
            <img src={bgMobile} className={"absolute top-0 md:hidden block"} alt={"bg"}/>
            <div className='relative z-10 flex justify-center py-5'>
                <div className={"w-full h-full absolute z-50"}>
                    <img src={dollar} alt={"dollar"}
                         className={"md:w-[180px] w-[90px] absolute lg:right-[20%] md:right-[5%] right-[-5%] -top-10 animate-bounce-slow"}/>
                    <img src={eur} alt={"eur"}
                         className={"md:w-[180px] w-[90px] absolute lg:left-[20%] md:left-[5%] left-0 -top-10 animate-bounce-slow"}/>
                    <img src={jpy} alt={"jpy"}
                         className={"md:w-[180px] w-[90px] absolute lg:left-[10%] left-[-2%] top-[20%] animate-bounce-slow"}/>
                    <img src={component} alt={"component"}
                         className={"md:w-[180px] w-[90px] absolute lg:left-[15%] md:left-[0] left-[-4%] md:top-[50%] bottom-[3%] animate-bounce-slow"}/>
                    <img src={lnr} alt={"lnr"}
                         className={"md:w-[180px] w-[90px] absolute lg:right-[10%] right-[-2%] top-[20%] animate-bounce-slow"}/>
                    <img src={gpb} alt={"gpb"}
                         className={"md:w-[180px] w-[90px] absolute lg:right-[15%] md:right-0 right-[-2%] md:top-[50%] bottom-[3%] animate-bounce-slow"}/>
                </div>
                <div className={"text-center relative z-10"}>
                    <p className='roboto font-semibold md:text-[60px] text-[44px] text-transparent bg-clip-text bg-gradient-to-r from-[#00D2D3] to-[#3593FF]'>Unlock
                        Global</p>
                    <p className='roboto md:text-[60px] text-[44px] md:leading-10 leading-none font-semibold text900'>Potential
                        with KEYFX</p>
                    <p className='mt-5 text-lg roboto text500 [&_strong]:font-semibold md:w-[658px] md:px-0 px-4'>
                        <strong>At KEYFX</strong>, we make international payments easy for businesses of all sizes. Our
                        digital business accounts <strong>streamline cross-border transactions</strong>, giving
                        you <strong>access to the best FX rates</strong> while reducing the <strong>costs of global
                        trade.</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;