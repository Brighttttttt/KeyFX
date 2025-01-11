function HeaderPricingComponent() {
    return (
        <header className={"z-20 relative md:px-0 px-4 py-5 flex items-center justify-center flex-col gap-6"}>
            <h2 className={"roboto font-semibold text-[60px] text-[#0D153F]"}>Pricing</h2>
            <p className={"roboto text-lg text-[#475385] md:w-full w-[80%] text-center"}>Free for the first 3 months, £5 afterwards</p>
        </header>
    );
}

export default HeaderPricingComponent;