import React from 'react';
import {currencies} from "../../../data/Currencies.js";
import Dropdown from "./Dropdown";
import './css/Dropdown.css';

const CurrenciesSelect = ({selectedCurrency, onCurrencyChange, component='unset'}) => {
  const options = currencies.map((item) => ({
    code: item.code.toUpperCase(),
    flag: item.flag,
    value: item.code,
  }));
  
  const handleSelect = (currencyCode) => {
    onCurrencyChange(currencyCode);
  };
  
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
