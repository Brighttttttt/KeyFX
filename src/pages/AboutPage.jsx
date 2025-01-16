import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import HeaderComponent from "../components/About/HeaderComponent";
import MainSectionComponent from "../components/About/MainSectionComponent";
import WhyKeyFXComponent from "../components/About/WhyKeyFXComponent";
import {useEffect} from "react";

function AboutPage() {
    useEffect(() => {
        document.title = 'About KeyFX -  First Class FX services';
        document.querySelector('meta[name="description"]').setAttribute("content", 'KeyFX - We are highly committed to provide first class FX services.   All in one solution for your global payments!');
      }, []);
    return (
        <div className={"flex items-stretch justify-stretch flex-col"}>
            <Navbar/>
            <HeaderComponent/>
            <MainSectionComponent/>
            <WhyKeyFXComponent/>
            <Footer/>
        </div>
    );
}

export default AboutPage;