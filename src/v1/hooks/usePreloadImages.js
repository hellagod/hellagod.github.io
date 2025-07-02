// hooks/usePreloadImages.js
import { useEffect, useState } from 'react';

export default function usePreloadImages(urls = []) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (!urls.length) return;

        let loaded = 0;
        urls.forEach(src => {
            const img = new Image();
            img.onload = img.onerror = () => {
                if (++loaded === urls.length) setReady(true);
            };
            img.src = src;
        });
    }, [urls]);

    return ready;
}
