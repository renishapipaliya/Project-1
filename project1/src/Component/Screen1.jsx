import React, { useState } from 'react';

import Text from '../CommonComponent/Text';
import Cartright from '../CommonComponent/Cartright';
import Cart from '../CommonComponent/Cart';
import Textfiled from '../CommonComponent/Textfiled';
import Button from '../CommonComponent/Button';
import Dropdownlist from '../CommonComponent/Dropdownlist';
import DialogBOx from '../CommonComponent/DialogBOx';
import Pagination from '../CommonComponent/Pagination';

const options = [
    { label: 'Grapes', value: 'grapes' },
    { label: 'Mango', value: 'mango' },
    { label: 'Strawberry', value: 'strawberry' },
    { label: 'Banana', value: 'banana' },
];

const Screen1 = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedOptionsQ1, setSelectedOptionsQ1] = useState([]);
    const [selectedOptionsQ2, setSelectedOptionsQ2] = useState([]);
    const [selectedOptionsQ3, setSelectedOptionsQ3] = useState([]);

    const handleDialogOpen = () => {
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            <div className='mx-9 mt-[20px]  h-[100%] '>
                <div className='text-[16px] text-gray-600'>
                    <div className='pt-[23px]'>
                        <div><Text
                            className={
                            "text-gray-800  dark:bg-[#151515] dark:text-gray-200  font-semibold "
                            }
                        >
                            Question1</Text></div>
                        <div className='pt-2'>
                            <Cart title={"A part of the Tata group, India's largest multinational business group, TCS has over 601,000 of the world's best-trained con"} /><br />
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <Textfiled placeholder={"Name"} width="w-[100%]"
                                border={"border-[#d1d5db]"} />
                            <Dropdownlist
                                options={options}
                                multiple={true}
                                selectedOptions={selectedOptionsQ1}
                                setSelectedOptions={setSelectedOptionsQ1}
                            />
                        </div>
                    </div>
                    <div className='pt-[23px]'>
                        <div><Text
                            className={
                                "text-gray-800  dark:bg-[#151515] dark:text-gray-200  font-semibold "
                            }
                        >
                            Question2</Text></div>
                        <div className='pt-2'>
                            <Cartright title={"A part of the Tata group, India's largest multinational business group, TCS has over 601,000 of the world's best-trained con"} /><br />
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <Textfiled placeholder={"Name"} width="w-[100%]"
                                border={"border-[#d1d5db]"} />
                            <Dropdownlist
                                options={options}
                                multiple={false}
                                selectedOptions={selectedOptionsQ2}
                                setSelectedOptions={setSelectedOptionsQ2}
                            />
                        </div>
                    </div>
                    <div className='pt-[23px]'>
                        <div><Text
                            className={
                                "text-gray-800  dark:bg-[#151515] dark:text-gray-200  font-semibold "
                            }
                        >
                            Question3</Text></div>
                        <div className='pt-2'>
                            <Cart title={"A part of the Tata group, India's largest multinational business group, TCS has over 601,000 of the world's best-trained con"} /><br />
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <Textfiled placeholder={"Name"} width="w-[100%]"
                                border={"border-[#d1d5db]"} />
                            <Dropdownlist
                                options={options}
                                multiple={false}
                                selectedOptions={selectedOptionsQ3}
                                setSelectedOptions={setSelectedOptionsQ3}
                            />
                        </div>
                        <div className='flex justify-end px-5 py-8'>
                            <Button onClick={handleDialogOpen}
                            
                                className={"px-6  py-2 mt-3 rounded-lg text-white hover:text-white dark:hover:border-blue-600 border-blue-600 border hover:bg-blue-600 dark:border-secondary"} >
                            DialogBox
                                    </Button>
                        </div>
                    </div>
                </div>
                <Pagination />
            </div>
            <DialogBOx isOpen={isDialogOpen} onClose={handleDialogClose}></DialogBOx>

            
        </>
    );
};

export default Screen1;
