import HeaderComponent from "../components/ContactUs/HeaderComponent";
import Navbar from "../components/Home/Navbar";
import SupportComponent from "../components/ContactUs/SupportComponent";
import FaqComponent from "../components/ContactUs/FAQComponent";
import Footer from "../components/Home/Footer";
import SocialMediaLinksComponent from "../components/ContactUs/SocialMediaLinksComponent";
import SubscribeComponent from "../components/ContactUs/SubscribeComponent";

function ContactUsPage() {
    return (
        <div>
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
