import React from 'react';
import bank1 from "../../assets/svg/home/proposition/bank1.svg";
import bank2 from "../../assets/svg/home/proposition/bank2.svg";
import limit1 from "../../assets/svg/home/proposition/limit1.svg";
import limit2 from "../../assets/svg/home/proposition/limit2.svg";
import support1 from "../../assets/svg/home/proposition/support1.svg";
import support2 from "../../assets/svg/home/proposition/support2.svg";
import pricing1 from "../../assets/svg/home/proposition/pricing1.svg";
import pricing2 from "../../assets/svg/home/proposition/pricing2.svg";
import secure1 from "../../assets/svg/home/proposition/secure1.svg";
import secure2 from "../../assets/svg/home/proposition/secure2.svg";
import window1 from "../../assets/svg/home/proposition/window1.svg";
import window2 from "../../assets/svg/home/proposition/window2.svg";
import account1 from "../../assets/svg/home/proposition/account1.svg";
import account2 from "../../assets/svg/home/proposition/account2.svg";
import team1 from "../../assets/svg/home/proposition/team1.svg";
import team2 from "../../assets/svg/home/proposition/team2.svg";

const Proposition = ({ isMobile }) => {

    const propo = [
        {id:1 , title:'Bank-Beating Rates' , img1: bank1, img2: bank2, desc: 'save more with our bank-beating rates. More value in every currency exchange.'},
        {id:1 , title:'No Fees & No Limits' , img1: limit1, img2: limit2, desc: 'Enjoy the freedom of No transfer fees and no transaction limits. Global payments made boundless."'},
        {id:1 , title:'24/7 Support' , img1: support1, img2: support2, desc: 'Always here for you with 24/7 support. Expert help whenever you need it.'},
        {id:1 , title:'Transparent Pricing' , img1: pricing1, img2: pricing2, desc: 'Clarity in every transaction. No surprises, just fair, straightforward rates.'},
        {id:1 , title:'Secure & Cutting-Edge Software' , img1: secure1, img2: secure2, desc: 'Trust in our secure, cutting-edge platform with 2FA (2 Factor Authentication). Safeguarding your transactions, always'},
        {id:1 , title:'2-H Support Window 2-H Support Window' , img1: window1, img2: window2, desc: 'Rapid resolutions with our 2-hour support window. Quick answers to keep you moving.'},
        {id:1 , title:'Dedicated Account Managers' , img1: account1, img2: account2, desc: 'Your dedicated account manager: personalised guidance for your business’s global payment needs.'},
        {id:1 , title:'Expert Compliance Team' , img1: team1, img2: team2, desc: 'Protected by experts. Our compliance team ensures your transactions are safe and sound, preventing financial crime'},
    ]

    return (
        <div className='proposition-card pt-24 mainPage2'>
            <div className='text-center '>
                <p className='small text300'>B e n e fi t s</p>
                <p className='mt-3 roboto fw600 textPeacoat' style={{fontSize: '44px'}}>The KeyFX Value Proposition</p>
            </div>
            <div className={`grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ${isMobile ? 'mt-16' : 'mt-32'} `}>
                {propo.map(
                    pro => (
                      <div className='py-12 px-4 bg-anim-1'>
                          <div className='icon-rotate'>
                              <img className='icon-rotate1' alt="icon1" src={pro.img1}/>
                              <img className='icon-rotate2' alt="icon2" src={pro.img2}/>
                          </div>
                          <p className='roboto fw600 text-xl mt-4 text700'>{pro.title}</p>
                          <p className='small mt-3 text500'>{pro.desc}</p>
                      </div>
                    
                    )
                )}
            </div>
        
        </div>
    );
};

export default Proposition;