import React from 'react';
import './Button.css';

export default function Button({name, color, back, onClick}) {
    return <div className={`button ${color} back-${back}`} onClick={onClick}>
        {name}
    </div>
}
