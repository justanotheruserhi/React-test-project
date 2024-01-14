import React from "react";
import classes from "./Header.module.css"

const VirtualHealthcare: React.FC = () => {
    return (
        <div>
            <h1>Virtual healthcare for you</h1>
            <p>Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
            <img src={'./VirtualHealthcare.png'} alt="VirtualHealthcareImg" />
            <div><button onClick={() => {
                alert('clicked');}}>
                    Consult today
                </button>
            </div>
        </div>
    )
}

export default VirtualHealthcare;