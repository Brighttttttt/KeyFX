import about3Image from "../../assets/images/about3_image.png";
import SubscribeComponent from "../ContactUs/SubscribeComponent";

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
                className={"w-full absolute bottom-0 translate-y-1/2 z-10"}>
                <SubscribeComponent withoutBlur={true}/>
            </div>
            <div className={"w-[110vw] h-[118px] absolute bottom-0 translate-y-1/2 -rotate-2"}
                 style={{background: "linear-gradient(to right,#EEC840 3%,#00D2D3 27%,#0076FF 56%,#00D2D3 85%,#EEC840 100%)"}}/>
        </div>
    );
}

export default WhyKeyFxComponent;