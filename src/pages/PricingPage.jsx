import HeaderPricingComponent from "../components/Pricing/HeaderPricingComponent";
import PlansComponent from "../components/Pricing/PlansComponent";
import SubscribeComponent from "../components/ContactUs/SubscribeComponent";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

function PricingPage() {
    useDocumentMetadata(
        'KeyFX Pricing -  Premium Financial Service at Affordable Pricing',
        'Diverse financial services, curated for small businesses and enterprises at affordable pricing, with an option for a customised plan.'
    );
    return (
        <div>
            <HeaderPricingComponent/>
            <PlansComponent/>
            <SubscribeComponent withoutBlur={true}/>
        </div>
    );
}

export default PricingPage;