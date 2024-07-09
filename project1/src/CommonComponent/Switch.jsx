import React from 'react';
import './Switch.css';

const Switch = ({ isActive, onToggle, index, id }) => {
    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={isActive}
                onChange={() => onToggle(index, id)}
            />
            <span className="slider"></span>
        </label>
    );
};

export default Switch;
