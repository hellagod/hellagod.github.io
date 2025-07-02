import React from 'react';
import './ProcessItem.css';

export default function ProcessItem({title, prefix, text}) {
    return <div className="process-item">
        <div className="process-item-header">
            <div className="process-prefix">{prefix}</div>
            <div className="process-title">{title}</div>
        </div>
        <div className="process-text">
            {text}
        </div>
        <div className="process-circle"/>
    </div>
}
