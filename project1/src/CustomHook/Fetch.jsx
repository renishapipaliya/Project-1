
import React, { useState, useEffect } from 'react';

const Fetch = () => {
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
  return {     
    setSearchQuery,
      locations,
      setSelectedLocation,
      loading,
      notFound,
      handleSwitchActive ,
      handleActiveFilterToggle,
      searchQuery,
      selectedLocation,
      activeFilter,
      filteredUsers



  }


  
}

export default Fetch