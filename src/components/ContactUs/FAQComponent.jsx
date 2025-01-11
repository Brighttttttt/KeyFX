import searchIcon from "../../assets/svg/search.svg";
import arrowDownIcon from "../../assets/svg/arrow_down.svg";
import {Input} from "@nextui-org/react";
import {useState} from "react";

function FaqComponent() {

    const [selected, setSelected] = useState(0);

    return (
        <div className={"py-20 md:px-8 px-2"}>
            <div className={"text-center"}>
                <p className={"font-plusJakartaSans text-[#7680B0]"}>FAQ</p>
                <p className={"roboto font-semibold text-[44px] "}>Common Questions Answered</p>
                <Input placeholder={"Search for app &..."} startContent={<img src={searchIcon} alt="Search Icon"/>}
                       className={"lg:w-[872px] w-full mx-auto mt-6"}
                       classNames={{
                           inputWrapper: "!bg-[#F3F5FF] border border-solid border-[#D5DAEF] rounded-[40px] py-3 shadow-none",
                           input: "!placeholder-[#AFB7DC] bg-transparent"
                       }}/>
            </div>
            <div className={"mt-20 md:w-[872px] w-full mx-auto "}>
                <AccordionItemGenerator id={1} title={"Is there a fee for currency exchange?"}
                                        description={"No, there is no fee for exchanging currency. We offer free exchange and wallet service."}
                                        selected={selected}
                                        setSelected={setSelected}/>
                <AccordionItemGenerator id={2} title={"Are you FCA regulated?"}
                                        description={"No, there is no fee for exchanging currency. We offer free exchange and wallet service."}
                                        selected={selected}
                                        setSelected={setSelected}/>
                <AccordionItemGenerator id={3} title={"How can I access your currency exchange service?"}
                                        description={"No, there is no fee for exchanging currency. We offer free exchange and wallet service."}
                                        selected={selected}
                                        setSelected={setSelected}/>
                <AccordionItemGenerator id={4} title={"What currencies can I exchange?"}
                                        description={"No, there is no fee for exchanging currency. We offer free exchange and wallet service."}
                                        selected={selected}
                                        setSelected={setSelected}/>
                <AccordionItemGenerator id={5} title={"How can I check the current exchange rates?"}
                                        description={"No, there is no fee for exchanging currency. We offer free exchange and wallet service."}
                                        selected={selected}
                                        setSelected={setSelected}/>
            </div>
        </div>
    );
}

function AccordionItemGenerator({id, title, description, selected, setSelected}) {
    const isOpen = id === selected;

    return (
        <div
            className={`relative z-20 overflow-hidden transition-all cursor-pointer ${isOpen ? "bg-white border border-solid border-[#D5DAEF] shadow-[inset_0px_-2px_10px_0px_#3e6f9f40,0px_30px_50px_-30px_#4a4a4a1a,0px_30px_70px_-20px_#32325d26]" : ""}  md:px-8 md:py-8 px-4 py-8 rounded-xl`}
            onClick={() => setSelected(isOpen ? null : id)} // Toggle the selected item
        >
            <div className="flex justify-between items-start">
                <div>
                    <p className="roboto font-semibold text-[20px]">{title}</p>
                    <div
                        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                            isOpen ? 'max-h-40' : 'max-h-0'
                        }`}
                    >
                        <p className="roboto text-sm text-[#596495] mt-2">{description}</p>
                    </div>
                </div>
                <img
                    src={arrowDownIcon} // Replace with actual icon path
                    alt="arrowDownIcon"
                    className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    style={{
                        filter: isOpen ? "brightness(0) saturate(100%) invert(59%) sepia(77%) saturate(1939%) hue-rotate(136deg) brightness(99%) contrast(103%)" : "none",
                    }}
                />
            </div>
        </div>
    );
}

export default FaqComponent;