// src/CommonComponent/Pagination.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";



const Pagination = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const pages = [
        { name: '1', path: '/' },
        { name: '2', path: '/Screen2' },
        { name: '3', path: '/Screen3' },
    ];

    const getPageIndex = (path) => {
        return pages.findIndex(page => page.path === path);
    };

    const currentPageIndex = getPageIndex(currentPath);
    const previousPage = currentPageIndex > 0 ? pages[currentPageIndex - 1].path : null;
    const nextPage = currentPageIndex < pages.length - 1 ? pages[currentPageIndex + 1].path : null;

    return (
        <div className='flex justify-center my-5'>
            {previousPage && (
                <Link to={previousPage} className='mx-1 px-3 py-3'>
                    
                    <IoIosArrowBack />


                </Link>
            )}
            {pages.map((page, index) => (
                <Link
                    key={index}
                    to={page.path}
                    className={`mx-1 px-3 my-2 ${currentPath === page.path ? 'bg-blue-500 text-white dark:bg-blue-500 dark:border border-none ' : ''}`}
                >
                    {page.name}
                </Link>
            ))}
            {nextPage && (
                <Link to={nextPage} className='mx-1 px-3 py-3'>
                    <IoIosArrowForward />
                </Link>
            )}
        </div>
    );
};

export default Pagination;
