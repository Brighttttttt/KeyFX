import React from "react";
import bgLg from "../../assets/svg/contact/bg_lg.svg";
import bgMobile from "../../assets/svg/contact/bg_mobile.svg";
import checkEmailIcon from "../../assets/svg/contact/check_email.svg";
import answerIcon from "../../assets/svg/contact/answer.svg";
import clockIcon from "../../assets/svg/contact/clock.svg";
import chatIcon from "../../assets/svg/contact/chat.svg";
import calendarIcon from "../../assets/svg/contact/calendar.svg";

function HeaderComponent() {

    const icons = [
        {
            src: checkEmailIcon,
            alt: "Check email",
            class: "md:w-[72px] w-[90px] absolute lg:left-[8%] lg:top-[25%] lg:block hidden"
        },
        {
            src: clockIcon,
            alt: "Clock",
            class: "md:w-[72px] w-[42px] absolute lg:left-[20%] md:left-[20%] lg:top-[80%] md:top-[70%] top-[100%]"
        },
        {
            src: answerIcon,
            alt: "Answer",
            class: "md:w-[60px] w-[42px] absolute lg:right-[32%] md:right-[32%] right-[34%] lg:top-[18%] md:top-[5%] top-[-50%]"
        },
        {
            src: chatIcon,
            alt: "Chat",
            class: "md:w-[72px] w-[42px] absolute lg:right-[20%] md:right-[20%] right-[0] lg:top-[80%] md:top-[70%] top-[100%]"
        },
        {
            src: calendarIcon,
            alt: "Calendar",
            class: "md:w-[72px] w-[90px] absolute lg:right-[8%] lg:top-[20%] lg:block hidden"
        },
    ];

    return (
        <header
            className={"max-w-[1440px] mx-auto relative md:min-h-[484px] min-h-[380px] overflow-hidden flex justify-center items-center"}>
            <picture className={"absolute top-0 w-full "}>
                <source srcSet={bgLg} media="(min-width: 426px)"/>
                <source srcSet={bgMobile} media="(max-width: 425px)"/>
                <img src={bgMobile} alt="Responsive Image" className={"md:w-fit w-full"}/>
            </picture>
            <div className='md:static w-full h-full relative flex justify-center items-center py-5'>
                <div className={"w-full h-full absolute z-50"}>
                    {icons.map(({src, alt, class: iconClass}, index) => (
                        <img key={index} src={src} alt={alt} className={`${iconClass} animate-bounce-slow`}
                             loading="eager"/>
                    ))}
                </div>
                <div className={"text-center relative z-10"}>
                    <p className='roboto font-semibold md:text-[60px] text-[44px] text-transparent bg-clip-text bg-gradient-to-r from-[#00D2D3] to-[#3593FF]'>Talk
                        To Us</p>
                </div>
            </div>
        </header>
    );
}

export default HeaderComponent;