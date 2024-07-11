import React, { useState, useEffect } from 'react';
import Switch from '../CommonComponent/Switch';
import Textfiled from '../CommonComponent/Textfiled';
import Dropdownlist from '../CommonComponent/Dropdownlist';
import Pagination from '../CommonComponent/Pagination';
import Fetch from "../CustomHook/Fetch";

const Screen2 = () => {
    const {
        setSearchQuery,
        locations,
        setSelectedLocation,
        loading,
        notFound,
        handleSwitchActive,
        handleActiveFilterToggle,
        searchQuery,
        selectedLocation, 
        activeFilter,
        filteredUsers,

    } = Fetch("https://dev.carzup.in/api/pricelist/test-mock");

    return (
        <div className='w-[100%] pt-[30px]'>
            <div className='flex items-center justify-between px-4 '>
                <div>
                    
                    <Textfiled 
                        placeholder={"Search"}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} width="w-[27vw]"
                        border={"border-[#d1d5db]"} />
                </div>

                <div>
                    <Dropdownlist
                        options={locations}
                        multiple={false}
                        selectedOptions={selectedLocation}
                        setSelectedOptions={setSelectedLocation}
                    />
                </div>
                <div className=''>
                    <Switch isActive={activeFilter}
                        onToggle={handleActiveFilterToggle} />
                </div>
            </div>

            <div className='pt-4'>
                {loading ? (
                    <div className='text-center '>Loading...</div>
                ) : notFound ? (
                    <div className='text-center py-5'>No users found</div>
                ) : (
                    <table className='rounded-full min-w-[850px] mx-3'>
                        <thead>
                            <tr className='text-[16px] text-gray-700 bg-[#e8ebf6] dark:bg-gray-300'>
                                <th className='p-2 border-b slate-400 rounded-tl-lg dark:border-b slate-600'>Index</th>
                                <th className='p-2 border-b slate-400 dark:border-b slate-600'>NAME</th>
                                <th className='p-2 border-b slate-400 dark:border-b slate-600'>PHONE</th>
                                <th className='p-2 border-b slate-400 dark:border-b slate-600'>E-MAIL</th>
                                <th className='p-2 border-b slate-400 dark:border-b slate-600'>Location</th>
                                <th className='p-2 border-b slate-400 rounded-tr-lg dark:border-b slate-600'>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user, index) => (
                                <tr className='text-[16px] text-gray-700 dark:text-gray-400' key={index}>
                                    <td className='text-center p-3 border-b border-slate-300 dark:border-b dark:border-slate-600'>{index + 1}</td>
                                    <td className='text-center p-3 border-b border-slate-300 dark:border-b dark:border-slate-600'>{user.name}</td>
                                    <td className='text-center p-3 border-b border-slate-300 dark:border-b dark:border-slate-600'>{user.phone}</td>
                                    <td className='text-center p-3 border-b border-slate-300 dark:border-b dark:border-slate-600'>{user.email}</td>
                                    <td className='text-center p-3 border-b border-slate-300 dark:border-b dark:border-slate-600'>{user.location}</td>
                                    <td className='text-center p-3 border-b border-slate-300 dark:border-b dark:border-slate-600'>
                                        <Switch
                                            isActive={user.active}
                                            onToggle={() => handleSwitchActive(index, user.id)}
                                            index={index}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            <Pagination/>
        </div>
    );
};

export default Screen2;
