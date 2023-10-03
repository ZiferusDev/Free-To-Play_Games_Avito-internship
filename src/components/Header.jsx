import React from "react";
import styles from "../styles/header.module.css";

import pacLogo from "../media/Logotype.svg"

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.logotype} alt="Logotipe" src={pacLogo} />
                <div className={styles.siteName}>CherryGames</div>
            </div>
            {/* <div className={styles.options}>
                <div className={styles.menuItem}>
                    <div className={styles.textWrapper}>Option</div>
                </div>
                <div className={styles.menuItem}>
                    <div className={styles.textWrapper}>Option</div>
                </div>
                <div className={styles.menuItem}>
                    <div className={styles.textWrapper}>Contacts</div>
                </div>
            </div> */}
            <div className={styles.signButtons}>
                {/* Прикольно было бы вынести кнопку как отдельный компонент
                и прокидывать тот же onClick в пропсах вместе со стилями,
                но проекту это не нужно, кнопки всего две, и те декоративные  */}
                <div className={styles.signInBtn} onClick={ () => {alert("No such functional yet, sorry")} }> 
                    Sign In
                </div>
                <div className={styles.signUpBtn} onClick={ () => {alert("No such functional yet, sorry")} }>
                    Sign Up
                </div>
            </div>
        </div>
    );
};

export default Header