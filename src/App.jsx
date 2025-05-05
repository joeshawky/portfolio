import "./App.css";
import locationImage from "./assets/icons/location.png";
import projectOne from "./assets/images/projectOne.png";

function App() {
    return (
        <div className="app">
            <section className="hero">
                <div className="hero-circle"></div>
                <div className="hero-glow"></div>

                <h1 className="hero-title">Yusuf Essam</h1>
                <p className="hero-subtitle">Software Developer</p>
                <div className="hero-location-div">
                    <img className="location-icon" src={locationImage} />
                    <p className="hero-location">Istanbul, Turkey</p>
                </div>
                <p className="hero-description">
                    From a hobby to a way of maintaining life. The code has
                    become a part of me
                </p>
                <button className="hero-button">View Projects</button>
            </section>

            <section className="experience">
                <svg
                    id="svg-one"
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
                    id="svg-two"
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
                <h2>Experience</h2>
                <div className="timeline">
                    <div className="timeline-mid-line"></div>
                    <div className="timeline-box"></div>
                    <div className="circle left"></div>
                    <p className="timeline-date">Oct 2022 - Oct 2022</p>
                    <p className="timeline-date">Oct 2022 - Oct 2022</p>
                    <div className="circle right"></div>
                    <div className="timeline-box"></div>
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
                            <stop stop-color="#0B0A10" />
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

                <h2>Projects</h2>
                <div className="project-cards">
                    {Array(5)
                        .fill()
                        .map((_, index) => (
                            <div
                                className="project-card"
                                key={index}
                                style={{
                                    backgroundImage: `url(${projectOne})`,
                                }}
                            >
                                <h3>PROJECT ONE</h3>
                                <p>
                                    lorem ipsum uit amet connected samia
                                    dostia...
                                </p>
                                <p className="round">Round 2</p>
                            </div>
                        ))}
                </div>
            </section>

            <div className="mountains"></div>
        </div>
    );
}

export default App;
