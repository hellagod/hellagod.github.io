import {useEffect, useState} from "react";

export default function useScreenSize() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (width <= 900)
            setIsMobile(true)
        else
            setIsMobile(false)
    }, [width]);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {width, height, isMobile, setWidth, setHeight}

}