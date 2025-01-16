import React, {useState} from 'react';
import './css/localbusinesscard.css';
import business3 from '../../../assets/svg/home/business3.svg';
import business4 from '../../../assets/svg/home/business4.svg';
import middleLogo from '../../../assets/svg/home/middleLogo.svg';
import flow from '../../../assets/svg/home/flow.svg';
import gbp from '../../../assets/svg/flags/united kingdom.svg';
import usd from '../../../assets/svg/flags/united states.svg';
import eur from '../../../assets/svg/flags/eur.svg';

const LocalBusinessCard = () => {
    const [isHovered, setIsHovered] = useState(true);

    setTimeout(() => {
        setIsHovered(!isHovered);
    }, 2500);

    return (
        <>
            <div className="tree">
                <ul className='cstomUl'>
                    <li
                        className={`parent pt-4 flex justify-center flex-col items-center ${isHovered ? 'custom-hover-class' : ''}`}
                    >
                        <div className="background-shadow"></div>
                        <a className='child1 flex justify-center flex-col items-center gap-3'>
                            <div className='icon-rotate flex justify-center'>
                                <img className='icon-rotate1' alt="business3" src={business3}/>
                                <img className='icon-rotate2new' alt="business4" src={business4}/>
                            </div>
                            <p className='font-bold roboto text700 w-3/4' style={{fontSize: "16px"}}>Local Business Bank
                                Accounts</p>
                            <div className='relative w-28 h-8'>
                                <div className='flex justify-center mx-auto w-28 h-8'>
                                    <img className='icon-rotate1 absolute -bottom-12 z-20 mt-2' alt="middleLogo"
                                         src={middleLogo}/>
                                </div>
                            </div>
                        </a>
                        <ul className='relative'>
                            <div className="flowLine"></div>
                            <img src={flow} alt="flow" className="flow"/>
                            <div className="flow">
                                <svg width="271" height="194" viewBox="0 0 271 194" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="flowing-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" id="grad1"/>
                                            <stop offset="25%" id="grad2"/>
                                            <stop offset="50%" id="grad3"/>
                                            <stop offset="75%" id="grad2"/>
                                            <stop offset="100%" id="grad1"/>
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M138 0L138 29.5C138 40.5457 146.954 49.5 158 49.5L253.5 49.5C262.337 49.5 269.5 56.6634 269.5 65.5L269.5 94"
                                        stroke="url(#flowing-gradient)" strokeWidth="3" className="flowing-gradient"/>
                                    <path d="M136 31V194" stroke="url(#flowing-gradient)" strokeWidth="3"
                                          className="flowing-gradient"/>
                                    <path
                                        d="M133.5 3L133.5 29.5C133.5 40.5457 124.546 49.5 113.5 49.5L18 49.5C9.16344 49.5 2 56.6634 2 65.5L2 91.5"
                                        stroke="url(#flowing-gradient)" strokeWidth="3" className="flowing-gradient"/>
                                </svg>
                            </div>
                            <li className=''>
                                <a className='child2 flex items-center'>
                                    <input className={`check-lcb ${isHovered ? 'custom-checkbox' : ''}`}
                                           checked={isHovered}
                                           type='checkbox'/>
                                    <p className='font-bold curr-text br-gray'>$ 4 3 . 0 0</p>
                                    <div className='flex items-center badge'>
                                        <img className='w-4 h-4 rounded-full' alt='usd' src={usd}/>
                                        <p className='pl-1'>USD</p>
                                    </div>
                                </a>
                            </li>
                            <li className='middle-child z-10'>
                                <a className='child2 flex items-center'>
                                    <input className={`check-lcb ${isHovered ? 'custom-checkbox' : ''}`}
                                           checked={isHovered}
                                           type='checkbox'/>
                                    <p className='font-bold curr-text br-gray'>€ 2 4 . 3 0</p>
                                    <div className='flex items-center badge'>
                                        <img className='w-4 h-4 rounded-full' alt='eur' src={eur}/>
                                        <p className='pl-1'>EUR</p>
                                    </div>
                                </a>

                            </li>
                            <li>
                                <a className='child2 flex items-center'>
                                    <input className={`check-lcb ${isHovered ? 'custom-checkbox' : ''}`}
                                           checked={isHovered}
                                           type='checkbox'/>
                                    <p className='font-bold curr-text br-gray'>£ 8 1 . 7 2</p>
                                    <div className='flex items-center badge'>
                                        <img className='w-4 h-4 rounded-full' alt='gbp' src={gbp}/>
                                        <p className='pl-1'>GBP</p>
                                    </div>
                                </a>

                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default LocalBusinessCard;