import React from 'react';
import styles from "./NavBar.module.css"
import Clock from "../Clock/Clock"
import { IoSettingsOutline  } from "react-icons/io5";
import { PiSealQuestionBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

function handleConfig() {

};

function handleProfile() {

};

function handleAbout() {

};


function NavBar() {
    return (
        <div className={styles.mainBox}>
            <Clock className={styles.clock}/>
            <div className={styles.navBar}>
                <button onClick={handleAbout} className={styles.navigation}><PiSealQuestionBold className={styles.navigationImg}/></button>
                <button onClick={handleConfig} className={styles.navigation}><IoSettingsOutline className={styles.navigationImg}/></button>
                <button onClick={handleProfile} className={styles.navigation}><CgProfile className={styles.navigationImg}/></button>
            </div>
        </div>
    );
}

export default NavBar;