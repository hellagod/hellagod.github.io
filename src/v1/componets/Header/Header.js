import React, {useCallback, useEffect, useState} from 'react';
import './Header.css';
import {ReactComponent as Logo} from '../../assets/svg/logo.svg'
import useScreenSize from "../../hooks/useScreenSize";
import MenuBurgerButton from "../MenuBurgerButton/MenuBurgerButton";
import {scrollTo} from "../../utils";


export default function Header() {
    const {width} = useScreenSize()
    const [isCompact, setIsCompact] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsCompact(width <= 1200)
    }, [width]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    function Menu() {
        return <div className="menu">
            <div className="menu-item" onClick={() => {
                setIsMenuOpen(false);
                scrollTo("about")
            }}> о нас
            </div>

            <div className="menu-item" onClick={() => {
                setIsMenuOpen(false);
                scrollTo("streamers", "center")
            }}> стримеры
            </div>
            <div className="menu-item" onClick={() => {
                setIsMenuOpen(false);
                scrollTo("clients", "center")
            }}> клиенты
            </div>
            <div className="menu-item" onClick={() => {
                setIsMenuOpen(false);
                scrollTo("cases", "center")
            }}> кейсы
            </div>
            <div className="menu-item" onClick={() => {
                setIsMenuOpen(false);
                scrollTo("team", "center")
            }}> команда
            </div>
        </div>
    }

    const onEsc = useCallback(e => {
        if (e.key === 'Escape') setIsMenuOpen(false);
    }, []);
    useEffect(() => {
        if (!isMenuOpen) return;
        window.addEventListener('keydown', onEsc);
        return () => window.removeEventListener('keydown', onEsc);
    }, [isMenuOpen, onEsc]);

    return <>
        <header className="header">
            <Logo className="logo"/>
            {!isCompact ? <>
                <Menu/>
                <div className="header-button" onClick={()=> {
                    setIsMenuOpen(false);
                    scrollTo("contanct", "center")
                }}>
                    <div className="header-button-text"> связаться с нами</div>
                </div>
            </> : <MenuBurgerButton
                isActive={isMenuOpen}
                onClick={() => setIsMenuOpen(prev => !prev)}
            />
            }
        </header>
        <div
            className={`overlay ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
        >
            <nav
                className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}
                onClick={e => e.stopPropagation()}
            >
                <Menu/>
                <div className="menu-contact-cont">
                    <div className="menu-contact" onClick={()=>{
                        setIsMenuOpen(false);
                        scrollTo("contanct", "center")
                    }}>связаться с нами</div>
                    <div className="menu-contacts">
                        <a className="menu-contacts-item" href="mailto:info@gabemadia.ru">
                            <div >почта</div>
                        </a>
                        <a className="menu-contacts-item" href="https://t.me/GabeMediaBot">
                            <div>телеграм</div>
                        </a>
                    </div>
                </div>
            </nav>

        </div>
    </>

}
