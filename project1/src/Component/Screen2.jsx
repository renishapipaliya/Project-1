import React, { useState, useEffect } from 'react';
import Switch from '../CommonComponent/Switch';
import Textfiled from '../CommonComponent/Textfiled';
import Dropdownlist from '../CommonComponent/Dropdownlist';
import Pagination from '../CommonComponent/Pagination';

const Screen2 = () => {
    const [users, setUsers] = useState([]);
    const [locations, setLocations] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [activeFilter, setActiveFilter] = useState(false);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    

    useEffect(() => {
        fetch("https://dev.carzup.in/api/pricelist/test-mock")
            .then(response => response.json())
            .then(data => {
                if (data.data && Array.isArray(data.data)) {
                    setUsers(data.data);
                    extractUniqueLocations(data.data);
                    setFilteredUsers(data.data);
                } else {
                    console.error("Unexpected data format", data);
                }
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        setLoading(true);
        const results = users.filter(user =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (selectedLocation.length === 0 || selectedLocation.includes(user.location)) &&
            (!activeFilter || user.active === activeFilter)
        );
        setFilteredUsers(results);
        setNotFound(results.length === 0);
        setLoading(false);
    }, [searchQuery, users, selectedLocation, activeFilter]);

    const handleSwitchActive = (index, id) => {
        const updatedUsers = [...filteredUsers];
        updatedUsers[index].active = !updatedUsers[index].active;
        setFilteredUsers(updatedUsers);

        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            const newUsersData = [...users];
            newUsersData[userIndex] = { ...newUsersData[userIndex], active: updatedUsers[index].active };
            setUsers(newUsersData);
        }

        console.log(`Toggled switch for user with id: ${id}`);
    };

    const extractUniqueLocations = (data) => {
        const uniqueLocations = [...new Set(data.map(item => item.location))];
        const options = uniqueLocations.map(location => ({ label: location, value: location }));
        setLocations(options);
    };

    const handleActiveFilterToggle = () => {
        setActiveFilter(prevFilter => !prevFilter);
    };

    return (
        <div className='w-[100%] pt-[30px]'>
            <div className='flex items-center justify-evenly px-4'>
                <div>
                    <Textfiled
                        placeholder={"Search"}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
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
