import React from 'react';
import TransactionsImg from './cards/TransactionsImg';
import Payto from './cards/Payto';
import Lisence from './cards/Lisence';
import Veri from './cards/Veri';

const Support = ({ isMobile }) => {
    return (
        <div>
            <div className='support-card'>
                <div className='text-center '>
                    <p className='small text300'>S u p p o r t</p>
                    <p className='mt-3 roboto text700 fw600' style={{fontSize: '44px'}}>We are here to help you</p>
                    <p className=' roboto text-4xl fw600 text-grad '>24/7, every day of the week.</p>
                    <p className='text-lg text500'>Chat to us in app any time, or call or email if you'd prefer,<br />We'll answer your questions and help solve any problems you have,<br />No need for branches, and no need to make an appointment</p>
                </div>
            </div>
            <div className='py-32 mainPage2 hit-bg'>
                <div className='text-center '>
                    <p className='small text400'>L e a r n&ensp;M o r e </p>
                    <p className='mt-3 roboto text800 fw600' style={{fontSize: '44px'}}>How it works</p>
                </div>
                <div className={`lg:px-0 sm:px-24   ${isMobile ? " px-0 mt-10" : " px-10 mt-32"}`}>
                    <div className='grid lg:grid-cols-2 grid-cols-1'>
                        <div className='lg:order-1 order-2 '>
                            <button className='step1 rounded-full py-2 px-4'>Step 1</button>
                            <p className='mt-3 roboto text-4xl fw600 textPeacoat'>Sign up online</p>
                            <p className='f16 MidnightHaze'>To sign up online at keyfx, simply navigate to the registration page. There, you will need to fill in the required information such as your name, email, and password. After completing the form, click the "Sign Up" button. </p>
                        </div>
                        <div className='lg:order-2 order-1 flex lg:justify-start justify-center'>
                            <div className="bloc mx-auto my-3">
                                <Lisence />
                            </div>
                            {/* <img alt='not available' src='/Sign up online.png' /> */}
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-5 mt-5'>
                        <div className='lg:order-1 order-2'>
                            <button className='step2 roboto rounded-full py-2 px-4'>Step 2</button>
                            <p className='mt-3 roboto text-4xl fw600 textPeacoat'>Get verified immediately</p>
                            <p className='f16 MidnightHaze'>To get verified immediately on keyfx, log in to your account, navigate to the verification section, and upload the required documents (such as your ID and proof of address). </p>
                        </div>
                        <div className='lg:order-2 order-1 flex lg:justify-start justify-center'>
                            {/* <img alt='not available' src='/Get verified instantly.png' /> */}
                            <div className='mx-auto my-3'>
                                <Veri />
                            </div>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-5 mt-5'>
                        <div className='lg:order-1 order-2'>
                            <button className='step2 roboto rounded-full py-2 px-4'>Step 3</button>
                            <p className='mt-3 roboto text-4xl fw600 textPeacoat'>Easily fund your account</p>
                            <p className='f16 MidnightHaze'>To easily fund your account on keyfx, log in, go to the "Deposit" section, select your preferred payment method, enter the deposit amount, and provide the necessary payment details. </p>
                        </div>
                        <div className='lg:order-2 order-1 flex lg:justify-start justify-center'>
                            <div className='mx-auto pb-5'>
                                <Payto />
                            </div>
                            {/* <img alt='not available' src='/Easily fund your account.png' /> */}
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-5 mt-5 '>
                        <div className='lg:order-1 order-2'>
                            <button className='step2 roboto rounded-full py-2 px-4'>Step 4</button>
                            <p className='mt-3 roboto text-4xl fw600 textPeacoat'>Start making transactions</p>
                            <ul className='blue-list blackLi mt-3'>
                                <li>Choose Transaction Type</li>
                                <li>Select Assets you want to transact with.</li>
                                <li>Enter Amount for the transaction.</li>
                                <li>Review and Confirm the transaction.</li>
                                <li>Check your transaction history to monitor your activities.</li>
                            </ul>
                        </div>
                        <div className='lg:order-2 order-1 flex lg:justify-start justify-center'>
                            <div className='mx-auto my-3'>
                                <TransactionsImg />
                            </div>
                            {/* <img alt='not available' src='/Start making transactions.svg' /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;