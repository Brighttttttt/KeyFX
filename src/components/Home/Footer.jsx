import React from 'react';
import logo2 from '../../assets/svg/logo2.svg'

const Footer = ({ isMobile }) => {
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
          
          <a className='mt-4 text-sm text600' href="https://keyfx.co.uk/blog/payment-services-keyfx/">Payment Services</a>
          <a className='mt-2 text-sm text600' href="https://keyfx.co.uk/blog/mastering-foreign-exchange-services-with-keyfx/">Foreign Exchange Services</a>
          <a className='mt-2 text-sm text600' href="https://keyfx.co.uk/blog/card-services-with-keyfx-flexibility-and-security-at-your-fingertips/">Card Services</a>
          <a className='mt-2 text-sm text600' href="https://keyfx.co.uk/blog/local-business-bank-accounts-with-keyfx-simplifying-global-operations/">Local Business Bank Accounts</a>
        </div>
        <div className='flex flex-col'>
          <p className='mt-4 font-medium text800 text-lg'>Support</p>
          
          <a className='mt-4 text-sm text600' href="https://keyfx.co.uk/termsandconditions">Terms of Service</a>
          <a className='mt-2 text-sm text600' href="https://keyfx.co.uk/keyfx_privacy.pdf">Privacy and Cookie Policy</a>
          <a className='mt-2 text-sm text600' href="/contact-us">FAQ</a>
          <a className='mt-2 text-sm text600' href="https://panel.keyfx.co.uk/complain">Complaint form</a>
        </div>
        <div className='flex flex-col'>
          <p className='mt-4 font-medium text800 text-lg'>Contact us</p>
          
          <a className='mt-4 text-sm text600 flex items-center gap-2' href="tel:08000029331"><img alt='Not Available'
                                                                          src='/Phone%20Calling%20Rounded.svg'/>0800-002-9331</a>
          <a className='mt-2 text-sm text600 flex items-center gap-2' href="mailto:info@keyfx.co.uk"><img alt='Not Available' src='/Letter.svg'/>info@keyfx.co.uk</a>
          <a className='mt-2 text-sm text600 flex items-center gap-2'><img alt='Not Available'
                                                                          src='/clock.svg'/>9am-5pm Mon -
            Fri</a>
          <a className='mt-2 text-sm text600 flex items-center gap-2'><img alt='Not Available'
                                                                          src='/Streets%20Map%20Point.svg'/>128 City
            Road, London, EC1V 2NX</a>
        </div>
      </div>
      <div className='border-line'>
      
      </div>
      <div className={`flex sm-col gap-4 ${isMobile ? " items-start" : " items-center"}  `}>
        <a href="https://www.londonchamber.co.uk/"><img className='w-80' src="/LCCI%201.svg" alt='Not Available'/></a>
        <p className='text-xxs'>KeyFX is registered as a Money Services Business, regulated by HM Revenue & Customs under the Money Laundering Regulations 2017 (Registration number XDML00000157237). Our payment services are provided by The Currency Cloud Limited, authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 (FRN: 900199), and Sciopay Ltd, licensed and regulated by HMRC as a Money Service Business (Licence No: XCML00000151326) and authorised by the Financial Conduct Authority as an Authorised Payment Institution (Firm Reference Number: 927951).</p>
      </div>
      <div className='flex my-4 gap-3'>
        <p className='text600 fw400' style={{fontSize: '14px'}}>Connect with KeyFX in social media</p>
        <img alt="Not Available" src="/Fb.svg" className={"cursor-pointer"} onClick={()=> window.open("https://www.facebook.com/TheKeyfx")}/>
        <img alt="Not Available" src="/Insta.svg" className={"cursor-pointer"} onClick={()=> window.open("https://www.instagram.com/thekeyfx")}/>
        <img alt="Not Available" src="/Linked.svg" className={"cursor-pointer"} onClick={()=> window.open("https://www.linkedin.com/company/keyfx")}/>
      </div>
    </div>
  );
};

export default Footer;