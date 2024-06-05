import React from "react";
import classes from "./Header.module.css"
import clsx from "clsx";
import './fonts/Mulish-VariableFont_wght.ttf';

const Header: React.FC = () => {
    return (
        <header className={classes.AppHeader}>
            <div className={classes.logo}>
              <div className={classes.icon}>T</div>
              <div className={classes.text}>HealthCare</div>
            </div>
            <nav className={classes.navigation}>
              <a className={
                  clsx(classes.navigationElement,
                  classes.boldFont)
              }>Home</a>
              <a className={
                  clsx(classes.navigationElement,
                  classes.regularFont)
              }>Find a doctor</a>
              <a className={
                  clsx(classes.navigationElement,
                  classes.regularFont)
              }>Apps</a>
                <a className={
                  clsx(classes.navigationElement,
                    classes.regularFont)
              }>Testimonials</a>
                <a className={
                  clsx(classes.navigationElement,
                    classes.regularFont)
                }>About us</a>
            </nav>
        </header>
    )
}

export default Header;