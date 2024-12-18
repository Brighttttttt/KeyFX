import React from 'react';
import logo from '../../assets/svg/logo.svg'
import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className='h-[80px] w-full absolute top-0 flex justify-between items-center mainPage z-50'>
            <div className='flex gap-3 items-center'>
                <div><img alt="logo" src={logo}/></div>
                <ul className='navTabs sm:flex hidden'>
                    <li>Products</li>
                    <li>Pricing</li>
                    <Link to={"/contact-us"}>
                        <li>Contact</li>
                    </Link>
                    <Link to={"/about"}>
                        <li>About</li>
                    </Link>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='items-center  sm:flex hidden'>
                <button className='fw600 btn'>Login</button>
                <button className='btn-p rounded-md py-2 px-3 fw600'>Sign up</button>
            </div>
            <div className='sm:hidden visible sm:mr-0 mr-4'>
                <img alt="Not Available" src="/List.svg"/>
            </div>
        </nav>
    );
};

export default Navbar;