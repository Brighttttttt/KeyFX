import about1Image from "../../assets/images/about1_image.png";
import about2Image from "../../assets/images/about2_image.png";
import about1Icon from "../../assets/svg/about/about1.svg";
import about2Icon from "../../assets/svg/about/about2.svg";

function MainSectionComponent() {
    return (
        <div className={"min-h-screen bg-white z-10 pb-16"}>
            <div className={"w-full h-[6px]"}
                 style={{background: "linear-gradient(to right,#AFB7DC 3%,#94A1E3 27%,#4C63D5 56%,#7382CD 85%,#AFB7DC 100%)"}}/>
            <main
                className={"w-full flex items-center justify-center flex-col gap-[128px] lg:p-[80px] md:p-0 md:py-[72px] md:px-8 py-10 px-4"}>
                <div
                    className={"flex items-center justify-center lg:gap-[118px] md:gap-[56px] gap-[40px] flex-col md:flex-row"}>
                    <div className={"max-w-[520px] flex items-start justify-center gap-4 flex-col "}>
                        <img src={about1Icon} alt={"about1"} className={""}/>
                        <h3 className={"roboto text-4xl font-semibold"}>Save on FX and Banking Fees</h3>
                        <p className={"font-plusJakartaSans text500 text-base"}>We offer competitive exchange rates and
                            transparent fees, helping you cut the cost of currency conversions and keep more profits.
                            Whether you’re managing day-to-day business banking or planning international expansion, our
                            tailored solutions simplify the process and boost your bottom line.</p>
                    </div>
                    <img src={about1Image} alt={"about1"} className={"mt-5 w-[520px] "}/>
                </div>
                <div
                    className={"flex items-center justify-center lg:gap-[118px] md:gap-[56px] gap-[40px] flex-col md:flex-row"}>
                    <img src={about2Image} alt={"about1"} className={"w-[520px] "}/>
                    <div className={"max-w-[520px] flex items-start justify-center gap-4 flex-col "}>
                        <img src={about2Icon} alt={"about1"} className={""}/>
                        <h3 className={"roboto text-4xl font-semibold"}>Empowering Your Growth</h3>
                        <p className={"font-plusJakartaSans text500 text-base"}>Beyond just banking, KEYFX provides financial insights, corporate cards, and personalized support to optimize your business. Our digital platform puts control at your fingertips, so you can focus on scaling your company, not worrying about fees.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default MainSectionComponent;