import React from "react";
import classes from "./Services.module.css"

const Services: React.FC = () => {
    return (
        <div>
            <h1 className={classes.ServicesTitle}>Our services</h1>
            <p className={classes.ServicesDesc}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            <div className={classes.AppHeader}><button onClick={() => {
                alert('clicked');}} className={classes.ServicesButton}>
                    Learn more
                </button>
            </div>
        </div>
    )
}

export default Services;