import React, {useEffect} from 'react';
import Services from '../components/Home/Services';
import Solutions from '../components/Home/Solutions';
import Proposition from '../components/Home/Proposition';
import Business from '../components/Home/Business';
import Commerce from '../components/Home/Commerce';
import Support from '../components/Home/Support';
import TalkBusiness from '../components/Home/TalkBusiness';
import SubscribeComponent from "../components/ContactUs/SubscribeComponent";

// contact assets
import bgLgContact from "../assets/svg/contact/bg_lg.svg";
import bgMobileContact from "../assets/svg/contact/bg_mobile.svg";
import checkEmailIcon from "../assets/svg/contact/check_email.svg";
import answerIcon from "../assets/svg/contact/answer.svg";
import clockIcon from "../assets/svg/contact/clock.svg";
import chatIcon from "../assets/svg/contact/chat.svg";
import calendarIcon from "../assets/svg/contact/calendar.svg";

// about assets
import bgLg from "../assets/svg/about/bg_lg.svg";
import bgMobile from "../assets/svg/about/bg_mobile.svg";
import dollar from "../assets/svg/about/Dollar.svg";
import eur from "../assets/svg/about/EUR.svg";
import jpy from "../assets/svg/about/jpy.svg";
import component from "../assets/svg/about/Component.svg";
import lnr from "../assets/svg/about/lnr.svg";
import gpb from "../assets/svg/about/GPB.svg";
import Header from "../components/Home/Header";

const preloadImages = (imageUrls) => {
    imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
};

const MainPage = () => {

    useEffect(() => {
        const imagesToPreload = [
            bgLgContact,
            bgMobileContact,
            checkEmailIcon,
            answerIcon,
            clockIcon,
            chatIcon,
            calendarIcon,
            bgLg,
            bgMobile,
            dollar,
            eur,
            jpy,
            component,
            lnr,
            gpb
        ];
        preloadImages(imagesToPreload);
    }, []);

    return (
        <div className={"flex flex-col items-center justify-center"}>
            <Header/>
            <Services/>
            <Solutions/>
            <Proposition/>
            <Business/>
            <Commerce/>
            <Support/>
            <TalkBusiness/>
            <SubscribeComponent withoutBlur={true}/>
        </div>
    );
};

export default MainPage; 