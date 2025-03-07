import contact3Image from "../../assets/images/contact3_image.png";
import contact4Image from "../../assets/images/contact4_image.png";
import contact5Image from "../../assets/images/contact5_image.png";
import liveChat1Icon from "../../assets/svg/contact/live_chat1.svg";
import liveChat2Icon from "../../assets/svg/contact/live_chat2.svg";
import emailSupport1Icon from "../../assets/svg/contact/email_support1.svg";
import emailSupport2Icon from "../../assets/svg/contact/email_support2.svg";
import phoneSupport2Icon from "../../assets/svg/contact/phone_support2.svg";
import arrowRightIcon from "../../assets/svg/arrow_right.svg";
import {useCallback} from "react";
import {Button} from "@nextui-org/react";

function SupportComponent() {

    const openChat = useCallback(() => {
        $crisp.push(['do', 'chat:open']);
    }, []);

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
                        <div className={"relative group mb-4"}>
                            <img src={liveChat1Icon} alt={"liveChat"}
                                 className={"group-hover:-rotate-6 transition-all"}/>
                            <img src={liveChat2Icon} alt={"liveChat"}
                                 className={"group-hover:rotate-6 transition-all absolute -bottom-4 -right-1/2 -translate-x-[10%]"}/>
                        </div>
                        <h3 className={"roboto text-4xl font-semibold"}>Live Chat</h3>
                        <p className={"font-plusJakartaSans text500 text-base"}>We provide 24/7 chat support accessible
                            via the website and app for real-time assistance with account issues, foreign exchange
                            services, and card-related inquiries.</p>
                        <Button onClick={openChat} className={"bg-[#394375] border-none px-[14px] py-2 rounded-lg"}>
                            <div className={"flex items-center justify-center gap-2"}>
                                <p className={"!roboto !font-semibold text-sm text-white"}>Visit the in-app chat</p>
                                <img src={arrowRightIcon} alt={"arrowRightIcon"}/>
                            </div>
                        </Button>
                    </div>
                    <img src={contact3Image} alt={"about1"} className={"mt-5 w-[520px] "}/>
                </div>
                <div
                    className={"flex items-center justify-center lg:gap-[118px] md:gap-[56px] gap-[40px] flex-col md:flex-row"}>
                    <img src={contact4Image} alt={"about1"} className={"w-[520px] "}/>
                    <div className={"max-w-[520px] flex items-start justify-center gap-4 flex-col "}>
                        <div className={"relative group mb-4"}>
                            <img src={emailSupport1Icon} alt={"email support"}
                                 className={"group-hover:-rotate-6 transition-all"}/>
                            <img src={emailSupport2Icon} alt={"email support"}
                                 className={"group-hover:rotate-6 transition-all absolute -bottom-4 -right-1/2 -translate-x-[10%]"}/>
                        </div>
                        <h3 className={"roboto text-4xl font-semibold"}>Email Support</h3>
                        <p className={"font-plusJakartaSans text500 text-base"}> offer <a
                            href="mailto:info@keyfx.co.uk"><u>info@keyfx.co.uk</u></a> with a
                            quick response time for general questions, document submissions, and feedback.</p>
                    </div>
                </div>
                <div
                    className={"flex items-center justify-center lg:gap-[118px] md:gap-[56px] gap-[40px] flex-col md:flex-row"}>
                    <div className={"max-w-[520px] flex items-start justify-center gap-4 flex-col "}>
                        <div className={"relative group mb-4"}>
                            <img src={emailSupport1Icon} alt={"phone support"}
                                 className={"group-hover:-rotate-6 transition-all"}/>
                            <img src={phoneSupport2Icon} alt={"phone support"}
                                 className={"group-hover:rotate-6 transition-all absolute -bottom-4 -right-1/2 -translate-x-[10%]"}/>
                        </div>
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