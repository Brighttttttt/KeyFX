import HeaderComponent from "../components/ContactUs/HeaderComponent";
import Navbar from "../components/Home/Navbar";
import SupportComponent from "../components/ContactUs/SupportComponent";
import FaqComponent from "../components/ContactUs/FAQComponent";
import Footer from "../components/Home/Footer";
import SocialMediaLinksComponent from "../components/ContactUs/SocialMediaLinksComponent";
import SubscribeComponent from "../components/ContactUs/SubscribeComponent";
import { Crisp } from "crisp-sdk-web";
import {useEffect} from "react";

function ContactUsPage() {
    useEffect(() => {
        document.title = 'Contact KeyFX  - For your global payment soluations';
        document.querySelector('meta[name="description"]').setAttribute("content", 'KeyFX - Send global business payments with the world&#039;s trusted currency exchange provider.  All in one solution for your global payments!');
        Crisp.configure("593982aa-7818-4054-8a0c-8b7b0d874c21");
      }, []);
    return (
        <div className={"relative"}>
            <Navbar/>
            <HeaderComponent/>
            <SupportComponent/>
            <FaqComponent/>
            <SocialMediaLinksComponent/>
            <SubscribeComponent/>
            <Footer/>
        </div>
    );
}

export default ContactUsPage;
