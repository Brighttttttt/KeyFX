import contact6Image from "../../assets/images/contact6_image.png";
import {Button} from "@nextui-org/react";

function SubscribeComponent({withoutBlur}) {
    return (
        <div
            className={"relative z-10 w-full text-center flex items-center justify-center flex-col my-10 px-4"}>
            {
                !withoutBlur &&
                <img src={contact6Image} alt="Contact Us" className={"absolute bottom-1/2 -z-10 h-[617px]"}/>
            }
            <div
                className={"z-10 bg-white lg:w-[80%] w-full max-w-[1160px] flex items-center justify-center lg:gap-12 gap-10 md:flex-row flex-col lg:px-20 md:px-8 px-6 lg:py-6 md:py-12 py-8 rounded-2xl shadow-[inset_0px_-2px_10px_0px_#3e6f9f40,0px_30px_50px_-30px_#4a4a4a1a,0px_30px_70px_-20px_#32325d26]"}>
                <div className={"lg:!text-start text-center"}>
                    <p className={"roboto font-semibold text-[20px] text800"}><span
                        className={"text-transparent bg-clip-text bg-linear3"}>Need Help Before Signing Up?</span> Get
                        Your Dedicated Account Manager Today!</p>
                    <p className={"text400 font-plusJakartaSans "}>Not ready to sign up just yet? No problem. Our
                        account managers are here to provide the support and assurance you need.</p>
                </div>
                <div className={"w-full flex flex-col items-stretch justify-stretch gap-4"}>
                    <div
                        className={"lg:w-[445px] w-full bg-[#D5DAEF] bg-opacity-40 rounded-lg flex items-center justify-between"}>
                        <input placeholder={"Enter your email"}
                               className={"font-plusJakartaSans !bg-transparent px-6 py-3 flex-grow"}/>
                        <Button
                            className={"roboto font-semibold text-[20px] text-white !bg-[#394375] border-none rounded-lg md:block hidden"}
                            size={"lg"}>SUBSCRIBE</Button>
                    </div>
                    <Button
                        className={"roboto font-semibold text-[20px] text-white !bg-[#394375] border-none rounded-lg md:hidden block"}
                        size={"lg"}>SUBSCRIBE</Button>
                </div>
            </div>
            <div
                className="w-[110vw] h-[118px] absolute bottom-1/2 translate-y-1/2 -rotate-3 animate-gradient-move"
                style={{
                    background: `linear-gradient(to right, #EEC840 0%, #00D2D3 25%, #0076FF 50%, #00D2D3 75%, #EEC840 100%)`,
                    backgroundSize: "200% 100%",
                }}
            />
        </div>
    );
}

export default SubscribeComponent;