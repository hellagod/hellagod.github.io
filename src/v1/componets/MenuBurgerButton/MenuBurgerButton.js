import React from 'react';
import './MenuBurgerButton.css';

export default function MenuBurgerButton({isActive, onClick}) {

    return <svg id="burger"
                className={`menu-burger-button ${isActive ? "active" : ""}`}
                onClick={onClick}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
    >
        <line className="line top" x1="4" y1="8" x2="28" y2="8"/>
        <line className="line middle" x1="4" y1="16" x2="28" y2="16"/>
        <line className="line bottom" x1="4" y1="24" x2="28" y2="24"/>
    </svg>
}
