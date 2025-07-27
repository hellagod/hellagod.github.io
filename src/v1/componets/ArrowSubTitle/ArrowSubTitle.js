import React from 'react';
import './ArrowSubTitle.css';
import {ReactComponent as Arrow} from "../../assets/svg/arrow.svg";

export default function ArrowSubTitle({title, onClick, isBlack=true, className=""}) {
    return <div className={`arrow-sub-title animate ${className}`} onClick={onClick}>
        <Arrow className="arrow"/>
        <div className={`arrow-sub-title-text ${isBlack ? 'black' : ""}`}>{title}</div>
    </div>
}
