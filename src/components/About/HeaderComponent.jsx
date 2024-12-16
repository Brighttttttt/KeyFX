import React from "react";
import bg from "../../assets/images/bg.png";
import bgMobile from "../../assets/images/bg_mobile.png";

function HeaderComponent({isMobile}) {
    return (
        <div>
            <div className='md:static relative flex justify-center py-5'>
                <img src={bg} className={"absolute md:block hidden top-0 -z-10"} alt={"bg"}/>
                <img src={bgMobile} className={"absolute md:hidden block top-0 -z-10"} alt={"bg"}/>
                <div className={"text-center relative z-10"}>
                    <p className='roboto font-semibold md:text-[60px] text-[44px] text-transparent bg-clip-text bg-gradient-to-r from-[#00D2D3] to-[#3593FF]'>Unlock
                        Global</p>
                    <p className='roboto md:text-[60px] text-[44px] md:leading-10 leading-none font-semibold text900'>Potential with KEYFX</p>
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