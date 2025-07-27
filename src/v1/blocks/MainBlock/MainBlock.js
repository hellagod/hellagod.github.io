import React, {useEffect} from 'react';
import './MainBlock.css';
import Header from "../../componets/Header/Header";
import ArrowSubTitle from "../../componets/ArrowSubTitle/ArrowSubTitle";
import {scrollTo} from "../../utils";

export default function MainBlock() {

    useEffect(() => {
        const classNames = ['arrow-sub-title', 'rfm-marquee', 'statistics-item',
            'streamer-button', 'streamer-item', 'process-item', 'block-title', 'news-block__item',
            'footer-links', 'logo-32321', 'contanct-left', 'contanct-right', 'group-2087326563',
            'group-2-merged-1', 'group-1-merged-1', 'footer-logo', 'input-contact', 'button',
            'news-slider-buttons-cont', 'masked-video', 'about-text-div', 'back-process-logo',
            'arrow-sub-title', 'news-modal__content'];
        const selector = classNames.map(c => `.${c}`).join(', ');
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => el.style.opacity = 0);


        const onScroll = () => {
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top+100 < window.innerHeight && rect.bottom > 0) {
                    el.classList.add('animate');
                }
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        // return () => observer.disconnect();
    }, []);

    return <div id="main" className="main-block">
        <Header/>
        <div className="mood-img"/>
        <div className="game-begin">
            game begin
        </div>
        <ArrowSubTitle title={" о нас"} onClick={() => scrollTo("about")} className="mobile"/>
    </div>
}
