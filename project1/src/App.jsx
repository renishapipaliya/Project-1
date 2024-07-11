import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Screen1 from './Component/Screen1';
import Screen2 from './Component/Screen2';
import Screen3 from './Component/Screen3';
import './App.css';
import useDarkMode from './CustomHook/Darkmode';

function App() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [isSwitchActive, setIsSwitchActive] = useState(false);

  const handleSwitchActive = () => {
    const nextMode = darkMode === "dark" ? "light" : "dark";
    setIsSwitchActive(!isSwitchActive);
    setDarkMode(nextMode);
  };

  return (
    <div className={`h-[100%] dark:bg-dark  ${darkMode}`}>
      <div className='w-[98.7vw] flex justify-center'>
        <div className={`my-20 shadow-xl rounded-2xl border ${darkMode === 'dark' ? 'dark:bg-[#151515] dark:text-white dark:border dark:border-gray-950' : ''} w-[880px]`}>
          <Navbar handleSwitchActive={handleSwitchActive} darkMode={isSwitchActive} />
          <Routes>
            <Route path="/" element={<Screen1 />} />
            <Route path="/Screen2" element={<Screen2 />} />
            <Route path="/Screen3" element={<Screen3 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
