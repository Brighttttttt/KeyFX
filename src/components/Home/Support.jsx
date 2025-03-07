import React, {useEffect, useRef, useState} from 'react';
import TransactionsImg from './cards/TransactionsImg';
import Payto from './cards/Payto';
import Lisence from './cards/Lisence';
import Veri from './cards/Veri';
import {useMediaQuery} from "../../hooks/useMediaQuery";
import {dimensions} from "../../core/values/dimensions";

const Support = () => {
    const [isInView, setIsInView] = useState(false);
    const [isInView1, setIsInView1] = useState(false);
    const [isInView2, setIsInView2] = useState(false);
    const [isInView3, setIsInView3] = useState(false);
    const targetRef = useRef(null);
    const targetRef1 = useRef(null);
    const targetRef2 = useRef(null);
    const targetRef3 = useRef(null);
    const isBreakPoint = useMediaQuery(dimensions.sm);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: `-70px 0px ${isBreakPoint ? '-90px' : '-200px'} 0px`,
            threshold: 0,
        };
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            });
        };
        const observerCallback1 = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsInView1(true);
                } else {
                    setIsInView1(false);
                }
            });
        };
        const observerCallback2 = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsInView2(true);
                } else {
                    setIsInView2(false);
                }
            });
        };
        const observerCallback3 = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsInView3(true);
                } else {
                    setIsInView3(false);
                }
            });
        };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const observer1 = new IntersectionObserver(observerCallback1, observerOptions);
        const observer2 = new IntersectionObserver(observerCallback2, observerOptions);
        const observer3 = new IntersectionObserver(observerCallback3, observerOptions);
        if (targetRef.current) {
            observer.observe(targetRef.current);
        }
        if (targetRef1.current) {
            observer1.observe(targetRef1.current);
        }
        if (targetRef2.current) {
            observer2.observe(targetRef2.current);
        }
        if (targetRef3.current) {
            observer3.observe(targetRef3.current);
        }
        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
            if (targetRef1.current) {
                observer1.unobserve(targetRef1.current);
            }
            if (targetRef2.current) {
                observer2.unobserve(targetRef2.current);
            }
            if (targetRef3.current) {
                observer3.unobserve(targetRef3.current);
            }
        };
    }, [isBreakPoint]);

    return (
        <div className={"w-full overflow-visible"}>
            <div className='support-card overflow-visible'>
                <div className='text-center '>
                    <p className='small text300'>S u p p o r t</p>
                    <p className='mt-3 roboto text700 font-semibold text-[44px]'>We are here to help you</p>
                    <p className=' roboto text-4xl fw600 text-grad '>24/7, every day of the week.</p>
                    <p className='text-lg text500'>Chat to us in app any time, or call or email if you'd prefer,<br />We'll answer your questions and help solve any problems you have,<br />No need for branches, and no need to make an appointment</p>
                </div>
            </div>
            <div className='py-32 mainPage2 bg-hit-bg justify-items-center overflow-visible'>
                <div className={"max-w-max-width-main overflow-visible"}>
                    <div className='text-center overflow-visible'>
                        <p className='small text400'>L e a r n&ensp;M o r e </p>
                        <p className='mt-3 roboto text800 font-semibold text-[44px]'>How it works</p>
                    </div>
                    <div className={`lg:px-0 sm:px-10 sm:mt-32 px-0 mt-10 overflow-visible`}>
                        <div className='grid lg:grid-cols-2 grid-cols-1 overflow-visible'>
                            <div className='lg:order-1 order-2 '>
                                <button ref={targetRef}
                                        className={`${isInView ? 'step1' : 'step2 roboto'} rounded-full py-2 px-4`}>Step
                                    1
                                </button>
                                <p className='my-3 roboto text-4xl font-semibold textPeacoat'>Sign up online</p>
                                <p className='f16 MidnightHaze font-plusJakartaSans'>To sign up online at KeyFX, simply navigate to the
                                    registration page. There, you will need to fill in the required information such as
                                    your name, email, and password. After completing the form, click the "Sign Up"
                                    button. </p>
                            </div>
                            <div className='overflow-visible lg:order-2 order-1 flex lg:justify-start justify-center '>
                                <div className="overflow-visible mx-auto">
                                    <Lisence isMobile={isBreakPoint}/>
                                </div>
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-5 mt-28'>
                            <div className='lg:order-1 order-2'>
                                <button ref={targetRef1}
                                        className={`${isInView1 ? 'step1' : 'step2 roboto'} rounded-full py-2 px-4`}>Step
                                    2
                                </button>
                                <p className='my-3 roboto text-4xl fw600 textPeacoat'>Get verified immediately</p>
                                <p className='f16 MidnightHaze'>To get verified immediately on KeyFX, log in to your
                                    account, navigate to the verification section, and upload the required documents
                                    (such as your ID and proof of address). </p>
                            </div>
                            <div className='lg:order-2 order-1 flex lg:justify-start justify-center'>
                                <div className='mx-auto my-3'>
                                    <Veri isMobile={isBreakPoint}/>
                                </div>
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-5 mt-32'>
                            <div className='lg:order-1 order-2'>
                                <button ref={targetRef2}
                                        className={`${isInView2 ? 'step1' : 'step2 roboto'} rounded-full py-2 px-4`}>Step
                                    3
                                </button>
                                <p className='my-3 roboto text-4xl fw600 textPeacoat'>Easily fund your account</p>
                                <p className='f16 MidnightHaze'>To easily fund your account on KeyFX, log in, go to the
                                    "Deposit" section, select your preferred payment method, enter the deposit amount,
                                    and provide the necessary payment details. </p>
                            </div>
                            <div className='lg:order-2 order-1 flex lg:justify-start justify-center'>
                                <div className='mx-auto pb-5'>
                                    <Payto isMobile={isBreakPoint}/>
                                </div>
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-5 mt-36 '>
                            <div className='lg:order-1 order-2'>
                                <button ref={targetRef3}
                                        className={`${isInView3 ? 'step1' : 'step2 roboto'} rounded-full py-2 px-4`}>Step
                                    4
                                </button>
                                <p className='my-3 roboto text-4xl fw600 textPeacoat'>Start making transactions</p>
                                <ul className={`aqua-list ${!isInView3 ? 'blackLi' : ''} mt-3`}>
                                    <li>Choose Transaction Type</li>
                                    <li>Select Assets you want to transact with.</li>
                                    <li>Enter Amount for the transaction.</li>
                                    <li>Review and Confirm the transaction.</li>
                                    <li>Check your transaction history to monitor your activities.</li>
                                </ul>
                            </div>
                            <div className='lg:order-2 order-1 flex lg:justify-start justify-center'>
                                <div className='mx-auto my-3'>
                                    <TransactionsImg isMobile={isBreakPoint}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;