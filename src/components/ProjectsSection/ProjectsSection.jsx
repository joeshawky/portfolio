import React from "react";
import styles from "./styles.module.css";
import projectOne from "../../assets/images/projectOne.png";
import code from "../../assets/images/code.svg";
import redirect from "../../assets/images/topRight.svg";

function Svgs() {
    return (
        <>
            <svg
                className={styles.svgThree}
                viewBox="0 0 1440 1376"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
                        <stop offset="0.5" stop-color="#08090E" />
                        <stop offset="1" stop-color="#100F16" />
                        {/* <stop stop-color="#00F" /> */}
                        {/* <stop offset="0.5" stop-color="#00F" /> */}
                        {/* <stop offset="1" stop-color="#00F" /> */}
                    </linearGradient>
                </defs>
            </svg>
            <svg
                className={styles.svgFour}
                viewBox="0 0 1440 1547"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1471 14.3675C1471 14.3675 1363.87 -27.3542 1235.42 31.3967C1106.96 90.1477 998.056 181.46 838.097 207.649C641.839 239.781 499.196 150.885 335.726 122.503C172.256 94.1211 -124 292.796 -124 292.796V1331.58V1547C-124 1547 78.7018 1430.17 214.034 1399.7C456.36 1345.13 596.881 1553.86 838.097 1487.4C1006.91 1440.88 1086.08 1321.52 1251.02 1246.43C1332.13 1209.51 1460.6 1163.84 1460.6 1163.84L1471 14.3675Z"
                    fill="url(#paint0_linear_24_14)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_24_14"
                        x1="673.5"
                        y1="0"
                        x2="673.5"
                        y2="1547"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0B0A10" />
                        <stop offset="0.5" stop-color="#08090E" />
                        <stop offset="1" stop-color="#100F16" />
                        {/* <stop stop-color="#F00" /> */}
                        {/* <stop offset="0.5" stop-color="#F00" /> */}
                        {/* <stop offset="1" stop-color="#F00" /> */}
                    </linearGradient>
                </defs>
            </svg>
        </>
    );
}

export default function ProjectsSection() {
    const projects = Array(5)
        .fill()
        .map((_, i) => ({
            title: "My project",
            imageSrc: projectOne,
            githubLink: `https://github.com/yourusername/project`,
            demoLink: `https://project.demo.com`,
            description: `lorem ipsum uit amet connected samia dosti
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Veniam fugit nostrum sunt
                                    voluptates incidunt ab cumque enim nemo`,
        }));

    return (
        <section className={styles.projects}>
            <Svgs />
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
                            <img
                                src={code}
                                className={styles.codeLink}
                                onClick={() =>
                                    window.open(project.githubLink, "_blank")
                                }
                            />
                            <img
                                src={redirect}
                                className={styles.redirectLink}
                                onClick={() =>
                                    window.open(project.demoLink, "_blank")
                                }
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
