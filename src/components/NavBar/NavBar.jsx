import React from 'react';
import styles from "./NavBar.module.css"
import {useState} from "react";
import Clock from "../Clock/Clock"
import { GiSettingsKnobs } from "react-icons/gi";
import { AiOutlineQuestion } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { ImCancelCircle } from "react-icons/im"
import linkedinLogo from "../../assets/linkedinColored.png";
import githubLogo from "../../assets/githubColored.png";
import OtherThings from '../OtherThings/OtherThings';

import { useLanguageStore } from '../../store';


function NavBar() {

    const [openAbout, setOpenAbout] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [openYouTube, setYouTube] = useState(false);

    const lang = useLanguageStore(state => state.english)

    function toggleProfile() {
        setOpenProfile(!openProfile);
    };
    function toggleAbout() {
        setOpenAbout(!openAbout);
    };
    function toggleYouTube() {
        setYouTube(!openYouTube);
    }

    return (
        <div className={styles.mainBox}>

            <Clock className={styles.clock}/>

            <div>
                <dialog open={openAbout}>
                    <h1 className={styles.aboutMe}>{lang ? "About me" : "Sobre mí"}</h1>
                    <p>Hi! I'm <label className={styles.aboutName}>Juan Martín Salinas</label>, a Front-end developer from Argentina. I created this SPA since I felt I needed a new look in my
                       browser. Feel free to use it whenever you like; the deployed version uses LocalStorage and Zustand to save everything you do
                       here :)</p>
                    <p>If you want to know more about me, you can find me in:</p>
                    <div>
                        <a target="_blank" href="https://www.linkedin.com/in/juanmartinsalinas/"><img className={styles.techLogos} src={linkedinLogo} alt="linkedin"/></a>
                        <a target="_blank" href="https://github.com/JuanMartinSalinas"><img className={styles.techLogos} src={githubLogo} alt="github"/></a>
                    </div>
                    <button className={styles.dialogExit} onClick={() => toggleAbout()}>X</button>
                </dialog>

                <dialog open={openProfile}>
                    <OtherThings toggleProfile={toggleProfile} setOpenProfile={setOpenProfile} openProfile={openProfile}/>
                </dialog>

                <dialog open={openYouTube}>
                    <h1>The official Coffee Girl playlist</h1>
                    <p>Want to chill a bit? Then take a cup of coffee (or tea!) and click in the video below to hear the most relaxing playlist you'll
                       ever found. You can close this dialog and the video will keep playing until you close the Coffee Girl main page.</p>
                    <iframe className={styles.ytVideo} src="https://www.youtube.com/embed/QwkosFlW0Hk"/>
                    <button className={styles.dialogExit} onClick={() => toggleYouTube()}>X</button>
                </dialog>
            </div>
            
            <div className={styles.navBar}>
                <button onClick={toggleYouTube} className={styles.navigation}><PiYoutubeLogoThin className={styles.navigationImg}/></button>
                <button onClick={toggleAbout} className={styles.navigation}><AiOutlineQuestion className={styles.navigationImg}/></button>
                <button onClick={toggleProfile} className={styles.navigation}><CiUser className={styles.navigationImg}/></button>
            </div>

        </div>
    );
}

export default NavBar;