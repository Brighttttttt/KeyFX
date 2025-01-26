import BarChart from "./cards/barChart";
import exchange1 from "../../assets/svg/home/exchange1.svg";
import exchange2 from "../../assets/svg/home/exchange2.svg";
import ServiceButtonComponent from "./ServiceButtonComponent";
import React from "react";
import blueTickIcon from "../../assets/svg/home/listIconAqua.svg"

function ForeignExchangeServiceComponent() {

    const items = [
        "Convert 33+ currencies at unbeatable rates",
        "Make zero-fee international transfers",
        "Lock-in your favorable exchange rate"
    ];

    return (
        <div className={`grid lg:grid-cols-2 grid-cols-1 gap-24 mt-36`}>
            <BarChart/>
            <div className={"flex flex-col gap-6"}>
                <div className='icon-rotate mb-2'>
                    <img className='icon-rotate1' alt="exchange1" src={exchange1}/>
                    <img className='icon-rotate2' alt="exchange2" src={exchange2}/>
                </div>
                <p className='roboto font-semibold text700 text-3xl'>Foreign Exchange Services</p>
                <ul className={`flex flex-col gap-6`}>
                    {items.map((item, index) => (
                        <div key={index} className={"flex items-center justify-start gap-2"}>
                            <img src={blueTickIcon} alt={"tick"}/>
                            <li
                                className={"font-plusJakartaSans font-semibold text-base text-[#2C3667]"}>{item}</li>
                        </div>
                    ))}
                </ul>
                <p className='text500 text-base'>Navigate global markets with confidence.
                    KeyFX offers <br/>comprehensive foreign currency services, allowing you to
                    effortlessly <br/>manage international transactions and mitigate exchange rate risks.</p>
                <ServiceButtonComponent
                    link={'https://keyfx.co.uk/blog/mastering-foreign-exchange-services-with-keyfx/'}/>
            </div>
        </div>
    );
}

export default ForeignExchangeServiceComponent;