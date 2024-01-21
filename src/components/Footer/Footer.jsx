import React from 'react';
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerText}>Created by Juan Martín Salinas</p>
        </footer>
    );
}

export default Footer;