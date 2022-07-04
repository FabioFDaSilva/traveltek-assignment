import React from "react"
import styles from "./home.module.scss";
import logo from "../../app/logo/logo.png";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                </div>
            </div>

        </div>
    )
}

export default Home