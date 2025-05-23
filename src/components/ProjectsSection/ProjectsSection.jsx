import React from "react";
import styles from "./styles.module.css";
import code from "../../assets/images/code.svg";
import redirect from "../../assets/images/topRight.svg";
import pyrot from "../../assets/images/pyrot.png";
import ticTacToe from "../../assets/images/ticTacToe.png";
import memoryCardGame from "../../assets/images/memoryCardGame.png";
import kneeRehabUi from "../../assets/images/kneeRehabUi.png";
import cvCreator from "../../assets/images/cvCreator.png";

export default function ProjectsSection({ style }) {
    const projects = [
        {
            title: "Pyrot - QGroundControl Based Ground Station for ROV Operations",
            imageSrc: pyrot,
            // githubLink: `https://github.com/yourusername/project`,
            // demoLink: `https://project.demo.com`,
            description: `Forked and customized the open-source QGroundControl 
ground control software to meet the operational needs of Lenta Marine's 
underwater ROV systems.

Implemented advanced features including multi-camera streaming, 
audio recording, integration of custom sensors, and a fully 
redesigned user interface to optimize operator workflow and 
mission clarity. The application was developed using the Qt 
Framework, with QML for the frontend and C++ for backend logic.`,
        },
        {
            title: "Knee Rehab Robot Control App (Graduation Project)",
            imageSrc: kneeRehabUi,
            githubLink: `https://github.com/joeshawky/knee-rehab-app?tab=readme-ov-file`,
            description: (
                <>
                    A cross-platform Qt application built with QML on the
                    frontend and C++ on the backend, developed as part of my
                    graduation project for controlling a knee rehabilitation
                    robot. The project was accepted into the TÜBİTAK 2209-B
                    Industry-Oriented Undergraduate Research Projects Support
                    Program.
                    <br />
                    <br />
                    This application acts as the main user interface to
                    communicate with a Raspberry Pi over Bluetooth, enabling
                    real-time motor control and feedback. It is deployable on
                    both desktop and Android thanks to the flexibility of the Qt
                    Framework.
                </>
            ),
        },
        {
            title: "CV Creator - A Simple Browser-Based Resume Builder",
            imageSrc: cvCreator,
            githubLink: `https://github.com/joeshawky/odin-cv-creator`,
            demoLink: `https://joeshawky.github.io/odin-cv-creator/`,
            description: (
                <>
                    A clean and user-friendly application that allows users to
                    enter their personal, educational, and professional details,
                    and generate a formatted CV that can be printed as a PDF.
                </>
            ),
        },
        {
            title: "Tic Tac Toe - Browser-Based Game Implementation",
            imageSrc: ticTacToe,
            githubLink: `https://github.com/joeshawky/odin-tic-tac-toe`,
            demoLink: `https://joeshawky.github.io/odin-tic-tac-toe/`,
            description: (
                <>
                    Developed a fully interactive Tic Tac Toe game using HTML,
                    CSS, and vanilla JavaScript as part of The Odin Project web
                    development curriculum. The project focuses on DOM
                    manipulation, game logic implementation, and responsive
                    layout without relying on external libraries or frameworks.
                </>
            ),
        },
        {
            title: "Memory Card Game - React-Based Score Challenge",
            imageSrc: memoryCardGame,
            githubLink: `https://github.com/joeshawky/odin-memory-card`,
            demoLink: `https://joeshawky.github.io/odin-memory-card/`,
            description: (
                <>
                    Built an interactive memory card game using React as part of
                    The Odin Project web development curriculum.
                    <br />
                    <br />
                    The game challenges users to click on unique cards without
                    repetition, with cards being shuffled after each round to
                    increase difficulty. Features include dynamic state
                    management with React hooks, score tracking, and responsive
                    card layout.
                </>
            ),
        },
    ];

    return (
        <section id="projects" className={styles.projects} style={style}>
            <svg
                className={styles.svgThree}
                viewBox="0 0 1440 1376"
                fill="none"
                preserveAspectRatio="none"
            >
                <path
                    d="M1478 12.7794C1478 12.7794 1370.87 -24.3305 1242.42 27.9263C1113.96 80.183 1005.06 161.402 845.096 184.697C648.839 213.277 506.196 134.207 342.726 108.962C179.256 83.7173 -117 260.431 -117 260.431V1184.39V1376C-117 1376 85.7018 1272.09 221.034 1244.98C463.36 1196.44 603.881 1382.11 845.096 1322.99C1013.91 1281.61 1093.08 1175.44 1258.02 1108.66C1339.13 1075.82 1467.6 1035.19 1467.6 1035.19L1478 12.7794Z"
                    fill="url(#paint0_linear_24_13)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_24_13"
                        x1="680.5"
                        y1="0"
                        x2="680.5"
                        y2="1376"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#0B0A10" />
                        <stop offset="0.5" stopColor="#08090E" />
                        <stop offset="1" stopColor="#100F16" />
                        {/* <stop stopColor="#00F" /> */}
                        {/* <stop offset="0.5" stopColor="#00F" /> */}
                        {/* <stop offset="1" stopColor="#00F" /> */}
                    </linearGradient>
                </defs>
            </svg>
            <h2>PROJECTS</h2>
            <div className={styles.projectCards}>
                {projects.map((project, index) => (
                    <div className={styles.projectCard} key={index}>
                        <img
                            src={project.imageSrc}
                            className={styles.cardImage}
                        />
                        <p className={styles.description}>
                            {project.description}
                        </p>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <div className={styles.anchors}>
                            {project.githubLink && (
                                <img
                                    src={code}
                                    className={styles.codeLink}
                                    onClick={() =>
                                        window.open(
                                            project.githubLink,
                                            "_blank"
                                        )
                                    }
                                />
                            )}
                            {project.demoLink && (
                                <img
                                    src={redirect}
                                    className={styles.redirectLink}
                                    onClick={() =>
                                        window.open(project.demoLink, "_blank")
                                    }
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
