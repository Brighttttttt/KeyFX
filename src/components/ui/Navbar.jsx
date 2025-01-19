import logo from '../../assets/svg/logo.svg'
import close from '../../assets/svg/close.svg'
import pricing from '../../assets/svg/pricing.svg'
import contact from '../../assets/svg/contact.svg'
import about from '../../assets/svg/about.svg'
import blog from '../../assets/svg/blog.svg'
import avatar from '../../assets/images/Avatar.png'
import defaultAvatar from '../../assets/svg/default_avatar.svg'
import {Link, useNavigate} from "react-router";
import {Button, Drawer, DrawerContent, DrawerFooter, DrawerHeader, useDisclosure} from "@nextui-org/react";
import {useState} from "react";

const Navbar = () => {

    const {isOpen, onOpenChange} = useDisclosure();
    const menuItems = [
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
            route: "https://keyfx.co.uk/blog",
        },
    ];
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <nav
                className='md:h-navbar-height-lg h-navbar-height-sm w-full flex justify-between items-center mainPage z-50'>
                <div className='flex gap-3 items-center'>
                    <div onClick={() => {
                        navigate("/")
                    }} className={"cursor-pointer"}><img alt="logo" src={logo}/></div>
                    <ul className='navTabs sm:flex hidden'>
                        {
                            menuItems.map((menuItem, index) => (
                                <Link to={menuItem.route}>
                                    <li className={"font-plusJakartaSans font-semibold"}>{menuItem.title}</li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <div className='items-center  sm:flex hidden'>
                    <a className='fw600 btn' href="https://panel.keyfx.co.uk/login">Login</a>
                    <a href="https://panel.keyfx.co.uk/register">
                        <Button className='rounded-md bg-[#394375] text-white font-semibold'>
                            Sign up
                        </Button>
                    </a>
                </div>
                <div className='sm:hidden visible'>
                    <img alt="Not Available" src="/List.svg" onClick={onOpenChange}/>
                </div>
            </nav>
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement={"right"} className={"h-screen z-[1000]"}
                    classNames={{
                        base: "rounded-none",
                        body: "h-fit",
                        wrapper: "z-[200]"
                    }} hideCloseButton={true}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="w-full flex items-center justify-between gap-1 px-4 py-4">
                                <img alt="logo" src={logo} onClick={() => {
                                    navigate("/");
                                    onClose();
                                }}/>
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
                                    return <Link
                                        onClick={onClose}
                                        to={item.route}
                                        className={"w-full flex items-center justify-start gap-3 px-4 py-3 cursor-pointer"}
                                        key={i}>
                                        <img src={item.icon} alt={item.title} className={"w-6"}/>
                                        <p className={"roboto font-medium text-sm text-[#394375]"}>{item.title}</p>
                                    </Link>
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
                    <Link className={"w-[100px] bg-[#F3F5FF] rounded-[100px] text-center"}
                          to={"https://panel.keyfx.co.uk/login"}>
                        <p className={"roboto font-medium text-sm text-[#182252] py-1"}>log in</p>
                    </Link>
                    <Link to={"https://panel.keyfx.co.uk/register"}
                          className={"w-[100px] bg-[#394375] rounded-[100px] text-center"}>
                        <p className={"roboto font-medium text-sm text-[#fff] py-1"}>Sign up</p>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;