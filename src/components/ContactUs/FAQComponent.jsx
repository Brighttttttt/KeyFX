import searchIcon from "../../assets/svg/search.svg";
import arrowDownIcon from "../../assets/svg/arrow_down.svg";
import {Input} from "@nextui-org/react";
import {memo, useCallback, useState} from "react";

function FaqComponent() {

    const [selected, setSelected] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const faqs = [
        {
            id: 1,
            title: "Is there a fee for currency exchange?",
            body: "No, there is no fee for exchanging currency. We offer free exchange and wallet service."
        },
        {
            id: 2,
            title: "Are you FCA regulated?",
            body: "Yes, KeyFX is registered as a Money Services Business, regulated by HM Revenue & Customs under the Money Laundering Regulations 2017 (Registration number XDML00000157237). Our payment services are provided by The Currency Cloud Limited, authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 (FRN: 900199), and Sciopay Ltd, licensed and regulated by HMRC as a Money Service Business (Licence No: XCML00000151326) and authorised by the Financial Conduct Authority as an Authorised Payment Institution (Firm Reference Number: 927951)."
        },
        {
            id: 3,
            title: "How can I access your currency exchange service?",
            body: "Accessing our currency exchange service is simple. Visit our website, and click on the login link to sign in. If you’re new, the sign-up process is straightforward – just click on the “Sign Up” button on our website."
        },
        {
            id: 4,
            title: "What currencies can I exchange?",
            body: "We offer a wide range of major and exotic currencies for exchange. Please check our website for the list of available currencies. If you require an extra currency you can contact your dedicated account manager. "
        },
        {
            id: 5,
            title: "How can I check the current exchange rates?",
            body: "You can check our real-time exchange rates on our website, or contact our customer support for the latest rates. Also, you can login to your portal and get an online quote. "
        },
        {
            id: 6,
            title: "Do you offer better rates than banks?",
            body: "We offer more competitive rates than banks and building societies, we also offer no transaction fee, where banks normally charge a fee."
        },
        {
            id: 7,
            title: "What payment methods can I use for currency exchange?",
            body: "We accept bank transfer from your own bank account and in some cases we accept third party payments (Subject to EDD)."
        },
        {
            id: 8,
            title: "Can I pay with physical cash, cheque, or bank draft?",
            body: "We are not able to accept payments by cash, cheque, or bank draft"
        },
        {
            id: 9,
            title: "How long does it take to exchange currency?",
            body: "An order takes 60 seconds to complete, we offer same day payment through our platform."
        },
        {
            id: 10
            , title: "Do you offer currency exchange for businesses or large transactions?",
            body: "Yes, we provide currency exchange services for both individuals and businesses, including large transactions. Contact us for business-specific services."
        },
        {
            id: 11
            , title: "Is my personal information secure when using your service?",
            body: "We take data security seriously. Our platform uses encryption and follows best practices to safeguard your personal and financial information. We are also registered by ICO. "
        },
        {
            id: 12
            , title: "Can I cancel or change my currency exchange order?",
            body: "It depends on the specific terms and conditions of your exchange. Please reach out to our customer support for assistance with order changes or cancellations."
        },
        {
            id: 13
            , title: "Are there any restrictions on the amount of currency I can exchange?",
            body: "There is no restriction on the amount you can exchange on a yearly basis."
        },
        {
            id: 14
            , title: "Can I track my currency exchange transaction online?",
            body: "We have a tracking system where you can clearly see where your funds currently are, once it has cleared the swift system, the recipient will be notified. "
        },
        {
            id: 15
            , title: "How to get help from the customer support team?",
            body: "To receive support from our team, you can always send a query through our “Contact us” form."
        },
    ];

    const toggleAccordion = useCallback((id) => {
        setSelected(prevSelected => (prevSelected === id ? null : id));
    }, []);

    const filteredFaqs = faqs.filter((faq) => {
        const queryWords = searchQuery.toLowerCase().split(/\s+/);
        return queryWords.every(
            (word) =>
                faq.title.toLowerCase().includes(word) || faq.body.toLowerCase().includes(word)
        );
    });

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className={"py-10 md:px-8 px-2"}>
            <div className={"text-center"}>
                <p className={"font-plusJakartaSans text-[#7680B0]"}>FAQ</p>
                <p className={"roboto font-semibold text-[44px]"}>Common Questions Answered</p>
                <Input
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder={"Search for app &..."}
                    startContent={<img src={searchIcon} alt="Search Icon"/>}
                    className={"lg:w-[872px] w-full mx-auto mt-6"}
                    classNames={{
                        inputWrapper: "!bg-[#F3F5FF] border border-solid border-[#D5DAEF] rounded-[40px] py-3 shadow-none",
                        input: "!placeholder-[#AFB7DC] bg-transparent"
                    }}
                />
            </div>
            <div className={"mt-20 md:w-[872px] w-full mx-auto "}>
                {filteredFaqs.length === 0 ? (
                    <p className="roboto text-sm text-[#596495] text-center">No FAQs found</p>
                ) : (
                    filteredFaqs.map(a => (
                        <AccordionItemGenerator
                            key={a.id}
                            id={a.id}
                            title={a.title}
                            description={a.body}
                            selected={selected}
                            setSelected={toggleAccordion}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

const AccordionItemGenerator = memo(({id, title, description, selected, setSelected}) => {
    const isOpen = id === selected;

    return (
        <div
            className={`relative z-20 overflow-hidden transition-all cursor-pointer ${isOpen ? "bg-white border border-solid border-[#D5DAEF] shadow-[inset_0px_-2px_10px_0px_#3e6f9f40,0px_30px_50px_-30px_#4a4a4a1a,0px_30px_70px_-20px_#32325d26]" : ""}  md:px-8 md:py-8 px-4 py-8 rounded-xl`}
            onClick={() => setSelected(isOpen ? null : id)}>
            <div className="flex justify-between items-start">
                <div>
                    <p className="roboto font-semibold text-[20px]">{title}</p>
                    <div
                        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                            isOpen ? 'max-h-40' : 'max-h-0'
                        }`}>
                        <p className="roboto text-sm text-[#596495] mt-2">{description}</p>
                    </div>
                </div>
                <img
                    src={arrowDownIcon}
                    alt="arrowDownIcon"
                    className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    style={{
                        filter: isOpen ? "brightness(0) saturate(100%) invert(59%) sepia(77%) saturate(1939%) hue-rotate(136deg) brightness(99%) contrast(103%)" : "none",
                    }}
                />
            </div>
        </div>
    );
});

export default FaqComponent;