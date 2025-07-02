import React from 'react';
import './BlockTitle.css';

export default function BlockTitle({title, color=""}) {
    return <div className="block-title" >
        <div className="block-title-circle"/>
        <div className={`block-title-text ${color}`}>{title}</div>
    </div>
}
