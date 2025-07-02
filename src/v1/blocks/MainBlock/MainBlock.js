import React from 'react';
import './MainBlock.css';
import Header from "../../componets/Header/Header";
import ArrowSubTitle from "../../componets/ArrowSubTitle/ArrowSubTitle";
import {scrollTo} from "../../utils";

export default function MainBlock() {
    return <div id="main" className="main-block">
        <Header/>
        <div className="mood-img"/>
        <div className="game-begin">
            game begin
        </div>
        <ArrowSubTitle title={" о нас"} onClick={() => scrollTo("about")} className="mobile"/>
    </div>
}
