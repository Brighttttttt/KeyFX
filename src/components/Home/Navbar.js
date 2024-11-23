import React from 'react';
import logo from '../../assets/svg/logo.svg'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center my-4 mainPage'>
            <div className='flex gap-3 items-center'>
                <div><img alt="logo" src={logo}/></div>
                <ul className=' navTabs sm:flex hidden'>
                    <li>Products</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='items-center  sm:flex hidden'>
                <button className='fw600 btn'>Login</button>
                <button className='btn-p rounded-md py-2 px-3 fw600'>Sign up </button>
            </div>
            <div className='sm:hidden visible sm:mr-0 mr-4'>
                <img alt="Not Available" src="/List.svg" />
            </div>
        </nav>
    );
};

export default Navbar;