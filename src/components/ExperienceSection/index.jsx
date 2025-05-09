import React from "react";
import styles from "./styles.module.css";

function Svgs() {
    return (
        <>
            <svg
                className={styles.svgOne}
                viewBox="0 0 1440 1171"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1517 281.425C1517 281.425 1448.54 -36.2231 1325 3.42518C1201.46 43.0735 910.144 249.198 756.302 266.872C567.55 288.556 350.218 150.579 193 131.425C35.7821 112.272 -169 349.425 -169 349.425V1025.36V1170.74C-169 1170.74 25.9496 1091.9 156.106 1071.33C389.165 1034.5 524.311 1175.37 756.302 1130.51C918.664 1099.12 994.803 1018.57 1153.43 967.9C1231.44 942.983 1377 943.425 1377 943.425L1517 281.425Z"
                    fill="url(#paint0_linear_16_10)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_16_10"
                        x1="636"
                        y1="133.425"
                        x2="636"
                        y2="1177.43"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0B0A10" />
                        <stop offset="0.5" stop-color="#0D0E12" />
                        <stop offset="1" stop-color="#100F16" />
                    </linearGradient>
                </defs>
            </svg>
            <svg
                className={styles.svgTwo}
                viewBox="0 0 1440 1045"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1471 10.1213C1471 10.1213 1363.87 -18.0347 1235.42 21.6136C1106.96 61.2619 998.056 122.885 838.097 140.559C641.839 162.243 499.196 102.251 335.726 83.0972C172.256 63.9434 -124 198.02 -124 198.02V899.048V1044.43C-124 1044.43 78.7018 965.583 214.034 945.017C456.36 908.191 596.881 1049.06 838.097 1004.2C1006.91 972.81 1086.08 892.257 1251.02 841.587C1332.13 816.67 1460.6 785.849 1460.6 785.849L1471 10.1213Z"
                    fill="url(#paint0_linear_16_34)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_16_34"
                        x1="673.5"
                        y1="0.425354"
                        x2="673.5"
                        y2="1044.43"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0B0A10" />
                        <stop offset="0.5" stop-color="#08090E" />
                        <stop offset="1" stop-color="#100F16" />
                    </linearGradient>
                </defs>
            </svg>
        </>
    );
}

function Card({ row, position, companyName, tasks, isLeft = false }) {
    return (
        <div
            className={styles.timelineBox}
            style={{
                gridRow: `${row} / span 1`,
                gridColumn: `${isLeft ? `1 / span 1` : `3 / span 1`}`,
                borderLeft: `${isLeft ? `2px solid white` : ""}`,
                borderRight: `${isLeft ? `` : "2px solid white"}`,
                background: `linear-gradient(to ${
                    isLeft ? "left" : "right"
                }, #0F0F15, rgba(255, 255, 255, 0.05))`,
            }}
        >
            <h1 className={styles.position}>{position}</h1>
            <p
                className={styles.companyName}
                style={{
                    alignSelf: isLeft ? "flex-end" : "flex-start",
                }}
            >
                {companyName}
            </p>
            <ul className={styles.tasks}>
                {tasks.map((task, idx) => (
                    <li key={idx} className={styles.task}>
                        {task}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function ExperienceSection() {
    const experiences = [
        {
            companyName: "Letna Marine",
            position: "Software Developer",
            date: "feb 2023 - current",
            tasks: [
                `Developed new features in Pyrot (QGroundControl) using C++ and QML with the Qt Framework.`,
                `Added support for multi-camera streaming, audio recording, and custom sensors.`,
                `Redesigned the user interface to improve ROV operator experience and clarity.`,
            ],
            isLeft: true,
        },
        {
            companyName: "Lagari UAV Club",
            position: "Software Developer",
            date: "jan 2022 - jun 2022",
            tasks: [
                "Developed Python scripts for real-time image recognition to detect red-colored targets.",
                "Implemented GPS geolocation and automated target coordinate transmission.",
                "Contributed to UAV navigation and payload drop system during flight missions.",
            ],
            isLeft: false,
        },
    ];

    return (
        <section className={styles.experience}>
            <Svgs />
            <div className={styles.content}>
                <h2 className={styles.title}>EXPERIENCE</h2>
                <div className={styles.timeline}>
                    <div className={styles.timelineMidLine}></div>

                    {experiences.map((experience, index) => (
                        <>
                            <Card
                                position={experience.position}
                                companyName={experience.companyName}
                                row={index + 1}
                                tasks={experience.tasks}
                                isLeft={experience.isLeft}
                                key={index}
                            />
                            {experience.isLeft ? (
                                <>
                                    <div
                                        className={`${styles.circle} ${styles.circleLeft}`}
                                        style={{
                                            gridRow: `${index + 1} / span 1`,
                                        }}
                                    ></div>
                                    <p
                                        className={styles.timelineDate}
                                        style={{
                                            gridRow: `${index + 1} / span 1`,
                                            gridColumn: `${`3 / span 1`}`,
                                        }}
                                    >
                                        {experience.date}
                                    </p>
                                </>
                            ) : (
                                <>
                                    <div
                                        className={`${styles.circle} ${styles.circleRight}`}
                                        style={{
                                            gridRow: `${index + 1} / span 1`,
                                        }}
                                    ></div>
                                    <p
                                        className={styles.timelineDate}
                                        style={{
                                            gridRow: `${index + 1} / span 1`,
                                            gridColumn: `${`1 / span 1`}`,
                                        }}
                                    >
                                        {experience.date}
                                    </p>
                                </>
                            )}
                        </>
                    ))}
                </div>
                <p className={styles.toBeContinued}>To be continued...</p>
            </div>
        </section>
    );
}
