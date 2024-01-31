import React from "react";
import classes from "./AppFooter.module.css"
import './fonts/Mulish-VariableFont_wght.ttf';

const AppFooter: React.FC = () => {
    return (
        <footer className={classes.AppFooter}>
            <div></div>
            <div className={classes.Company}>
                <h6 className={classes.FooterTitle}>Company</h6>
                <p className={classes.FooterText}>About</p>
                <p className={classes.FooterText}>Testimonials</p>
                <p className={classes.FooterText}>Find a doctor</p>
                <p className={classes.FooterText}>Apps</p>
            </div>
            <div className={classes.Region}>
                <h6 className={classes.FooterTitle}>Region</h6>
                <p className={classes.FooterText}>Indonesia</p>
                <p className={classes.FooterText}>Singapore</p>
                <p className={classes.FooterText}>Hongkong</p>
                <p className={classes.FooterText}>Canada</p>
            </div>
            <div className={classes.Help}>
                <h6 className={classes.FooterTitle}>Help</h6>
                <p className={classes.FooterText}>Help center</p>
                <p className={classes.FooterText}>Contact support</p>
                <p className={classes.FooterText}>Instructions</p>
                <p className={classes.FooterText}>How it works</p>
            </div>
        </footer>
    )
}

export default AppFooter;