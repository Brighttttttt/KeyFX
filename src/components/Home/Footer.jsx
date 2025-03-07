import React from 'react';
import logo2 from '../../assets/svg/logo2.svg';
import clockIcon from '../../assets/svg/clock.svg';
import fbIcon from '../../assets/svg/Fb.svg';
import instaIcon from '../../assets/svg/Insta.svg';
import linkedinIcon from '../../assets/svg/Linked.svg';
import letterIcon from '../../assets/svg/Letter.svg';
import lcciLogo from '../../assets/svg/LCCI 1.svg';
import phoneCallingRoundedIcon from '../../assets/svg/Phone Calling Rounded.svg';
import streetMapPointIcon from '../../assets/svg/Streets Map Point.svg';

const Footer = ({isMobile}) => {
    return (
        <div className='mainPage2 pb-28'>
            <div>
                <img alt="logo2" src={logo2}/>
            </div>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2'>
                <div className='flex flex-col'>
                    <p className='mt-4 font-medium text800 text-lg'>KeyFX</p>

                    <a className='mt-4 text-sm text600' href={"/about"}>About Us</a>
                    <a className='mt-2 text-sm text600' href={"/contact-us"}>Contact</a>
                    <a className='mt-2 text-sm text600' href={"/pricing"}>Pricing</a>
                    <a className='mt-2 text-sm text600' href={"https://keyfx.co.uk/blog"}>Blog</a>
                </div>
                <div className='flex flex-col'>
                    <p className='mt-4 font-medium text800 text-lg'>Features</p>

                    <a className='mt-4 text-sm text600' href="https://keyfx.co.uk/blog/payment-services-keyfx/">Payment
                        Services</a>
                    <a className='mt-2 text-sm text600'
                       href="https://keyfx.co.uk/blog/mastering-foreign-exchange-services-with-keyfx/">Foreign Exchange
                        Services</a>
                    <a className='mt-2 text-sm text600'
                       href="https://keyfx.co.uk/blog/card-services-with-keyfx-flexibility-and-security-at-your-fingertips/">Card
                        Services</a>
                    <a className='mt-2 text-sm text600'
                       href="https://keyfx.co.uk/blog/local-business-bank-accounts-with-keyfx-simplifying-global-operations/">Local
                        Business Bank Accounts</a>
                </div>
                <div className='flex flex-col'>
                    <p className='mt-4 font-medium text800 text-lg'>Support</p>

                    <a className='mt-4 text-sm text600' href="https://keyfx.co.uk/termsandconditions">Terms of
                        Service</a>
                    <a className='mt-2 text-sm text600' href="https://keyfx.co.uk/keyfx_privacy.pdf">Privacy and Cookie
                        Policy</a>
                    <a className='mt-2 text-sm text600' href="/contact-us">FAQ</a>
                    <a className='mt-2 text-sm text600' href="https://panel.keyfx.co.uk/complain">Complaint form</a>
                </div>
                <div className='flex flex-col'>
                    <p className='mt-4 font-medium text800 text-lg'>Contact us</p>

                    <a className='mt-4 text-sm text600 flex items-center gap-2' href="tel:08000029331"><img
                        alt='Not Available'
                        src={phoneCallingRoundedIcon}/>0800-002-9331</a>
                    <a className='mt-2 text-sm text600 flex items-center gap-2' href="mailto:info@keyfx.co.uk"><img
                        alt='Not Available' src={letterIcon}/>info@keyfx.co.uk</a>
                    <a className='mt-2 text-sm text600 flex items-center gap-2'><img alt='Not Available'
                                                                                     src={clockIcon}/>9am-5pm Mon -
                        Fri</a>
                    <a className='mt-2 text-sm text600 flex items-center gap-2'><img alt='Not Available'
                                                                                     src={streetMapPointIcon}/>128
                        City
                        Road, London, EC1V 2NX</a>
                </div>
            </div>
            <div className='mx-[-20px] my-[30px] border-[0.5px] border-solid border-[#D5DAEF]'/>
            <div className={`flex sm-col gap-4 ${isMobile ? " items-start" : " items-center"}  `}>
                <a href="https://www.londonchamber.co.uk/"><img className='w-80' src={lcciLogo}
                                                                alt='Not Available'/></a>
                <p className='text-xxs'>KeyFX is registered as a Money Services Business, regulated by HM Revenue &
                    Customs under the Money Laundering Regulations 2017 (Registration number XDML00000157237). Our
                    payment services are provided by The Currency Cloud Limited, authorised by the Financial Conduct
                    Authority under the Electronic Money Regulations 2011 (FRN: 900199), and Sciopay Ltd, licensed and
                    regulated by HMRC as a Money Service Business (Licence No: XCML00000151326) and authorised by the
                    Financial Conduct Authority as an Authorised Payment Institution (Firm Reference Number:
                    927951).</p>
            </div>
            <div className='flex my-4 gap-3'>
                <p className='text600 font-normal text-sm'>Connect with KeyFX in social media</p>
                <img alt="Not Available" src={fbIcon} className={"cursor-pointer"}
                     onClick={() => window.open("https://www.facebook.com/TheKeyfx")}/>
                <img alt="Not Available" src={instaIcon} className={"cursor-pointer"}
                     onClick={() => window.open("https://www.instagram.com/thekeyfx")}/>
                <img alt="Not Available" src={linkedinIcon} className={"cursor-pointer"}
                     onClick={() => window.open("https://www.linkedin.com/company/keyfx")}/>
            </div>
        </div>
    );
};

export default Footer;