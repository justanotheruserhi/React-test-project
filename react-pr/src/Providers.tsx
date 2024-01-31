import React from "react";
import classes from "./Providers.module.css"
import './fonts/Mulish-VariableFont_wght.ttf';

const Providers: React.FC = () => {
    return (
        <div className={classes.Providers}>
            <img src={'src/assets/HealthCareProviders.png'} className={classes.HealthcareImg} alt="HealthcareImg" />
            <div className={classes.ProvidersText}>
                <h1 className={classes.ProvidersTitle}>Leading healthcare providers</h1>
                <p className={classes.ProvidersDesc}>We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
                <div><button onClick={() => {
                alert('clicked');}} className={classes.ProvidersButton}>
                    Learn more
                </button>
            </div>
            </div>
        </div>
    )
}

export default Providers;