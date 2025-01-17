import HeaderComponent from "../components/ContactUs/HeaderComponent";
import SupportComponent from "../components/ContactUs/SupportComponent";
import FaqComponent from "../components/ContactUs/FAQComponent";
import SocialMediaLinksComponent from "../components/ContactUs/SocialMediaLinksComponent";
import SubscribeComponent from "../components/ContactUs/SubscribeComponent";
import {useEffect} from "react";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

function ContactUsPage() {

    useDocumentMetadata(
        "Contact KeyFX - For your global payment solutions",
        "KeyFX - Send global business payments with the world's trusted currency exchange provider. All in one solution for your global payments!"
    );

    useEffect(() => {
        import("crisp-sdk-web").then((CrispPackage) => {
            CrispPackage.Crisp.configure("593982aa-7818-4054-8a0c-8b7b0d874c21");
        });
    }, []);

    return (
        <div className={"relative"}>
            <HeaderComponent/>
            <SupportComponent/>
            <FaqComponent/>
            <SocialMediaLinksComponent/>
            <SubscribeComponent/>
        </div>
    );
}

export default ContactUsPage;
