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
import Login from '../Login/Login';

import { useLanguageStore } from '../../store';

import english from "../../assets/english.png"
import spain from "../../assets/spain.png"


function NavBar() {

    const [openAbout, setOpenAbout] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [openYouTube, setYouTube] = useState(false);

    const lang = useLanguageStore(state => state.english)

    function toggleSettings() {
        setOpenSettings(!openSettings);
    };
    function toggleProfile() {
        setOpenProfile(!openProfile);
    };
    function toggleAbout() {
        setOpenAbout(!openAbout);
    };
    function toggleYouTube() {
        setYouTube(!openYouTube);
    }

    function changeBackground(e) {
        const fileInput = e.target;
        const file = fileInput.files[0];
        
        if (file) {
            const reader = new FileReader();
    
            reader.onload = function (e) {
              const imageUrl = e.target.result;
              document.getElementById('body').style.backgroundImage = `url(${imageUrl})`;
            };
    
            reader.readAsDataURL(file);
          }
    }

    return (
        <div className={styles.mainBox}>
            <Clock className={styles.clock}/>
            <div>
                <dialog open={openAbout}>
                    <h1>{lang ? "About me" : "Sobre mí"}</h1>
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
                <dialog open={openSettings}>
                    <div className={styles.titleBox}>
                        <h1>{lang ? "Settings" : "Configuración"}</h1>
                    </div>
                    <div>
                        <ul className={styles.settings}>
                            <li>
                                <label>{lang ? "Background" : "Fondo"}</label>
                                <input type="file" accept="image/**" onChange={(e) => changeBackground(e)}/>
                            </li>
                            <li>
                                <label>{lang ? "Language" : "Idioma"}</label>
                                <div className={styles.language}>
                                    <img className={styles.langImg} src={english}/>
                                    <img className={styles.langImg} src={spain}/>
                                </div>
                            </li>
                        </ul>
                        <button className={styles.dialogExit} onClick={() => toggleSettings()}>X</button>
                    </div>

                </dialog>
                <dialog open={openProfile}>
                    <Login toggleProfile={toggleProfile} setOpenProfile={setOpenProfile} openProfile={openProfile}/>
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
                <button onClick={toggleSettings} className={styles.navigation}><GiSettingsKnobs className={styles.navigationImg}/></button>
                <button onClick={toggleProfile} className={styles.navigation}><CiUser className={styles.navigationImg}/></button>
            </div>
        </div>
    );
}

export default NavBar;