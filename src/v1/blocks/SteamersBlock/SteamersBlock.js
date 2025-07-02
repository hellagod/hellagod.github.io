import React from 'react';
import './SteamersBlock.css';
import ArrowSubTitle from "../../componets/ArrowSubTitle/ArrowSubTitle";
import BlockTitle from "../../componets/BlockTitle/BlockTitle";
import Streamers from "../../componets/Streamers/Streamers";
import {scrollTo} from "../../utils";
import videoBackground from '../../assets/video/Gradient Lite.mp4';

export default function SteamersBlock() {
    return <div id="streamers" className="steamers-block">
        <div className="steamers-block-content">
            <video className="steamers-block-back-video"
                   src={videoBackground}
                   autoPlay loop
                   muted playsInline
            />
            <BlockTitle title={"стримеры"} color="gray"/>
            <Streamers/>
            <ArrowSubTitle title={"наши клиенты"} onClick={() => {
                scrollTo("clients", "center")
            }} isBlack={false}/>
        </div>
    </div>
}
