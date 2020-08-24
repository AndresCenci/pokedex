import React from 'react';
import './Switch.css';

const Switch = () => {
    return (
        <label className="switch">
            <input className="switch-input" type="checkbox" />
            <span className="switch-label" data-on="ES" data-off="EN"></span> 
            <span className="switch-handle"></span> 
        </label>
    )
}

export default Switch;