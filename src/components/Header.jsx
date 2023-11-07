import React from "react";
import styles from "../styles/header.module.css";

import Logo from "./UI/Logo";
import MyButton from "./UI/Button";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo>CherryGames</Logo>

            <nav className={styles.signButtons}> 
                <MyButton color="yellow">Sign In</MyButton>
                <MyButton color="orange">Sign Up</MyButton>
            </nav>
        </header>
    );
};

export default Header