import React from 'react';
import './Statistics.css';
import StatisticsItem from "../StatisticsItem/StatisticsItem";

let stats = [
    {
        title: "1000+",
        text: <>блогеров в&nbsp;нашей базе, готовых продвигать ваш бренд</>
    },
    {
        title: "5 лет",
        text: <>опыта в&nbsp;создании цифровых стратегий и&nbsp;креативных решений</>
    },
    {
        title: "500+",
        text: <>успешных кампаний в&nbsp;сфере игр, стриминга и&nbsp;киберспорта</>
    },
    {
        title: "24/7",
        text: <>поддержка и&nbsp;контроль всех этапов кампании</>
    },

]

export default function Statistics() {
    return <div className="statistics">
        <div className="statistics-cont">
        {stats.map(st => <StatisticsItem {...st}/>)}
        </div>
    </div>
}
