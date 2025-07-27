import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './CarouselDots.css'
import {ReactComponent as ArrowR} from "../../assets/svg/arrow-r.svg";
import {ReactComponent as ArrowL} from "../../assets/svg/arrow-l.svg";

export default function CarouselDots({
                                         activeIndex,
                                         totalItems,
                                         visibleCount = 5,
                                         onPrev,
                                         onNext
                                     }) {

    const [dots, setDots] = useState([])

    useEffect(() => {
        const half = Math.floor(visibleCount / 2); // 3

        let start = activeIndex - half; // 2
        if (start < 0) start = 0;
        if (start + visibleCount > totalItems) {
            start = Math.max(0, totalItems - visibleCount);
        }
        let newDots = [];
        const count = Math.min(visibleCount, totalItems);
        for (let i = 0; i < count; i++) {
            const idx = start + i;
            newDots.push(
                <span
                    key={i}
                    className={
                        'carousel-dot' + (idx === activeIndex ? ` carousel-dot--active-${idx%2}` : '')
                    }
                />
            );
        }
        setDots(newDots)
    }, [activeIndex, totalItems, visibleCount]);


    return <div className="carousel-pagination">
        <button
            type="button"
            className="carousel-arrow carousel-arrow--left"
            onClick={onPrev}
            disabled={activeIndex === 0}
        >
            <ArrowL/>
        </button>

        <div className="carousel-dots">
            {dots}
        </div>

        <button
            type="button"
            className="carousel-arrow carousel-arrow--right"
            onClick={onNext}
            disabled={activeIndex === totalItems - 1}
        >
            <ArrowR/>
        </button>
    </div>
}

CarouselDots.propTypes = {
    activeIndex: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    visibleCount: PropTypes.number,
    onPrev: PropTypes.func,
    onNext: PropTypes.func,
};

CarouselDots.defaultProps = {
    visibleCount: 5,
    onPrev: () => {
    },
    onNext: () => {
    },
};
