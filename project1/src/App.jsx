import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Screen1 from './Component/Screen1';
import Screen2 from './Component/Screen2';
import Screen3 from './Component/Screen3';
import './App.css';

function App() {
  const savedDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(savedDarkMode ? JSON.parse(savedDarkMode) : false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
  };

  return (
    <>
      <div className='h-[100%]'>
        <div className='w-[98.7vw] flex justify-center'>
          <div className={`my-20 shadow-xl rounded-2xl border ${darkMode ? 'dark:bg-[#151515] dark:text-white dark:border dark:border-gray-900' : ''} w-[880px]`}>
            <Navbar onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <Routes>
              <Route path="/" element={<Screen1 />} />
              <Route path="/Screen2" element={<Screen2 />} />
              <Route path="/Screen3" element={<Screen3 />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
