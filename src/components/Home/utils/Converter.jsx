import React, {useEffect, useState} from "react";
import CurrenciesSelect from "./CurrencySelect";
import arrowLeftRight from "../../../assets/svg/home/arrowsLeftRight.svg";

const Converter = ({isMobile}) => {

    const [inputs, setInputs] = useState({
        fromCurrency: "USD",
        toCurrency: "GBP",
        amount: 0,
        exchange: 0
    });
    const [data, setData] = useState({
        isLoading: false,
        data: {}
    });

    const getCurrencyData = async () => {
        setData((prevState) => {
            return {...prevState, isLoading: true};
        });
        const requestData = {
            from: inputs.fromCurrency,
            to: inputs.toCurrency,
            amount: inputs.amount,
        };
        try {
            const response = await fetch("https://keyfx.co.uk/calculator", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });
            const data = await response.json();
            if (data) {
                setData((prevState) => {
                    return {...prevState, data: data.rates}
                });
                setInputs((prevState) => {
                    return {...prevState, exchange: data.rates[inputs.toCurrency] * prevState.amount};
                });
            }
        } catch (error) {
            console.error("Error converting currency:", error);
        } finally {
            setData((prevState) => {
                return {...prevState, isLoading: false};
            });
        }
    };

    const swap = () => {
        setInputs((prev) => {
            const fromCurrency = prev.fromCurrency;
            const toCurrency = prev.toCurrency;
            const amount = Number.parseFloat(prev.amount.toString()).toFixed(2);
            const exchange = Number.parseFloat(prev.exchange.toString()).toFixed(2);
            return {...prev, fromCurrency: toCurrency, toCurrency: fromCurrency, amount: exchange, exchange: amount}
        });
    };

    const calculateExchange = () => {
        setInputs((prevState) => {
            const newValue = (data.data[prevState.toCurrency] * prevState.amount);
            return {...prevState, exchange: isNaN(newValue) ? 0 : newValue.toFixed(2)};
        })
    }

    const calculateAmount = () => {
        setInputs((prevState) => {
            return {...prevState, amount: ( prevState.exchange / data.data[prevState.toCurrency]).toFixed(2)};
        })
    }

    useEffect(() => {
        getCurrencyData();
    }, [inputs.fromCurrency]);

    useEffect(()=>{
        calculateExchange()
    }, [inputs.toCurrency])

    return (
        <div className="mainPage converterWrapper md:pb-[110px] ">
            <div
                className="globe converter-card cvt-shadow flex md:flex-row flex-col gap-6 items-end justify-center">
                <div className={"w-full flex sm:flex-row flex-col lg:gap-6 sm:gap-4 gap-3 items-end justify-center"}>
                    <div className="w-full flex flex-col gap-[6px]">
                        <label className="roboto sm:text-sm text-[12px] text-[#7680B0]">Amount</label>
                        <div className="relative">
                            <input
                                className="w-full sm:h-[76px] h-[60px] input-gray rounded-xl shadow-sm fw-bold md:px-6 px-3"
                                step="any"
                                value={inputs.amount}
                                type={"number"}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setInputs((prev) => ({
                                        ...prev,
                                        amount: value
                                    }));
                                    calculateExchange(value);
                                }}
                            />
                            <div className="absolute top-1/2 md:right-6 right-3 -translate-y-1/2 z-10">
                                <CurrenciesSelect
                                    selectedCurrency={inputs.fromCurrency}
                                    onCurrencyChange={(newCurrency) => {
                                        setInputs((prev) => {
                                            const newState = {...prev};
                                            newState.fromCurrency = newCurrency;
                                            return newState;
                                        })
                                    }}
                                />
                            </div>
                        </div>
                        {/*<label className="small pt-2">This is a hint text to help user.</label>*/}
                    </div>
                    <div className="justify-center flex sm:w-fit w-full">
                        <button
                            className={`sm:h-[76px] h-[40px] aspect-square btn-p rounded-md w-full d-flex justify-center align-items-center ${!isMobile ? '' : ''}}`}
                            onClick={swap}>
                            <img src={arrowLeftRight} alt="arrowLeftRight" className={"md:rotate-0 rotate-90 z-0"}/>
                        </button>
                    </div>
                    <div className="w-full flex flex-col  gap-[6px]">
                        <label className="roboto sm:text-sm text-[12px] text-[#7680B0]">Converted to</label>
                        <div className="relative">
                            <input
                                className="w-full sm:h-[76px] h-[60px] input-gray rounded-xl shadow-sm fw-bold md:px-6 px-3"
                                value={inputs.exchange}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setInputs((prev) => ({
                                        ...prev,
                                        exchange: value
                                    }));
                                    calculateAmount(value);
                                }}
                                step="any"
                            />
                            <div className="absolute top-1/2 md:right-6 right-3 -translate-y-1/2">
                                <CurrenciesSelect
                                    selectedCurrency={inputs.toCurrency}
                                    onCurrencyChange={(newCurrency) => {
                                        setInputs((prev) => {
                                            const newState = {...prev};
                                            newState.toCurrency = newCurrency;
                                            return newState;
                                        })
                                    }}
                                />
                            </div>
                        </div>
                        {/*<label className="small pt-2">This is a hint text to help user.</label>*/}
                    </div>
                </div>
                <div
                    className={"md:w-[160px] w-full lg:col-span-2 col-span-4 flex justify-center px-0"}>
                    <button
                        className={`md:h-[76px] h-[50px] btn-p rounded-md w-full md:py-3 py-2 roboto font-medium text-lg`}
                        // onClick={convertCurrency}
                        // style={{height: '76px'}}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Converter;
