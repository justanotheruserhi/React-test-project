import React from "react";
import classes from "./MobileApp.module.css"
import './fonts/Mulish-VariableFont_wght.ttf';

const MobileApp: React.FC = () => {
    return (
        <div className={classes.MobileApp}>
            <div className={classes.MobileAppText}>
                <h1 className={classes.MobileAppTitle}>Download our mobile apps</h1>
                <p className={classes.MobileAppDesc}>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
                <div><button onClick={() => {
                alert('clicked');}} className={classes.MobileAppButton}>
                    Download
                </button>
                </div>
            </div>
            <img src={'src/assets/MobileApp.png'} className={classes.MobileAppImg} alt="MobileApp" />
        </div>
    )
}

export default MobileApp;