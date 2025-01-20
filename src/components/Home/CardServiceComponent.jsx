import card1 from "../../assets/svg/home/card1.svg";
import card2 from "../../assets/svg/home/card2.svg";
import ServiceButtonComponent from "./ServiceButtonComponent";
import card3 from "../../assets/svg/home/card3.svg";
import card4 from "../../assets/svg/home/card4.svg";
import ATMCard from "../../assets/svg/home/ATMCard.png";
import React from "react";
import blueTickIcon from "../../assets/svg/home/listIconAqua.svg"

function CardServiceComponent() {

    const items = [
        "Get debit Mastercard",
        "Virtual and physical cards available",
        "Real-time bank-beating conversion rates"
    ];

    return (
        <div className={`grid lg:grid-cols-2 grid-cols-1 gap-24 sm:mt-36 mt-0`}>
            <div className='lg:order-1 order-2 flex flex-col gap-4'>
                <div className='icon-rotate mb-3'>
                    <img className='icon-rotate1' alt="card1" src={card1}/>
                    <img className='icon-rotate2' alt="card2" src={card2}/>
                </div>
                <p className='roboto font-semibold text700 text-3xl'>Card Services</p>
                <ul className={`flex flex-col gap-4`}>
                    {items.map((item, index) => (
                        <div key={index} className={"flex items-center justify-start gap-2"}>
                            <img src={blueTickIcon} alt={"tick"}/>
                            <li key={index}
                                className={"font-plusJakartaSans font-semibold text-base text-[#2C3667]"}>{item}</li>
                        </div>
                    ))}
                </ul>
                <p className='text500'>Experience the convenience of secure
                    spending wherever your <br/>business takes you. Whether it's virtual cards for online
                    transactions <br/>or physical cards for in-person purchases, KeyFX delivers the <br/>flexibility
                    and security you deserve, all at no cost to you.</p>
                <ServiceButtonComponent
                    link={'https://keyfx.co.uk/blog/card-services-with-keyfx-flexibility-and-security-at-your-fingertips/'}/>
            </div>
            <div className={`lg:order-2 order-1 flex justify-center items-end sm:mt-0 mt-5`}>
                <div className='relative'>
                    <div className='relative'>
                        <div
                            className="virtualCard v-card sm:w-72 w-60 flex flex-col items-center justify-center rounded-3xl">
                            <div className='icon-rotate'>
                                <img className='icon-rotate1' alt="card3" src={card3}/>
                                <img className='icon-rotate2' alt="card4" src={card4}/>
                            </div>
                            <p className='mt-4 card-head-blue'>Virtual card</p>
                            <p className='text-xs text-gray-500 mt-2'>
                                secure, temporary, no real details required
                            </p>
                            <div className='gray-card mt-3 flex gap-2'>
                                <svg width="63" className='sm:w-14 w-8' height="47" viewBox="0 0 63 47"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg" aria-label={"svg"}>
                                    <rect x="0.5" y="0.5" width="62" height="46" rx="9.5" fill="#FFC8E2"
                                          stroke="#FF9ECC"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M30.4964 31.1099C28.6791 32.6417 26.3218 33.5664 23.7459 33.5664C17.9983 33.5664 13.3389 28.9625 13.3389 23.2832C13.3389 17.6039 17.9983 13 23.7459 13C26.3219 13 28.6792 13.9247 30.4965 15.4566C32.3138 13.9248 34.6711 13.0001 37.247 13.0001C42.9946 13.0001 47.654 17.6041 47.654 23.2833C47.654 28.9626 42.9946 33.5665 37.247 33.5665C34.671 33.5665 32.3137 32.6418 30.4964 31.1099Z"
                                          fill="#ED0006"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M30.4964 31.11C32.734 29.2239 34.1529 26.4173 34.1529 23.2833C34.1529 20.1493 32.734 17.3428 30.4964 15.4567C32.3137 13.9248 34.671 13.0001 37.2469 13.0001C42.9946 13.0001 47.654 17.6041 47.654 23.2833C47.654 28.9626 42.9946 33.5665 37.2469 33.5665C34.671 33.5665 32.3137 32.6418 30.4964 31.11Z"
                                          fill="#F9A000"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M30.4965 31.1096C32.7341 29.2235 34.1529 26.417 34.1529 23.283C34.1529 20.149 32.7341 17.3425 30.4965 15.4563C28.2588 17.3425 26.84 20.149 26.84 23.283C26.84 26.417 28.2588 29.2235 30.4965 31.1096Z"
                                          fill="#FF5E00"/>
                                </svg>

                                <div>
                                    <p className='card-head-blue text-xxs'>Global Ventures Ltd.</p>
                                    <p className='text-3xs card-gray-text'>David Leo</p>
                                </div>

                            </div>
                            <div className='gray-card flex gap-2 mt-2'>
                                <svg className='sm:w-14 w-8' width="63" height="47" viewBox="0 0 63 47"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg" aria-label={"svg"}>
                                    <rect x="0.5" y="0.5" width="62" height="46" rx="9.5" fill="#2C3667"
                                          stroke="#00D2D3"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M30.4964 31.1099C28.6791 32.6417 26.3218 33.5664 23.7459 33.5664C17.9983 33.5664 13.3389 28.9625 13.3389 23.2832C13.3389 17.6039 17.9983 13 23.7459 13C26.3219 13 28.6792 13.9247 30.4965 15.4566C32.3138 13.9248 34.6711 13.0001 37.247 13.0001C42.9946 13.0001 47.654 17.6041 47.654 23.2833C47.654 28.9626 42.9946 33.5665 37.247 33.5665C34.671 33.5665 32.3137 32.6418 30.4964 31.1099Z"
                                          fill="#ED0006"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M30.4961 31.1099C32.7337 29.2237 34.1526 26.4172 34.1526 23.2832C34.1526 20.1492 32.7337 17.3427 30.4961 15.4565C32.3134 13.9247 34.6707 13 37.2466 13C42.9943 13 47.6537 17.6039 47.6537 23.2832C47.6537 28.9625 42.9943 33.5664 37.2466 33.5664C34.6707 33.5664 32.3134 32.6417 30.4961 31.1099Z"
                                          fill="#F9A000"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M30.4963 31.1096C32.7339 29.2235 34.1528 26.4169 34.1528 23.2829C34.1528 20.149 32.7339 17.3424 30.4963 15.4563C28.2587 17.3424 26.8398 20.149 26.8398 23.2829C26.8398 26.4169 28.2587 29.2235 30.4963 31.1096Z"
                                          fill="#FF5E00"/>
                                </svg>
                                <div>
                                    <p className='card-head-blue text-xxs'>Global Ventures Ltd.</p>
                                    <p className='text-3xs card-gray-text'>David Leo</p>
                                </div>

                            </div>
                            <div className='mt-3' style={{border: '0.5px solid #D5DAEF', width: '113%'}}></div>
                            <div className='experience-card flex items-center font-8 roboto py-2 mt-3'>
                                <svg className='w-24' width="27" height="30" viewBox="0 0 27 30" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M1.04256 4.59171C0.486328 5.38422 0.486328 7.7399 0.486328 12.4513V14.7715C0.486328 23.0787 6.73207 27.11 10.6508 28.8218C11.7138 29.2862 12.2453 29.5183 13.7471 29.5183C15.2488 29.5183 15.7803 29.2862 16.8433 28.8218C20.762 27.11 27.0078 23.0787 27.0078 14.7715V12.4513C27.0078 7.7399 27.0078 5.38422 26.4515 4.59171C25.8953 3.79921 23.6803 3.04102 19.2504 1.52463L18.4064 1.23573C16.0972 0.445276 14.9426 0.0500488 13.7471 0.0500488C12.5515 0.0500488 11.3969 0.445276 9.08771 1.23573L8.24372 1.52463C3.81377 3.04102 1.5988 3.79921 1.04256 4.59171ZM18.2549 12.5733C18.6614 12.1181 18.6218 11.4195 18.1666 11.0131C17.7113 10.6066 17.0128 10.6461 16.6063 11.1014L12.1684 16.0718L10.8878 14.6376C10.4813 14.1823 9.78278 14.1428 9.32753 14.5492C8.87228 14.9557 8.83274 15.6543 9.23921 16.1095L11.3441 18.467C11.5537 18.7018 11.8536 18.8361 12.1684 18.8361C12.4832 18.8361 12.783 18.7018 12.9927 18.467L18.2549 12.5733Z"
                                          fill="#00D2D3"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M20.0864 9.895C20.6707 10.4474 20.6707 11.343 20.0864 11.8954L13.1047 18.4963C12.5205 19.0487 11.5732 19.0487 10.9889 18.4963L7.99679 15.6673C7.41253 15.1149 7.41253 14.2193 7.99679 13.6669C8.58104 13.1146 9.52831 13.1146 10.1126 13.6669L12.0468 15.4957L17.9707 9.895C18.5549 9.34262 19.5022 9.34262 20.0864 9.895Z"
                                          fill="white"/>
                                </svg>
                                <p className='text900'>Experience the convenience of secure spending wherever
                                    your business takes you.</p>
                            </div>
                            <a className='btn-dblue text-center text-white w-full py-2 my-3'>
                                Continue
                            </a>

                        </div>
                        <div
                            className='v-card p-2 flex items-center absolute sm:top-20 top-8 -right-32 sm:-right-40 rounded-lg'>
                            <svg className='sm:w-14 w-8' width="27" height="30" viewBox="0 0 27 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M1.04256 4.59171C0.486328 5.38422 0.486328 7.7399 0.486328 12.4513V14.7715C0.486328 23.0787 6.73207 27.11 10.6508 28.8218C11.7138 29.2862 12.2453 29.5183 13.7471 29.5183C15.2488 29.5183 15.7803 29.2862 16.8433 28.8218C20.762 27.11 27.0078 23.0787 27.0078 14.7715V12.4513C27.0078 7.7399 27.0078 5.38422 26.4515 4.59171C25.8953 3.79921 23.6803 3.04102 19.2504 1.52463L18.4064 1.23573C16.0972 0.445276 14.9426 0.0500488 13.7471 0.0500488C12.5515 0.0500488 11.3969 0.445276 9.08771 1.23573L8.24372 1.52463C3.81377 3.04102 1.5988 3.79921 1.04256 4.59171ZM18.2549 12.5733C18.6614 12.1181 18.6218 11.4195 18.1666 11.0131C17.7113 10.6066 17.0128 10.6461 16.6063 11.1014L12.1684 16.0718L10.8878 14.6376C10.4813 14.1823 9.78278 14.1428 9.32753 14.5492C8.87228 14.9557 8.83274 15.6543 9.23921 16.1095L11.3441 18.467C11.5537 18.7018 11.8536 18.8361 12.1684 18.8361C12.4832 18.8361 12.783 18.7018 12.9927 18.467L18.2549 12.5733Z"
                                      fill="#00D2D3"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M20.0864 9.895C20.6707 10.4474 20.6707 11.343 20.0864 11.8954L13.1047 18.4963C12.5205 19.0487 11.5732 19.0487 10.9889 18.4963L7.99679 15.6673C7.41253 15.1149 7.41253 14.2193 7.99679 13.6669C8.58104 13.1146 9.52831 13.1146 10.1126 13.6669L12.0468 15.4957L17.9707 9.895C18.5549 9.34262 19.5022 9.34262 20.0864 9.895Z"
                                      fill="white"/>
                            </svg>
                            <p className='card-head-blue'>Physical card</p>

                        </div>
                    </div>
                </div>
                <div className='relative foil-image ATMCard-wrapper'>
                    <img src={ATMCard} alt="ATMCard" className='ATMCard'/>
                </div>
            </div>
        </div>
    );
}

export default CardServiceComponent;