import payment1 from "../../assets/svg/home/payment1.svg";
import payment2 from "../../assets/svg/home/payment2.svg";
import ServiceButtonComponent from "./ServiceButtonComponent";
import ConvertCurrenciesServiceComponent from "./ConvertCurrenciesServiceComponent";
import blueTickIcon from "../../assets/svg/home/listIconAqua.svg";

function PaymentServiceComponent() {

    const items = [
        "Open a multi-currency account",
        "Collect and make payments internationally",
        "Convert currencies at real-time rates on our website"
    ];

    return (
        <div className={`grid lg:grid-cols-2 grid-cols-1 gap-24 sm:mt-36 mt-10`}>
            <div className='lg:order-1 order-2 flex flex-col gap-6'>
                <div className='icon-rotate mb-3'>
                    <img className='icon-rotate1' alt="payment1" src={payment1}/>
                    <img className='icon-rotate2' alt="payment2" src={payment2}/>
                </div>
                <p className='roboto font-semibold text700 text-3xl'>Payment Services</p>
                <ul className={`flex flex-col gap-6`}>
                    {items.map((item, index) => (
                        <div key={index} className={"flex items-center justify-start gap-2"}>
                            <img src={blueTickIcon} alt={"tick"}/>
                            <li key={index}
                                className={"font-plusJakartaSans font-semibold text-base text-[#2C3667]"}>{item}</li>
                        </div>
                    ))}
                </ul>
                <p className='text500 font-plusJakartaSans'>Streamline your cross-border transactions
                    on one platform. Enjoy <br/>bank-beating conversion rates and zero-fee transfers.Experience <br/>seamless
                    and secure international payments.</p>
                <ServiceButtonComponent link={'https://keyfx.co.uk/blog/payment-services-keyfx/'}/>
            </div>
            <div className={`lg:order-2 order-1 flex sm:justify-center justify-start sm:px-0 px-3`}>
                <ConvertCurrenciesServiceComponent/>
            </div>
        </div>
    );
}

export default PaymentServiceComponent;