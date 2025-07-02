import React from 'react';
import './CaseBlock.css';
import BlockTitle from "../../componets/BlockTitle/BlockTitle";
export default function CaseBlock() {
    return <div id="cases" className="case-block">
        <BlockTitle title="кейсы" color="black"/>
        <div className="case-cont">
            <div className="case">
                <div className="case-img"/>
                <div className="case-title">
                    BETBOOM <br/>
                    STREAMERS BATTLE #10
                </div>
            </div>
            <div className="case">
                <div className="case-img"/>
                <div className="case-title">
                    BETBOOM <br/>
                    STREAMERS BATTLE #9
                </div>
            </div>
            <div className="case">
                <div className="case-img"/>
                <div className="case-title">
                    BETBOOM <br/>
                    STREAMERS BATTLE #8
                </div>
            </div>
        </div>
    </div>
}
