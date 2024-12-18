import contact3Image from "../../assets/images/contact3_image.png";
import contact4Image from "../../assets/images/contact4_image.png";
import contact5Image from "../../assets/images/contact5_image.png";
import liveChatIcon from "../../assets/svg/contact/live_chat.svg";
import emailSupportIcon from "../../assets/svg/contact/email_support.svg";
import phoneSupportIcon from "../../assets/svg/contact/phone_support.svg";
import arrowRightIcon from "../../assets/svg/arrow_right.svg";

function SupportComponent() {
    return (
        <div className={"min-h-screen bg-white z-10 pb-16"}>
            <div className={"w-full h-[6px]"}
                 style={{background: "linear-gradient(to right,#AFB7DC 3%,#94A1E3 27%,#4C63D5 56%,#7382CD 85%,#AFB7DC 100%)"}}/>
            <main
                className={"w-full flex items-center justify-center flex-col gap-32 lg:p-[80px] md:p-0 md:py-[72px] md:px-8 py-10 px-4"}>
                <div className={"text-center"}>
                    <p className={"font-plusJakartaSans text-[#7680B0]"}>Support</p>
                    <p className={"roboto font-semibold text-[44px]"}>Customer Support Options</p>
                </div>
                <div
                    className={"flex items-center justify-center lg:gap-[118px] md:gap-[56px] gap-[40px] flex-col md:flex-row"}>
                    <div className={"max-w-[520px] flex items-start justify-center gap-4 flex-col "}>
                        <img src={liveChatIcon} alt={"about1"} className={""}/>
                        <h3 className={"roboto text-4xl font-semibold"}>Live Chat</h3>
                        <p className={"font-plusJakartaSans text500 text-base"}>We provide 24/7 chat support accessible
                            via the website and app for real-time assistance with account issues, foreign exchange
                            services, and card-related inquiries.</p>
                        <button className={"bg-[#394375] border-none px-[14px] py-2 rounded-lg"}>
                            <div className={"flex items-center justify-center gap-2"}>
                                <p className={"!roboto !font-semibold text-sm text-white"}>Visit the in-app chat</p>
                                <img src={arrowRightIcon} alt={"arrowRightIcon"}/>
                            </div>
                        </button>
                    </div>
                    <img src={contact3Image} alt={"about1"} className={"mt-5 w-[520px] "}/>
                </div>
                <div
                    className={"flex items-center justify-center lg:gap-[118px] md:gap-[56px] gap-[40px] flex-col md:flex-row"}>
                    <img src={contact4Image} alt={"about1"} className={"w-[520px] "}/>
                    <div className={"max-w-[520px] flex items-start justify-center gap-4 flex-col "}>
                        <img src={emailSupportIcon} alt={"about1"} className={""}/>
                        <h3 className={"roboto text-4xl font-semibold"}>Email Support</h3>
                        <p className={"font-plusJakartaSans text500 text-base"}> offer <u>info@keyfx.co.uk</u> with a
                            quick response time for general questions, document submissions, and feedback.</p>
                    </div>
                </div>
                <div
                    className={"flex items-center justify-center lg:gap-[118px] md:gap-[56px] gap-[40px] flex-col md:flex-row"}>
                    <div className={"max-w-[520px] flex items-start justify-center gap-4 flex-col "}>
                        <img src={phoneSupportIcon} alt={"about1"} className={""}/>
                        <h3 className={"roboto text-4xl font-semibold"}>Phone Support</h3>
                        <p className={"font-plusJakartaSans text500 text-base"}>Include a customer service number,
                            operational during business hours, for immediate assistance with urgent account matters.</p>
                    </div>
                    <img src={contact5Image} alt={"about1"} className={"mt-5 w-[520px] "}/>
                </div>
            </main>
        </div>
    );
}

export default SupportComponent;