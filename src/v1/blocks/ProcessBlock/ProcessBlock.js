import React from 'react';
import './ProcessBlock.css';
import {ReactComponent as Logo} from '../../assets/svg/logo.svg'
import BlockTitle from "../../componets/BlockTitle/BlockTitle";
import ArrowSubTitle from "../../componets/ArrowSubTitle/ArrowSubTitle";
import Process from "../../componets/Process/Process";
import {scrollTo} from "../../utils";

export default function ProcessBlock() {
    return <div id="process" className="process-block">
        <BlockTitle title="процесс" color="black"/>
        <Logo className="back-process-logo"/>
        <Process/>
        <ArrowSubTitle title="новости" onClick={()=>scrollTo("news", "center")} isBlack={true}/>
    </div>
}
