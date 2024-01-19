import React from 'react';
import styles from "./Settings.module.css";
import { ImCancelCircle } from "react-icons/im";


function Settings() {
    return (
        <div className={styles.mainBox}>
            <div className={styles.titleBox}>
                <p>Settings</p>
                <p><ImCancelCircle/></p>
            </div>
            <div className={styles.settingsContent}>
                <ul className={styles.settingsScroll}>
                    <li>Profile</li>
                    <li>Background</li>
                    <li>Clock</li>
                </ul>
                <div className={styles.settingsInfo}>

                </div>
            </div>
        </div>
    );
}

export default Settings;