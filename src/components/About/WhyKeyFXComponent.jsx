import about3Image from "../../assets/images/about3_image.png";
import {Button} from "react-bootstrap";


function WhyKeyFxComponent() {
    return (
        <div
            className={"relative z-10 w-full md:min-h-[466px] min-h-[621px] bg-[#2C3667] text-center flex items-center justify-center flex-col md:mb-[calc(118px+30px)] mb-[calc(218px+30px)]"}>
            <img src={about3Image} alt={"about3"} className={"absolute -z-10 h-full object-cover"}/>
            <h2 className={"roboto font-semibold text-[44px] text-transparent bg-clip-text bg-gradient-to-r from-[#00D2D3] to-[#3593FF]"}>Why
                KEYFX?</h2>
            <p className={"text-[#D5DAEF] font-plusJakartaSans text-lg md:w-[658px]"}>Because we believe in better
                banking for a global economy. Join us today and start saving on every transaction while enjoying a
                seamless banking experience designed for your business.</p>
            <div
                className={"absolute bottom-0 translate-y-1/2 z-10 bg-white w-[80%] flex items-center justify-center lg:gap-12 gap-10 lg:flex-row flex-col lg:px-20 md:px-8 px-6 lg:py-6 md:py-12 py-8 rounded-2xl shadow-[inset_0px_-2px_10px_0px_#3e6f9f40,0px_30px_50px_-30px_#4a4a4a1a,0px_30px_70px_-20px_#32325d26]"}>
                <div className={"lg:w-[497px] w-fit lg:!text-start text-center"}>
                    <p className={"roboto font-semibold text-[20px] text800"}><span
                        className={"text-transparent bg-clip-text bg-linear3"}>Need Help Before Signing Up?</span> Get
                        Your Dedicated Account Manager Today!</p>
                    <p className={"text400 font-plusJakartaSans "}>Not ready to sign up just yet? No problem. Our
                        account managers are here to provide the support and assurance you need.</p>
                </div>
                <div className={"w-full flex flex-col items-stretch justify-stretch gap-4"}>
                    <div className={"lg:w-[445px] w-full bg-[#D5DAEF] bg-opacity-40 rounded-lg flex items-stretch justify-between"}>
                        <input placeholder={"Enter your email"} className={"font-plusJakartaSans !bg-transparent px-6 py-3"}/>
                        <Button className={"roboto font-semibold text-[20px] bg-[#394375] border-none md:block hidden"}>SUBSCRIBE</Button>
                    </div>
                    <Button className={"roboto font-semibold text-[20px] bg-[#394375] border-none md:hidden block"}>SUBSCRIBE</Button>
                </div>
            </div>

            <div className={"w-[110vw] h-[118px] absolute bottom-0 translate-y-1/2 -rotate-2"}
                 style={{background: "linear-gradient(to right,#EEC840 3%,#00D2D3 27%,#0076FF 56%,#00D2D3 85%,#EEC840 100%)"}}/>
        </div>
    );
}

export default WhyKeyFxComponent;