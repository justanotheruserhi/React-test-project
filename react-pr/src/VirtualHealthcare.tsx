import React from "react";
import classes from "./VirtualHealthcare.module.css"
import './fonts/Mulish-VariableFont_wght.ttf';

const VirtualHealthcare: React.FC = () => {
    return (
        <div className={classes.VirtualHealthcare}>
            <div className={classes.HealthcareText}>
                <h1 className={classes.HealthcareTitle}>Virtual healthcare for you</h1>
                <p className={classes.HealthcareDesc}>Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                <div><button onClick={() => {
                alert('clicked');}} className={classes.VirtualHealthcareButton}>
                    Consult today
                </button>
                </div>
            </div>
            <img src={'src/assets/VirtualHealthcare.png'} className={classes.HealthcareImg} alt="VirtualHealthcareImg" />
        </div>
    )
}

export default VirtualHealthcare;