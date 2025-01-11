import React, {useEffect, useRef, useState} from 'react';
import './css/Dropdown.css';

const Dropdown = ({options, onSelect, selectedCurrency, component, disableClick}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options.find(option => option.code === selectedCurrency)
  );
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    if(disableClick) return;
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option.code);
    setIsOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredOptions = options.filter(option =>
    option.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target))
      setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelectedOption(
      options.find(option => option.code === selectedCurrency)
    );
  }, [selectedCurrency]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className={component !== 'services' ? "dropdown-toggle1" : "dropdown-toggle2"} onClick={toggleDropdown}>
        <>
          <img src={selectedOption.flag} alt={selectedOption.code} className="icon"/>
          {selectedOption.code}
        </>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <input
            type="text"
            className="dropdown-search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="dropdown-items-container">
            {filteredOptions.map((option) => (
              <div
                key={option.code}
                className="dropdown-item"
                onClick={() => handleOptionClick(option)}
              >
                <img src={option.flag} alt={option.code} className="icon"/>
                {option.code}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
