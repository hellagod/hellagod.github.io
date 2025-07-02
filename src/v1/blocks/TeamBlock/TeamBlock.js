import React, {useState} from 'react';
import './TeamBlock.css';
import Img from '../../assets/png/team.png'
import BlockTitle from "../../componets/BlockTitle/BlockTitle";
import team from './team-data'
import {scrollTo} from "../../utils";
import ArrowSubTitle from "../../componets/ArrowSubTitle/ArrowSubTitle";
import useScreenSize from "../../hooks/useScreenSize";
import AnimateHeight from 'react-animate-height';

function HoverDot({title, role, items}) {
    return (
        <div className="dot-wrapper">
            <div className="dot"/>
            <div className="ring"/>
            <div className="popup">
                <div className="popup-title">{title}</div>
                <div className="popup-role">{role}</div>
                <ul className="popup-list">
                    {items.map((i) => (
                        <li key={i}>{i}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function Teammate({title, role, items}) {
    const [height, setHeight] = useState(0);
    return (
        <div className="teammate">
            <div className="teammate-img"/>
            <div className="teammate-title">{title}</div>
            <div className={`teammate-circle ${height !== 0 ? 'open':""}`}/>
            <div className="teammate-role"
                 onClick={() => setHeight(height === 0 ? 'auto' : 0)}
            >
                {role}
                <svg className="vector-6" width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 0.5L5.5 4.5L10.5 0.5" stroke="#808080" strokeLinecap="round"/>
                </svg>
            </div>
            <AnimateHeight
                id="example-panel"
                duration={300}
                height={height}
            >
                <ul className="teammate-list">
                {items.map((i) => (
                        <li key={i}>{i}</li>
                    ))}
                </ul>
            </AnimateHeight>
        </div>
    );
}


export default function TeamBlock() {
    const {width} = useScreenSize()
    return <div id="team" className="team-block">
        <BlockTitle title={"команда"} color="black"/>
        {
            width > 900 ? <>
                    <img src={Img} className="team-image" alt=""/>
                    <div className="dots">
                        {team.map(t => <HoverDot {...t}/>)}
                    </div>
                </> :
                <div className="team-grid">
                    {team.map(t => <Teammate {...t}/>)}
                </div>}
        <ArrowSubTitle title="процесс" onClick={() => scrollTo("process", "center")} isBlack={true}/>
    </div>

}
