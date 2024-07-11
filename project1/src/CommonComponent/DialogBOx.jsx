import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import Text from './Text';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DialogBox = ({ isOpen, onClose }) => {

    const notify = () => {
        toast("Saved successfully");
        onClose();
    };

    return (
        <>
            <ToastContainer />
            <div
                className={`fixed inset-0 w-full h-full bg-[rgba(7,7,7,0.5)] flex justify-center items-center ${isOpen ? "block" : "hidden"}`}
            >
                <div className="bg-gray-100 dark:bg-[#151515] dark:text-white h-[40%] w-[45%] rounded-[8px] p-4">
                    <div className="flex justify-end">
                        <button onClick={onClose} className="text-gray-800 dark:text-white hover:text-gray-600 focus:outline-none">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>

                    <div className='flex font-semibold justify-center'>
                       
                        <Text
                            className={
                                "text-gray-800  dark:bg-[#151515] dark:text-gray-200  font-semibold "
                            }
                        >
                            Pago rechazado</Text>
                    </div>

                    <div className=' flex justify-center items-center py-5 flex-col text-gray-600 font-serif mt-6 dark:text-white'>
                        <h1>Hubo un error al procesar tu pago, no se realizó ningún cargo</h1>
                        <h1>Por favor vuelve a intentarlo con otra tarjeta</h1>
                    </div>

                    <div className='flex justify-center my-5'>
                        <Button onClick={notify}
                            
                            className={"px-6  py-2 rounded-lg text-white hover:text-white dark:hover:border-blue-600 border-blue-600 border hover:bg-blue-600 dark:border-secondary"} >
                                Save

                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DialogBox;
