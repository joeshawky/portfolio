import React, { useEffect, useRef } from "react";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import gsap from "gsap";

import pythonImage from "../../assets/icons/python.png";
import cplusplusImage from "../../assets/icons/cplusplus.png";
import jsImage from "../../assets/icons/js.png";
import reactImage from "../../assets/icons/react.png";

import styles from './styles.module.css'


function initializeIconsAnimation(refs) {
    refs.forEach((ref, i) => {
        gsap.to(ref.current, {
            duration: 8,
            repeat: -1,
            ease: "linear",
            motionPath: {
                path: "#skillsPath",
                align: "#skillsPath",
                alignOrigin: [0.5, 0.5],
                start: i / refs.length, // evenly spaced
                end: i / refs.length + 1,
            },
        });
    });
}

export default function SkillsSection() {

    const imagesWithRefs = [
        { src: cplusplusImage, ref: useRef() },
        { src: jsImage, ref: useRef() },
        { src: reactImage, ref: useRef() },
        { src: pythonImage, ref: useRef() },
    ];

    const width = useWindowWidth();

    useEffect(() => {
        const refs = imagesWithRefs.map(i => i.ref);
        initializeIconsAnimation(refs);
    }, []);

    return (
        <section className={styles.skillsSection}>
            <h2 className={styles.title}> SKILLS</h2>
            <svg
                className={styles.svgSkills}
                viewBox="0 0 1440 486"
                fill="none"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
            >
                <path
                    d="M1440 0.999974C1440 0.999974 1373.45 -6.25684 1245 46C1116.55 98.2567 999.96 192.706 840 216C643.743 244.58 503.47 161.245 340 136C176.53 110.755 0 236 0 236V486C0 486 204.668 413.106 340 386C582.326 337.463 598.785 525.119 840 466C1008.82 424.624 1080.06 362.783 1245 296C1326.11 263.159 1440 251 1440 251V0.999974Z"
                    fill="white"
                />
                <path
                    id="skillsPath"
                    d="M1494.5 1.50001C1494.5 1.50001 1373.45 -7.25679 1245 45C1116.55 97.2568 999.96 191.706 840 215C643.743 243.58 503.47 160.245 340 135C176.53 109.755 -78 266 -78 266"
                    // stroke="red"
                    // strokeWidth={"5px"}
                    transform="translate(0, 125)"
                />
            </svg>
            <div className={styles.content}>
                {imagesWithRefs.map(({ src, ref }) => (
                    <div className={styles.iconWrapper} ref={ref}>
                        <img className={styles.iconImg} src={src} />
                    </div>
                ))}
            </div>
        </section>
    );
}
