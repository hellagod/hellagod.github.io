import './App.css';
import {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import FontFaceObserver from 'fontfaceobserver';
import MainBlock from "../../blocks/MainBlock/MainBlock";
import AboutBlock from "../../blocks/AboutBlock/AboutBlock";
import SteamersBlock from "../../blocks/SteamersBlock/SteamersBlock";
import ClientsBlock from "../../blocks/ClientsBlock/ClientsBlock";
import ProcessBlock from "../../blocks/ProcessBlock/ProcessBlock";
import ContanctBlock from "../../blocks/ContanctBlock/ContanctBlock";
import Footer from "../../blocks/Footer/Footer";
import usePreloadImages from "../../hooks/usePreloadImages";
import TeamBlock from "../../blocks/TeamBlock/TeamBlock";
import NewsBlock from "../../blocks/NewsBlock/NewsBlock";
import CaseBlock from "../../blocks/CaseBlock/CaseBlock";


const fontsToLoad = [
    {family: 'DrukWideCyr-Bold', weight: 700},
    {family: 'DrukWideCyr-Medium', weight: 500},
    {family: 'DrukWideCyr-Super', weight: 400},
];


function App() {


    const isReady = usePreloadImages()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const observers = fontsToLoad.map(({family, weight}) => {
            return new FontFaceObserver(family, {weight})
                .load(null, 5000);  // таймаут 5 сек
        });

        Promise.all(observers)
            .then(() => {
                setIsLoaded(true);
            })
            .catch(() => {
                setIsLoaded(true);
            });
    }, []);



    return <>
        <Helmet>
            {/*<link rel="icon" href={mode ? dark : light}/>*/}
            <title>GABE MEDIA</title>
            <meta name="description" content="GABE MEDIA - Погружаем в мир стриминга и киберспорта"/>
            <meta itemProp="name" content="GABE MEDIA"/>
            <meta itemProp="description" content="GABE MEDIA - Погружаем в мир стриминга и киберспорта"/>
            <meta property="og:title" content="GABE MEDIA"/>
            <meta property="og:description" content="GABE MEDIA - Погружаем в мир стриминга и киберспорта"/>
            <meta name="twitter:title" content="GABE MEDIA"/>
            <meta name="twitter:description" content="GABE MEDIA - Погружаем в мир стриминга и киберспорта"/>
        </Helmet>
        {isLoaded && isReady ? <>
            <div className="app" style={{overflowY: 'auto'}}>
                <div className="main-back"/>
                <div className="filter"/>
                <div className="app-content">
                    <MainBlock/>
                    <AboutBlock/>
                    <SteamersBlock/>
                    <ClientsBlock/>
                    {/*<CaseBlock/>*/}
                    {/*<TeamBlock/>*/}
                    <ProcessBlock/>
                    <NewsBlock/>
                    <ContanctBlock/>
                    <Footer/>
                </div>
            </div>
        </> : <></>}
    </>
}

export default App;
