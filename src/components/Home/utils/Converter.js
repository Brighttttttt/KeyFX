import React, {useEffect, useState} from "react";
import CurrenciesSelect from "./CurrencySelect";
import arrowLeftRight from "../../../assets/svg/home/arrowsLeftRight.svg";
// import {numberFormatter} from "../../../utils/NumberFormatter";

//todo: format numbers
const Converter = ({ isMobile }) => {
  const [loading, setLoading] = useState(false);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("GBP");
  const [amount, setAmount] = useState(1);
  const [exchange, setExchange] = useState(0);
  const [loadingSwap, setLoadingSwap] = useState(false);
  let tmp;
  
  const handleFromCurrencyChange = (newCurrency) => {
    setFromCurrency(newCurrency);
  };
  
  const handleToCurrencyChange = (newCurrency) => {
    setToCurrency(newCurrency);
  };
  
  const setAmountFunction = (e) => {
    setAmount(e.target.value);
  };
  
  const convertCurrency = async () => {
    setLoading(true);
    const requestData = {
      from: fromCurrency,
      to: toCurrency,
      amount: amount,
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
        setExchange(data.rates[toCurrency]);
        setLoading(false);
      }
    } catch (error) {
      //todo: add toast
      console.error("Error converting currency:", error);
      setLoading(false);
    }
  };
  
  const swap = () => {
    setLoadingSwap(true);
    tmp=fromCurrency
    setFromCurrency(toCurrency);
    setToCurrency(tmp);
    setLoadingSwap(false);
  };
  
  useEffect(() => {
    convertCurrency();
  }, []);
  
  return (
    <div className="mainPage converterWrapper">
      <div className="globe converter-card cvt-shadow grid lg:grid-cols-11 grid-cols-4 gap-3 items-center">
        <div className="flex flex-col col-span-4 ">
          <label className="small pb-2">Amount</label>
          <div className="relative">
            <input
              className="w-full input-gray rounded-xl shadow-sm py-3 fw-bold"
              type="number"
              step="any"
              value={amount}
              onChange={setAmountFunction}
              style={{height: '76px'}}
            />
            <div className="absolute top-0 right-0">
              {/* Pass the fromCurrency and the function to update it */}
              <CurrenciesSelect
                selectedCurrency={fromCurrency}
                onCurrencyChange={handleFromCurrencyChange}
              />
            </div>
          </div>
          <label className="small pt-2">This is a hint text to help user.</label>
        </div>
        
        <div className="lg:col-span-1 col-span-4 justify-center flex ">
          <button
            className={`btn-p rounded-md w-full py-3 d-flex justify-center align-items-center ${!isMobile ? 'mx-2' : ''} ${loadingSwap ? 'loading' : ''}`}
            style={{height: '76px'}}
            onClick={swap}
            disabled={loadingSwap}
          >
            <img src={arrowLeftRight} alt="arrowLeftRight"/>
          </button>
        </div>
        
        
        <div className="flex flex-col col-span-4">
          <label className="small pb-2">Converted to</label>
          <div className="relative">
            <input
              className="input-gray rounded-md shadow-sm w-full py-3 fw-bold"
              type="number"
              value={exchange}
              step="any"
              style={{height: '76px'}}
            />
            <div className="absolute top-0 right-0">
              {/* For toCurrency selection */}
              <CurrenciesSelect
                selectedCurrency={toCurrency}
                onCurrencyChange={handleToCurrencyChange}
              />
            </div>
          </div>
          <label className="small pt-2">This is a hint text to help user.</label>
        </div>
        
        <div
          className={"lg:col-span-2 col-span-4 flex justify-center px-0"}>
          <button
            className={`btn-p rounded-md w-full py-3 ${loading ? 'loading' : ''}`}
            onClick={convertCurrency}
            style={{height: '76px'}}
            disabled={loading}
          >
            {loading ? 'Converting' : 'Continue'}
          </button>
        </div>
        
        {/* {result && (
          <div className="col-span-11 mt-4">
            <p>
              {amount} {result.from} = {result.rates[toCurrency]} {toCurrency}
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Converter;
