import React from 'react';
import './Footer.css';
import BlockTitle from "../../componets/BlockTitle/BlockTitle";
import {ReactComponent as Logo} from "../../assets/svg/logo.svg";

export default function Footer() {
    return <div id="footer" className="footer">
        <BlockTitle title="контакты"/>
        <div className="footer-links">
            <a href="mailto:info@gabemadia.ru">
                <div className="link">почта</div>
            </a>
            <a href="https://t.me/GabeMediaBot">
                <div className="link">телеграм</div>
            </a>
        </div>
        <div className="footer-logo">
            <Logo/>
            2025 all rights reserved
        </div>
    </div>
}
