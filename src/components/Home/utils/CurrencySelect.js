import React, {useEffect} from 'react';
import {currenciesWithFlags} from "../../../assets/data/CurrenciesWithFlags.js";
import Dropdown from "./Dropdown";
import './css/Dropdown.css';

const CurrenciesSelect = ({selectedCurrency, onCurrencyChange, component='unset'}) => {
  const options = currenciesWithFlags.map((item) => ({
    code: item.code.toUpperCase(),
    flag: item.flag,
    value: item.code,
  }));
  
  const handleSelect = (currencyCode) => {
    onCurrencyChange(currencyCode);
  };
  
  useEffect(() => {
    onCurrencyChange(selectedCurrency);
  }, [selectedCurrency]);
  
  return (
    <div>
      <Dropdown
        options={options}
        onSelect={handleSelect}
        selectedCurrency={selectedCurrency}
        component={component}
      />
    </div>
  );
};

export default CurrenciesSelect;
