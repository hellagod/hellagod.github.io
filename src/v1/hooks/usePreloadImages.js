import {useEffect, useState} from 'react';
import imges from "../assets/png";

const urls = [
    ...Object.values(imges)
]

export default function usePreloadImages() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (urls.length === 0) {
            setReady(true);
            return;
        }

        Promise
            .all(
                urls.map(src =>
                    new Promise(res => {
                        const img = new Image();
                        img.onload = img.onerror = () => res();
                        img.src = src;
                    })
                )
            )
            .then(() => setReady(true));
    }, [urls]);

    return ready;
}
