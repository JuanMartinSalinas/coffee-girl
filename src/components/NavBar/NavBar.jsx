import React from 'react';
import styles from "./NavBar.module.css"
import {useState} from "react";
import Clock from "../Clock/Clock"
import { IoSettingsOutline  } from "react-icons/io5";
import { PiSealQuestionBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

function NavBar() {

    const [openAbout, setOpenAbout] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);

    function toggleConfig() {
        setOpenSettings(!openSettings);
    };
    function toggleProfile() {
        setOpenProfile(!openProfile);
    };
    function toggleAbout() {
        setOpenAbout(!openAbout);
    };
    

    return (
        <div className={styles.mainBox}>
            <Clock className={styles.clock}/>
            <div>
                <dialog open={openAbout}>
                    <h1>About me</h1>
                    <p>Lorem ipsum dolor et siamet</p>
                    <button onClick={() => toggleAbout()}>X</button>
                </dialog>
                <dialog open={openSettings}>
                    <h1>Settings</h1>
                    <p>Lorem ipsum dolor et siamet</p>
                    <button onClick={() => toggleConfig()}>X</button>
                </dialog>
                <dialog open={openProfile}>
                    <h1>Profile</h1>
                    <p>Lorem ipsum dolor et siamet</p>
                    <button onClick={() => toggleProfile()}>X</button>
                </dialog>
            </div>
            <div className={styles.navBar}>
                <button onClick={toggleAbout} className={styles.navigation}><PiSealQuestionBold className={styles.navigationImg}/></button>
                <button onClick={toggleConfig} className={styles.navigation}><IoSettingsOutline className={styles.navigationImg}/></button>
                <button onClick={toggleProfile} className={styles.navigation}><CgProfile className={styles.navigationImg}/></button>
            </div>
        </div>
    );
}

export default NavBar;