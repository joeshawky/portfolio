import React from "react";
import locationImage from "../../assets/icons/location.png";
import styles from "./styles.module.css";
import cv from '../../assets/cv/Youssef_CV.pdf'


export default function HeroSection() {
    const nameSurname = "Youssef Essam";
    const position = "Software Developer";
    const location = "Istanbul, Turkey";
    // const description = `From a hobby to a way of maintaining life. The code has become a
    //             part of me`;
    const description = `Full-stack development focused on performance, 
    clarity, and usability.

`;

    const handleScroll = () => {
        const section = document.getElementById("projects");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const downloadCv = () => {
        const link = document.createElement("a");
        link.href = cv;
        link.download = 'Youssef_Essam_CV.pdf';
        link.click();
    }

    return (
        <section className={styles.hero}>
            <div className={styles.heroCircle}></div>
            <div className={styles.heroGlow}></div>

            <h1 className={styles.heroTitle}>{nameSurname}</h1>
            <p className={styles.heroSubtitle}>{position}</p>
            <div className={styles.heroLocationDiv}>
                <img className={styles.locationIcon} src={locationImage} />
                <p className={styles.heroLocation}>{location}</p>
            </div>
            <p className={styles.heroDescription}>{description}</p>
            <button className={styles.heroButton} onClick={downloadCv}>
                Download CV
            </button>
        </section>
    );
}
