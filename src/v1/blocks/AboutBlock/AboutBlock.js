import React from 'react';
import './AboutBlock.css';
import About from "../../componets/About/About";
import Statistics from "../../componets/Statistics/Statistics";
import ArrowSubTitle from "../../componets/ArrowSubTitle/ArrowSubTitle";
import {scrollTo} from "../../utils";

export default function AboutBlock() {
    return <div id="about" className="about-block">
        <About/>
        <Statistics/>
        <ArrowSubTitle title={"стримеры"} onClick={()=> scrollTo("streamers", "center")}/>
    </div>
}
