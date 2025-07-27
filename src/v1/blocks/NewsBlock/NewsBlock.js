import React, {useState, useRef} from "react";
import "./NewsBlock.css";
import {newsItems} from "./news-data";
import BlockTitle from "../../componets/BlockTitle/BlockTitle";
import {ReactComponent as ArrowRight} from "../../assets/svg/arrow-button-right.svg";
import {ReactComponent as ArrowLeft} from "../../assets/svg/arrow-button-left.svg";
import {ReactComponent as Close} from "../../assets/svg/close.svg";
import Slider from "react-slick";
import {scrollTo} from "../../utils";
import ArrowSubTitle from "../../componets/ArrowSubTitle/ArrowSubTitle";
import useScreenSize from "../../hooks/useScreenSize";

export default function NewsBlock() {
    const [modalItem, setModalItem] = useState(null);
    const {width} = useScreenSize();
    let sliderRef = useRef(null);

    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false, speed: 300, slidesToShow: 1, slidesToScroll: 1,
        nextArrow: <></>,
        prevArrow: <></>,
        variableWidth: true,
        infinite: false,
        centerMode: false,
    };

    return (<div id="news" className="news-block">
        <BlockTitle title="новости" color="black"/>

        <div className="news-slider-buttons-cont">
            <ArrowLeft className="arrow-button" onClick={previous}/>
            <ArrowRight className="arrow-button" onClick={next}/>

        </div>
        <Slider ref={slider => {
            sliderRef = slider;
        }} {...settings}>
            {newsItems.map((item, idx) => (<div
                style={{width: width <= 900 ? 323 : 710}}
                key={item.id}
                className="news-block__item"
                onClick={() => {
                    setModalItem(item);
                    document.body.style.overflowY = 'hidden';
                }}
            >
                <img
                    src={item.image}
                    alt={item.title}
                    className="news-block__img"
                />
                <div className="news-block__info">
                    <div className="news-block__date">{item.date}</div>
                    <div className="news-block__title">{item.title}</div>
                    <div className="news-block__preview">{item.preview.slice(0, width <= 900 ? 100 : 170)}...<span className="news-block__read">
                читать далее
              </span></div>

                </div>
            </div>))}
        </Slider>

        {modalItem && (<div
            className="news-modal"
            onClick={() => {
                setModalItem(null)
                document.body.style.overflowY = 'auto';
            }}
        >
            <div
                className="news-modal__content"
                onClick={(e) => e.stopPropagation()}
            >
                <Close
                    className="news-modal__close"
                    onClick={() => {
                        setModalItem(null)
                        document.body.style.overflowY = 'auto';
                    }}
                />
                <img
                    src={modalItem.image}
                    alt={modalItem.title}
                    className="news-modal__img"
                />
                <div className="news-modal-text-cont">
                    <div className="news-modal-text-content">
                        <div className="news-modal__hdr">
                            <div>{modalItem.title}</div>
                            <span>{modalItem.date}</span>
                        </div>
                        <div className="news-modal__body">
                            {modalItem.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>)}
        <ArrowSubTitle title={"пишите нам"} onClick={() => {
            scrollTo("contanct", "end")
        }} isBlack={true}/>
    </div>);
}

