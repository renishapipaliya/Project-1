import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



const Dropdownlist = ({ options = [], multiple, selectedOptions, setSelectedOptions }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionChange = (option) => {
        if (multiple) {
            if (selectedOptions.includes(option)) {
                setSelectedOptions(selectedOptions.filter(item => item !== option));
            } else {
                setSelectedOptions([...selectedOptions, option]);
            }
        } else {
            setSelectedOptions([option]);
            setIsOpen(false);
        }
    };

    const selectedLabels = selectedOptions.map(optionValue => {
        const option = options.find(o => o.value === optionValue);
        return option ? option.label : '';
    }).join(', ');

    return (
        <div className="relative inline-block min-w-56" ref={dropdownRef}>
            <input
                type="text"
                readOnly
                value={selectedLabels || 'Select options'}
                onClick={toggleDropdown}
                className="bg-white border w-[27vw]  dark:bg-[#333333] dark:text-gray-200 outline-none border-gray-300 dark:border-gray-500 rounded-[9px] h-[44px] text-gray-700 px-2 inline-flex items-center justify-between "
            />
            {isOpen ? (
                < IoIosArrowUp onClick={toggleDropdown} className="absolute flex justify-end left-80 top-2/4 transform -translate-y-2/4 text-gray-500 dark:text-gray-200" />
            ) : (
                    <IoIosArrowDown onClick={toggleDropdown} className="absolute flex justify-end left-80 top-2/4 transform -translate-y-2/4 text-gray-500 dark:text-gray-200" />
            )}

            {isOpen && (
                <ul className="absolute z-10 w-full bg-white dark:bg-black dark:text-gray-400 border border-gray-300 shadow-lg mt-1">
                    {options.map(option => (
                        <li
                            key={option.value}
                            className="px-4 py-2 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 cursor-pointer"
                            onClick={() => handleOptionChange(option.value)}
                        >
                            {multiple ? (
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox"
                                        checked={selectedOptions.includes(option.value)}
                                        onChange={() => handleOptionChange(option.value)}
                                    />
                                    <span className="ml-2">{option.label}</span>
                                </label>
                            ) : (
                                <span className="ml-2">{option.label}</span>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdownlist;
