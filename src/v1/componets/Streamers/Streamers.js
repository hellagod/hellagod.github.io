import React, {useState, useEffect, useRef} from "react";
import "./Streamers.css";
import StreamerItem from "../StreamerItem/StreamerItem";
import streamers from "./streamers_data";
import useScreenSize from "../../hooks/useScreenSize";
import CarouselDots from "../CarouselDots/CarouselDots";
import StreamerButtom from "../StreamerButtom/StreamerButtom";

const autoSlideIntervalMs = 5_000;
const PAUSE_DELAY = 10_000;

export default function Streamers() {
    const {width} = useScreenSize();
    const ref = useRef(null);

    const names = Object.keys(streamers);
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoSlideRef = useRef(null);
    const autoDelaySlideRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % names.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + names.length) % names.length);
    };


    useEffect(() => {
        if (ref.current) {
            const classNames = ['streamer-button'];
            const selector = classNames.map(c => `.${c}`).join(', ');
            const elements = document.querySelectorAll(selector);


            const onScroll = () => {
                elements.forEach(el => {
                    const rect = el.getBoundingClientRect();
                    if (rect.top + 100 < window.innerHeight && rect.bottom > 0) {
                        el.classList.add('animate');
                    }
                });
            };

            ref.current.addEventListener('scroll', onScroll, {passive: true});
            onScroll();
        }
    }, [])

    const startAutoSlide = () => {
        stopAutoSlide();
        autoDelaySlideRef.current = setTimeout(() => {
            autoSlideRef.current = setInterval(() => {
                nextSlide();
            }, autoSlideIntervalMs);
        }, PAUSE_DELAY);
    };

    const stopAutoSlide = () => {
        if (autoSlideRef.current) {
            clearInterval(autoSlideRef.current);
            autoSlideRef.current = null;
        }
        if (autoDelaySlideRef.current) {
            clearTimeout(autoDelaySlideRef.current)
            autoDelaySlideRef.current = null;
        }
    };

    useEffect(() => {
        startAutoSlide();
        return () => {
            stopAutoSlide();
        };
    }, [currentIndex, startAutoSlide]);


    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.clientX;
        stopAutoSlide();
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current || startX.current === null) return;
    };

    const handleMouseUp = (e) => {
        if (!isDragging.current || startX.current === null) return;
        const diff = e.clientX - startX.current;
        if (diff > 50) {
            prevSlide();
        } else if (diff < -50) {
            nextSlide();
        }
        isDragging.current = false;
        startX.current = null;
        startAutoSlide();
    };

    const handleMouseLeave = (e) => {
        if (isDragging.current) {
            handleMouseUp(e);
        }
    };

    const handleTouchStart = (e) => {
        isDragging.current = true;
        startX.current = e.touches[0].clientX;
        stopAutoSlide();
    };

    const handleTouchMove = (e) => {
        if (!isDragging.current || startX.current === null) return;
    };

    const handleTouchEnd = (e) => {
        if (!isDragging.current || startX.current === null) return;
        const diff = e.changedTouches[0].clientX - startX.current;
        if (diff > 50) {
            prevSlide();
        } else if (diff < -50) {
            nextSlide();
        }
        isDragging.current = false;
        startX.current = null;
        startAutoSlide();
    };

    return (<div
        className="streamers"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
    >

        {width < 1100 ? <div
                className="slides-track"
                style={{transform: `translateX(calc(calc(-${currentIndex * 100}%) - calc(${currentIndex} * var(--padd))))`}}
            >
                {names.map((name, index) => (
                    <StreamerItem {...streamers[names[index]]} />
                ))}
            </div> :
            <StreamerItem {...streamers[names[currentIndex]]} />}

        <button
            className="prev-button"
            onClick={() => {
                prevSlide();
                stopAutoSlide();
                startAutoSlide();
            }}
        >
        </button>
        <button
            className="next-button"
            onClick={() => {
                nextSlide();
                stopAutoSlide();
                startAutoSlide();
            }}
        >
        </button>

        <div className="streamer-button-cont" ref={ref}>
            {names.map((name, index) => (<StreamerButtom name={name} onClick={() => {
                setCurrentIndex(index);
                stopAutoSlide();
                startAutoSlide();
            }} isActive={index === currentIndex}/>))}
        </div>
        {width < 1100 ? <CarouselDots totalItems={names.length} activeIndex={currentIndex}
                                      onNext={nextSlide} onPrev={prevSlide} visibleCount={11}/> : ""}
    </div>);
}
