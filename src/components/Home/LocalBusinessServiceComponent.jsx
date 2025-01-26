import business1 from "../../assets/svg/home/business1.svg";
import business2 from "../../assets/svg/home/business2.svg";
import ServiceButtonComponent from "./ServiceButtonComponent";
import LocalBusinessCard from "./cards/LocalBusiness";
import blueTickIcon from "../../assets/svg/home/listIconAqua.svg"

function LocalBusinessServiceComponent() {

    const items = [
        "GBP Account",
        "GBP Account",
        "USD Account",
    ]

    return (
        <div className={`grid lg:grid-cols-2 grid-cols-1 gap-20 sm:mt-36 mt-0`}>
            <div className='justify-center flex mb-5'>
                <LocalBusinessCard/>
            </div>
            <div className={"flex flex-col gap-6"}>
                <div className='icon-rotate mb-2'>
                    <img className='icon-rotate1' alt="business1" src={business1}/>
                    <img className='icon-rotate2' alt="business2" src={business2}/>
                </div>
                <p className='roboto font-semibold text700 text-3xl'>Local Business Bank Accounts</p>
                <ul className={`flex flex-row justify-between`}>
                    {items.map((item, index) => (
                        <div key={index} className={"flex items-center justify-start gap-2"}>
                            <img src={blueTickIcon} alt={"tick"}/>
                            <li key={index}
                                className={"font-plusJakartaSans font-semibold text-base text-[#2C3667]"}>{item}</li>
                        </div>
                    ))}
                </ul>
                <p className='text500'>Operate your business like a local on a
                    global scale
                    with GBP, EUR, <br/>and USD
                    accounts from KeyFX. Access dedicated accounts in key <br/>markets, enabling seamless
                    transactions and
                    eliminating the <br/>complexities of cross-border banking.</p>
                <ServiceButtonComponent
                    link={'https://keyfx.co.uk/blog/local-business-bank-accounts-with-keyfx-simplifying-global-operations/'}/>
            </div>
        </div>
    );
}

export default LocalBusinessServiceComponent;