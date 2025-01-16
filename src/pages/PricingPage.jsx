import Navbar from "../components/Home/Navbar";
import HeaderPricingComponent from "../components/Pricing/HeaderPricingComponent";
import PlansComponent from "../components/Pricing/PlansComponent";
import SubscribeComponent from "../components/ContactUs/SubscribeComponent";
import Footer from "../components/Home/Footer";
import {useEffect} from "react";

function PricingPage() {
    useEffect(() => {
        document.title = 'KeyFX Pricing -  Premium Financial Service at Affordable Pricing';
        document.querySelector('meta[name="description"]').setAttribute("content", 'Diverse financial services, curated for small businesses and enterprises at affordable pricing, with an option for a customised plan.');
      }, []);
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