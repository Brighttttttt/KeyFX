import {commafy, decommafy} from "../../utils/NumberFormatter";
import CurrenciesSelect from "./utils/CurrencySelect";
import arrowUpDown from "../../assets/svg/home/arrowUpDown.svg";
import React, {useEffect, useMemo, useState} from "react";

function ConvertCurrenciesServiceComponent() {

    const fromExchanges = useMemo(() => ["USD", "JPY", "HUF", "EUR"], []);
    const toExchanges = useMemo(() => ["AUD", "PLN", "RON", "CNY"], []);
    const [data, setData] = useState([]);
    const [payeeRate, setPayeeRate] = useState(0);
    const [animate, setAnimate] = useState(false);
    const [fromCurrency, setFromCurrency] = useState(fromExchanges[0]);
    const [toCurrency, setToCurrency] = useState(toExchanges[0]);
    const [exchange, setExchange] = useState(0);
    const amount = 100;

    const handleFromCurrencyChange = (newCurrency) => {
        setFromCurrency(newCurrency);
    };

    const handleToCurrencyChange = (newCurrency) => {
        setToCurrency(newCurrency);
    };

    const convertCurrency = async () => {
        const isDataExists = data.find((item) => {
            return item.from === fromCurrency;
        });
        if (isDataExists) {
            const rate = isDataExists.rates[toCurrency];
            setExchange(rate * amount);
            setPayeeRate(rate);
        } else {
            const requestData = {
                from: fromCurrency,
                to: toCurrency,
                amount: Number(decommafy(amount)),
            };
            try {
                const response = await fetch("https://old.keyfx.co.uk/calculator", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(requestData),
                });
                const newData = await response.json();
                if (newData) {
                    const rate = newData.rates[toCurrency];
                    setData((prev) => [...prev, newData]);
                    setExchange(rate * amount);
                    setPayeeRate(rate);
                }
            } catch (error) {
                console.error("Error converting currency:", error);
            }
            const interval = setInterval(() => {
                setAnimate(true);
                setTimeout(() => {
                    setAnimate(false);
                }, 2500);
            }, 5000);
        }
    };

    useEffect(() => {
        if (animate) return;
        setFromCurrency(fromExchanges[Math.floor(Math.random() * fromExchanges.length)]);
        setToCurrency(toExchanges[Math.floor(Math.random() * toExchanges.length)]);
        convertCurrency();
    }, [animate]);

    const InfoBox = ({label}) => (
        <div className="w-full p-2 border rounded-md text-black flex items-center justify-start">
            <p className="font-roboto text-[#667085] text-[10px]">{label}</p>
        </div>
    );

    return (
        <div className="flex items-center justify-center relative">
            <div
                className="v-card absolute -top-4 left-10 cc-rad px-3 py-4 sm:w-72 w-60 transform translate-x-8 translate-y-4 card2">
                <h2 className="text-xl font-semibold mb-4 text-center flex justify-center overflow-hidden relative">
                                    <span className={`inline-block relative font-bold transition-all duration-1000 text-payee ${animate ? '-translate-y-full' : ''}`}>
                                        ${payeeRate.toFixed(2)}
                                    </span>
                </h2>
                <div className="mb-3 flex gap-2 font-10 w-full">
                    <InfoBox label={"Payee"}/>
                    <InfoBox label={"Currency / Wallet"}/>
                </div>
                <div className=" flex gap-2 font-10 w-full">
                    <InfoBox label={"Payee"}/>
                    <InfoBox label={"Currency / Wallet"}/>
                </div>
                <div>
                    <button className="text-lg w-full rounded-md btn-p flex items-center gap-1 mt-4">
                        continue
                    </button>
                </div>
                <div className="currency-symbol top-right">
                </div>
            </div>
            <div className='relative mt-32 '>
                <div className="currency-symbol top-left z-9">
                </div>
                <div className="v-card relative bg-white  cc-rad p-6 sm:w-80 w-60 z-10 card1">
                    <div className="currency-symbol bottom-right z-99">
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-4 roboto">Convert currencies</h2>
                        <div className={"relative"}>
                            <div
                                className="flex justify-between items-center px-4 py-2 rounded-2xl mb-4 relative bg-[#f2f4fa]">
                                <p className="w-full bg-transparent font-bold">
                                    {commafy(amount)}
                                </p>
                                <span className="flex items-center">
                        <CurrenciesSelect
                            selectedCurrency={fromCurrency}
                            onCurrencyChange={handleFromCurrencyChange}
                            component={'services'}
                            disableClick={true}
                        />
                      </span>
                            </div>
                            <div
                                className="flex justify-between items-center px-4 py-2 rounded-2xl bg-[#f2f4fa]">
                                <div className="overflow-hidden relative">
                        <span className={`inline-block relative font-bold transition-all duration-1000 ${animate ? '-translate-y-full' : ''}`}>
                            {commafy(exchange.toFixed(2))}
                        </span>
                                </div>
                                <span className="flex items-center">
                        <CurrenciesSelect
                            selectedCurrency={toCurrency}
                            onCurrencyChange={handleToCurrencyChange}
                            component={'services'}
                            disableClick={true}
                        />
                      </span>
                            </div>
                            <div
                                className="w-14 h-14 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2C3667FF] z-40 rounded-2xl flex items-center justify-center">
                                <img src={arrowUpDown} alt="arrowUpDown"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConvertCurrenciesServiceComponent;