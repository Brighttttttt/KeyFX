import personalPlan from "../../assets/images/personal_plan.png";
import basicPlan from "../../assets/images/basic_plan.png";
import premiumPlan from "../../assets/images/premium_plan.png";
import doneSvg from "../../assets/svg/done.svg";
import {useState} from "react";
import pricingBlurImage from "../../assets/images/pricing_blur.png";

function PlansComponent() {

    const items = [
        {
            icon: personalPlan,
            name: "Personal Plan",
            values:
                {
                    "Account Opening Fee": "£0",
                    "Monthly Fee": "£0",
                    "Transaction Fee (Incoming)": "£0.15",
                    "Transaction Fee (Outgoing)": "£0.15",
                    "International Payment Rate": "%1.2",
                    "International Payment Fee": "£0",
                },
            extras: [
                "Limited to 30 Transactions",
                "Free Card"
            ]
        },
        {
            icon: basicPlan,
            name: "Basic Plan",
            values:
                {
                    "Account Opening Fee": "£0",
                    "Monthly Fee": "£0",
                    "Transaction Fee (Incoming)": "£0.15",
                    "Transaction Fee (Outgoing)": "£0.15",
                    "International Payment Rate": "%1.2",
                    "International Payment Fee": "£0",
                },
            extras: [
                "Limited to 30 Transactions",
                "Free Card for your team",
                "Dedicated Account Manager"
            ]
        },
        {
            icon: premiumPlan,
            name: "Premium Plan",
            values:
                {
                    "Account Opening Fee": "£199",
                    "Monthly Fee": "£9.99",
                    "Transaction Fee (Incoming)": "£0.25",
                    "Transaction Fee (Outgoing)": "£0.25",
                    "International Payment Rate": "%0.8",
                    "International Payment Fee": "£0",
                },
            extras: [
                "Unlimited Transactions",
                "24/7 Dedicated Account Manager",
                "Invoicing Tools",
                "Unlimited Virtual Cards",
                "Free first team card, £4.99 additional card",
            ]
        },
    ];
    const [selectedItem, setSelectedItem] = useState(0);

    return (
        <main className={"relative z-10 lg:px-[104px] px-8 lg:py-[64px] py-10"}>
            <img src={pricingBlurImage} alt="pricing blur" className={"h-[645px] w-full absolute -top-[10%] left-0 -z-10"}/>
            <div className={"flex lg:flex-row flex-col gap-2 items-stretch justify-center"}>
                {
                    // background: linear-gradient(166.28deg, #00B3FF 47.5%, #00D2D3 94.82%);
                    items.map((item, index) => {
                        return <div
                            key={index}
                            onMouseOver={() => setSelectedItem(index)}
                            className={`lg:w-[397px] w-full cursor-pointer ${selectedItem === index ? index === 0 ? "bg-gradient-to-b from-[#D8EAEA] from-[47.5%] to-[#789EA9] to-[94.82%]" : index === 1 ? "bg-gradient-to-b from-[#00B3FF] from-[47.5%] to-[#00D2D3] to-[94.82%]" : "bg-gradient-to-b from-[#00D2D3] from-[1%] to-[#00B3FF] to-[91%]" : ""} rounded-[48px] px-2 pb-2 pt-4`}>
                            <div
                                className={"bg-white w-full h-full flex flex-col items-stretch justify-stretch rounded-[40px] py-6 shadow-[inset_0px_-10px_36px_0px_#3e6f9f2e,0px_0px_10px_-30px_#4a4a4a1a,0px_0px_50px_-20px_#32325d26]"}>
                                <header className={"flex items-center justify-center lg:flex-col"}>
                                    <img src={item.icon} alt={item.icon} className={"md:w-[120px] w-[98px]"}/>
                                    <p className={'roboto font-semibold text-2xl my-3'}>{item.name}</p>
                                </header>
                                <main
                                    className={"lg:flex md:grid flex grid-cols-2 items-stretch justify-stretch flex-col lg:gap-2 gap-2 px-6 py-4"}>
                                    {
                                        Object.entries(item.values).map(([key, value]) => (
                                            <div className={"flex items-center justify-between"}>
                                                <p className={"roboto text-sm"}>{key}</p>
                                                <div className={"w-[74px] bg-[#596495] rounded-3xl text-center"}>
                                                    <p className={"text-white roboto font-semibold leading-7"}>{value}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </main>
                                <div className={"w-full h-[1px] bg-[#D5DAEF]"}/>
                                <footer
                                    className={"lg:flex md:grid flex grid-cols-2 items-stretch justify-stretch flex-col gap-4 px-4 py-4"}>
                                    {
                                        item.extras.map((item, index) => {
                                            return <div className={"flex items-center justify-start gap-2"}>
                                                <img src={doneSvg} alt={"done svg"}/>
                                                <p className={"roboto font-semibold"}>{item}</p>
                                            </div>
                                        })
                                    }
                                </footer>
                                <a href={`https://panel.keyfx.co.uk/register?s=${selectedItem}`} className={`mt-auto roboto font-medium text-lg text-center text-white bg-[#394375] rounded-xl py-6 md:mx-8 mx-6 z-50 ${selectedItem === index ? "visible" : "invisible"}`}>Choose</a>
                            </div>
                        </div>
                    })
                }
            </div>
        </main>
    );
}

export default PlansComponent;