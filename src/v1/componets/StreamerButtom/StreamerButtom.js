import React, {useEffect, useRef} from 'react';
import './StreamerButtom.css';

export default function StreamerButtom({name, onClick, isActive}) {
    const ref = useRef(null)

    useEffect(() => {
        if (ref.current) {
            if (isActive) {
                ref.current.className += " active"
            }
            else {
                ref.current.className = ref.current.className.replaceAll(' active', '')
            }
        }
    }, [isActive]);
    return <div
        ref={ref}
        key={name}
        className="streamer-button"
        onClick={onClick}
    >
        {name}
    </div>
}
