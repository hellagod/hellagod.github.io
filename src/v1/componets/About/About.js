import React from 'react';
import './About.css';
import BlockTitle from "../BlockTitle/BlockTitle";
import Marquee from "react-fast-marquee";
import videoBackground from "../../assets/video/Gradient Lite.mp4";

export default function About() {
    return <div className="about">
        <BlockTitle title={"о нас"} color="black"/>
        <div className="about-text">
            <video className="masked-video"
                   src={videoBackground}
                   autoPlay loop
                   muted playsInline
            />

            <div>
                — это рекламное агентство полного цикла, опытная команда, которая сопровождает вас на всех этапах, от разработки стратегии до успешного запуска рекламных кампаний в сфере игр, стриминга и киберспорта
            </div>
        </div>
        <Marquee className="about-marquee" autoFill={true}>
            {["стримерам", "брендам", "блогерам", "киберспортсменам"].map(tag => <div
                className="about-tag"
            >
                <div className="about-tag-circle"/>
                <span>{tag}</span>
            </div>)}
        </Marquee>
    </div>
}
