import React, {useEffect, useState} from 'react';
import Navbar from '../components/Home/Navbar';
import Header from '../components/Home/Header';
import Services from '../components/Home/Services';
import Solutions from '../components/Home/Solutions';
import Proposition from '../components/Home/Proposition';
import Business from '../components/Home/Business';
import Commerce from '../components/Home/Commerce';
import Support from '../components/Home/Support';
import TalkBusiness from '../components/Home/TalkBusiness';
import Subscribe from '../components/Home/Subscribe';
import Footer from '../components/Home/Footer';

const MainPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    
    // Set initial value based on screen width
    handleResize();
    
    // Listen for resize events
    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <>
      <Navbar />
      <Header isMobile={isMobile} />
      <Services isMobile={isMobile} />
      <Solutions isMobile={isMobile} />
      <Proposition isMobile={isMobile} />
      <Business isMobile={isMobile} />
      <Commerce isMobile={isMobile} />
      <Support isMobile={isMobile} />
      <TalkBusiness isMobile={isMobile} />
      <Subscribe isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </>
  );
};

export default MainPage; 