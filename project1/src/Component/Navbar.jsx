import React from 'react';
import { NavLink } from 'react-router-dom';
import { SiAffinitydesigner } from 'react-icons/si';
import { GrTable } from 'react-icons/gr';
import { FaList } from 'react-icons/fa';
import Switch from '../CommonComponent/Switch';
import './Navbar.css';

const Navbar = ({ handleSwitchActive, darkMode }) => {
    return (
        <div className='h-[65px] rounded rounded-t-xl'>
            <div className='navbar h-[40%] w-[100%]'>
                <ul className='items-center flex justify-between px-4 pt-4'>
                    <li className='font-semibold text-[25px] text-gray-500 dark:text-gray-300'>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'active-link dark:text-[#2196f3]' : 'inactive-link')}>
                            <SiAffinitydesigner />
                        </NavLink>
                    </li>
                    <li className='font-semibold text-[25px] text-gray-500 dark:text-gray-300'>
                        <NavLink to='/Screen2' className={({ isActive }) => (isActive ? 'active-link dark:text-[#2196f3]' : 'inactive-link ')}>
                            <GrTable />
                        </NavLink>
                    </li>
                    <li className='font-semibold text-[25px] text-gray-500 dark:text-gray-300'>
                        <NavLink to='/Screen3' className={({ isActive }) => (isActive ? 'active-link dark:text-[#2196f3]' : 'inactive-link')}>
                            <FaList />
                        </NavLink>
                    </li>
                    <li>
                        <Switch onToggle={handleSwitchActive} isActive={darkMode} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
