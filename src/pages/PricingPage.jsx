import Navbar from "../components/Home/Navbar";
import HeaderPricingComponent from "../components/Pricing/HeaderPricingComponent";
import PlansComponent from "../components/Pricing/PlansComponent";
import SubscribeComponent from "../components/ContactUs/SubscribeComponent";
import Footer from "../components/Home/Footer";

function PricingPage() {
    return (
        <div>
            <Navbar/>
            <HeaderPricingComponent/>
            <PlansComponent/>
            <SubscribeComponent withoutBlur={true}/>
            <Footer/>
        </div>
    );
}

export default PricingPage;