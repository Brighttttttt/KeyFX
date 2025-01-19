import React from 'react';
import PaymentServiceComponent from "./PaymentServiceComponent";
import ForeignExchangeServiceComponent from "./ForeignExchangeServiceComponent";
import CardServiceComponent from "./CardServiceComponent";
import LocalBusinessServiceComponent from "./LocalBusinessServiceComponent";

const Services = () => {
    return (
        <div className='services mainPage2'>
            <div className='text-center'>
                <p className='small text300'></p>
                <p className={`roboto font-semibold text800 sm:mt-0 mt-10 text-[44px]`}>KeyFX Services</p>
            </div>
            <div>
                <PaymentServiceComponent/>
                <ForeignExchangeServiceComponent/>
                <CardServiceComponent/>
                <LocalBusinessServiceComponent/>
            </div>
        </div>
    );
};

export default Services;