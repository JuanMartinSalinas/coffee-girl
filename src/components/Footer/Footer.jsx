import React from 'react';
import styles from "./Footer.module.css"
import { useLanguageStore } from '../../store';

function Footer() {

    const lang = useLanguageStore((state) => state) 

    return (
        <footer className={styles.footer}>
            <p className={styles.footerText}>{lang ? "Created by Juan Martín Salinas" : "Creado por Juan Martín Salinas"}</p>
        </footer>
    );
}

export default Footer;