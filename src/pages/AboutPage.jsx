import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import HeaderComponent from "../components/About/HeaderComponent";
import MainSectionComponent from "../components/About/MainSectionComponent";
import WhyKeyFXComponent from "../components/About/WhyKeyFXComponent";

function AboutPage() {
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