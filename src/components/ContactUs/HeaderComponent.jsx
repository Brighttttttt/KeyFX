import React from "react";
import bg from "../../assets/images/bg.png";
import bgMobile from "../../assets/images/bg_mobile.png";
import checkEmailIcon from "../../assets/svg/contact/check_email.svg";
import answerIcon from "../../assets/svg/contact/answer.svg";
import clockIcon from "../../assets/svg/contact/clock.svg";
import chatIcon from "../../assets/svg/contact/chat.svg";
import callIcon from "../../assets/svg/contact/call.svg";
import calendarIcon from "../../assets/svg/contact/calendar.svg";
import checkIcon from "../../assets/svg/contact/check.svg";
import avatar2Image from "../../assets/images/avatar2.png";
import avatar1Image from "../../assets/images/avatar1.png";
import avatar3Image from "../../assets/images/avatar3.png";

function HeaderComponent() {
    return (
        <div className={"relative pt-[80px] md:min-h-[484px] min-h-[380px] overflow-hidden flex justify-center items-center"}>
            <img src={bg} className={"absolute top-0 md:block hidden"} alt={"bg"}/>
            <img src={bgMobile} className={"absolute top-0 md:hidden block"} alt={"bg"}/>
            <div className='md:static w-full h-full relative flex justify-center items-center py-5'>
                <div className={"w-full h-full absolute z-50"}>
                    <img src={checkEmailIcon} alt={"check email"}
                         className={"md:w-[80px] w-[90px] absolute lg:left-[8%]  lg:top-[25%] lg:block hidden"}/>
                    <img src={avatar2Image} alt={"avatar"}
                         className={"md:w-[53px] absolute lg:left-[15%] lg:top-[45%] lg:block hidden"}/>
                    <img src={avatar1Image} alt={"avatar"}
                         className={"md:w-[53px] w-[32px] absolute lg:left-[32%] md:left-[26%] left-[0] lg:top-[15%] md:top-[15%]"}/>
                    <img src={checkIcon} alt={"checkIcon"}
                         className={"md:w-[42px] w-[24px] absolute lg:left-[25%] md:left-[20%] left-[25%] lg:top-[40%] md:top-[40%] top-[-15%]"}/>
                    <img src={clockIcon} alt={"clockIcon"}
                         className={"md:w-[72px] w-[42px] absolute lg:left-[20%] md:left-[20%] lg:top-[70%] md:top-[70%] top-[100%] animate-bounce-slow"}/>
                    <img src={answerIcon} alt={"answerIcon"}
                         className={"md:w-[72px] w-[42px] absolute lg:right-[32%] md:right-[24%] right-[34%] lg:top-[15%] md:top-[15%] top-[-50%] animate-bounce-slow"}/>
                    <img src={avatar3Image} alt={"avatar3Image"}
                         className={"md:w-[72px] w-[42px] absolute lg:right-[25%] md:right-[18%] right-[10%] lg:top-[40%] md:top-[40%] top-[-5%]"}/>
                    <img src={chatIcon} alt={"chatIcon"}
                         className={"md:w-[72px] w-[42px] absolute lg:right-[20%] md:right-[20%] right-[0] lg:top-[70%] md:top-[70%] top-[100%] animate-bounce-slow"}/>
                    <img src={calendarIcon} alt={"calendarIcon"}
                         className={"md:w-[72px] w-[90px] absolute lg:right-[8%] lg:top-[20%] lg:block hidden"}/>
                    <img src={callIcon} alt={"callIcon"}
                         className={"md:w-[64px] w-[90px] absolute lg:right-[4%] lg:top-[60%] lg:block hidden"}/>
                </div>
                <div className={"text-center relative z-10"}>
                    <p className='roboto font-semibold md:text-[60px] text-[44px] text-transparent bg-clip-text bg-gradient-to-r from-[#00D2D3] to-[#3593FF]'>Talk
                        To Us</p>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;