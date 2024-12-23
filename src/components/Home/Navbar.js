import React from 'react';
import logo from '../../assets/svg/logo.svg'
import close from '../../assets/svg/close.svg'
import products from '../../assets/svg/products.svg'
import pricing from '../../assets/svg/pricing.svg'
import contact from '../../assets/svg/contact.svg'
import about from '../../assets/svg/about.svg'
import blog from '../../assets/svg/blog.svg'
import avatar from '../../assets/images/Avatar.png'
import defaultAvatar from '../../assets/svg/default_avatar.svg'
import {Link} from "react-router";
import {Drawer, DrawerContent, DrawerFooter, DrawerHeader, useDisclosure} from "@nextui-org/react";

const Navbar = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const menuItems = [
        {
            title: "Products",
            icon: products,
            route: "/",
        },
        {
            title: "Pricing",
            icon: pricing,
            route: "/pricing",
        },
        {
            title: "Contact",
            icon: contact,
            route: "/contact-us",
        },
        {
            title: "About",
            icon: about,
            route: "/about",
        },
        {
            title: "Blog",
            icon: blog,
            route: "/",
        },
    ];
    const [isLoggedIn, setIsLoggedIn] = React.useState(true);

    return (
        <>
            <nav className='h-[80px] w-full absolute top-0 flex justify-between items-center mainPage z-50'>
                <div className='flex gap-3 items-center'>
                    <div><img alt="logo" src={logo}/></div>
                    <ul className='navTabs sm:flex hidden'>
                        <li>Products</li>
                        <Link to={"/pricing"}>
                            <li>Pricing</li>
                        </Link>
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
                    <img alt="Not Available" src="/List.svg" onClick={onOpenChange}/>
                </div>
            </nav>
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement={"right"} className={"h-screen"} classNames={{
                base: "rounded-none",
                body: "h-fit"
            }} hideCloseButton={true}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="w-full flex items-center justify-between gap-1 px-4 py-4">
                                <img alt="logo" src={logo}/>
                                <img alt="close" src={close} onClick={onClose}/>
                            </DrawerHeader>
                            <div
                                className={"w-full border-y border-solid border-[#D5DAEF] px-4 py-8 flex flex-col items-stretch justify-stretch gap-4"}>
                                {
                                    isLoggedIn ? <LoggedInComponent setIsLoggedIn={setIsLoggedIn}/> :
                                        <LoggedOutComponent setIsLoggedIn={setIsLoggedIn}/>
                                }
                            </div>
                            <DrawerFooter className={"w-full px-2 py-4 flex items-start justify-start flex-col gap-2"}>
                                {menuItems.map((item, i) => {
                                    return <div
                                        className={"w-full flex items-center justify-start gap-3 px-4 py-3 cursor-pointer"}
                                        key={i}>
                                        <img src={item.icon} alt={item.title} className={"w-6"}/>
                                        <p className={"roboto font-medium text-sm text-[#394375]"}>{item.title}</p>
                                    </div>
                                })}
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
};


function LoggedInComponent({setIsLoggedIn}) {
    return (
        <>
            <div className={"px-4 flex items-center justify-between"}>
                <div className={"flex items-center justify-center gap-2"}>
                    <img src={avatar} alt="avatar"/>
                    <div>
                        <p className={"font-plusJakartaSans font-semibold"}>Irwin Williams</p>
                        <p className={"roboto text-sm text-[#7680B0]"}>Personal account</p>
                    </div>
                </div>
                <div className={"bg-[#F3F5FF] px-3 py-1 rounded-xl"}>
                    <p className={"roboto font-medium text-sm text-[#182252]"} onClick={() => setIsLoggedIn(false)}>log
                        out</p>
                </div>
            </div>
            <div className={"w-full h-[1px] bg-[#D5DAEF]"}/>
            <div className={"px-4"}>
                <p className={"text-sm text-[#7680B0]"}>Your plan is personal. Explore more with
                    our <span className={"text-[#0076FF]"}>Premium Plan</span>.</p>
            </div>
        </>
    );
}

function LoggedOutComponent({setIsLoggedIn}) {
    return (
        <>
            <div className={"px-4 flex items-center justify-center"}>
                <img src={defaultAvatar} alt="avatar"/>
            </div>
            <div className={"w-full h-[1px] bg-[#D5DAEF]"}/>
            <div className={"px-4 flex flex-col items-stretch justify-stretch gap-6"}>
                <p className={"text-sm text-[#7680B0] text-center"}>To access your account and enjoy all our features,
                    please log in. If you don’t have an account yet, feel free to sign up!</p>
                <div className={"flex items-center justify-center gap-2"}>
                    <div className={"w-[100px] bg-[#F3F5FF] rounded-[100px] text-center"}
                         onClick={() => setIsLoggedIn(true)}>
                        <p className={"roboto font-medium text-sm text-[#182252] py-1"}>log in</p>
                    </div>
                    <div className={"w-[100px] bg-[#394375] rounded-[100px] text-center"}>
                        <p className={"roboto font-medium text-sm text-[#fff] py-1"}>Sign up</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;