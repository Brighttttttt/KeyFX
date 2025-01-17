import HeaderComponent from "../components/About/HeaderComponent";
import MainSectionComponent from "../components/About/MainSectionComponent";
import WhyKeyFXComponent from "../components/About/WhyKeyFXComponent";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

function AboutPage() {

    useDocumentMetadata(
        'About KeyFX - First Class FX services',
        'KeyFX - We are highly committed to provide first class FX services. All in one solution for your global payments!'
    )

    return (
        <div className={"relative"}>
            <HeaderComponent/>
            <MainSectionComponent/>
            <WhyKeyFXComponent/>
        </div>
    );
}

export default AboutPage;