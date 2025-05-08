import "./App.css";
import locationImage from "./assets/icons/location.png";
import projectOne from "./assets/images/projectOne.png";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import pythonImage from "./assets/icons/python.png";
import cplusplusImage from "./assets/icons/cplusplus.png";
import jsImage from "./assets/icons/js.png";
import reactImage from "./assets/icons/react.png";
import code from "./assets/images/code.svg";
import redirect from "./assets/images/topRight.svg";

import gsap from "gsap";
import {} from "gsap/";

import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useWindowWidth } from "./hooks/useWindowWidth";

gsap.registerPlugin(useGSAP, MotionPathPlugin); // register the hook to avoid React version discrepancies

function App() {
    const pythonRef = useRef();
    const jsRef = useRef();
    const reactRef = useRef();
    const cplusplusRef = useRef();
    const refs = [pythonRef, jsRef, reactRef, cplusplusRef];

    const imagesWithRefs = [
        { src: cplusplusImage, ref: cplusplusRef },
        { src: jsImage, ref: jsRef },
        { src: reactImage, ref: reactRef },
        { src: pythonImage, ref: pythonRef },
    ];

    const width = useWindowWidth();

    useEffect(() => {
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
    }, []);

    return (
        <div className="app">
            <HeroSection />
            <ExperienceSection />
            <section className="skillsSection">
                <h2 className="title">SKILLS</h2>
                <svg
                    className="svgSkills"
                    viewBox="0 0 1440 486"
                    fill="none"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
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
                <div className="content">
                    <div className="iconWrapper" ref={pythonRef}>
                        <img className="iconImg" src={pythonImage} />
                    </div>
                    <div className="iconWrapper" ref={reactRef}>
                        <img className="iconImg" src={reactImage} />
                    </div>
                    <div className="iconWrapper" ref={jsRef}>
                        <img className="iconImg" src={jsImage} />
                    </div>
                    <div className="iconWrapper" ref={cplusplusRef}>
                        <img className="iconImg" src={cplusplusImage} />
                    </div>
                </div>
            </section>

            <section className="projects">
                <svg
                    id="svg-three"
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
                    id="svg-four"
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

                <h2>PROJECTS</h2>
                <div className="projectCards">
                    {Array(5)
                        .fill()
                        .map((_, index) => (
                            <div className="projectCard" key={index}>
                                <img src={projectOne} className="cardImage" />
                                <div></div>
                                <p className="description">
                                    lorem ipsum uit amet connected samia dosti
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Veniam fugit nostrum sunt
                                    voluptates incidunt ab cumque enim nemo
                                </p>
                                <h3 className="projectTitle">PROJECT ONE</h3>
                                <div className="anchors">
                                    <img src={code} className="codeLink" />
                                    <img
                                        src={redirect}
                                        className="redirectLink"
                                    />
                                </div>
                            </div>
                        ))}
                </div>
            </section>

            <div className="mountains"></div>
        </div>
    );
}

export default App;
