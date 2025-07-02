import React from 'react';
import './StatisticsItem.css';

export default function StatisticsItem({title, text}) {
    return <div className="statistics-item">
        <div className="stats-title">{title}</div>
        <div className="stats-text">{text}</div>
        <div className="stats-circle">
        </div>
    </div>
}
