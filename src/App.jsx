import "./App.css";
import locationImage from "./assets/icons/location.png";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";



import gsap from "gsap";
import {} from "gsap/";

import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useWindowWidth } from "./hooks/useWindowWidth";
import Footer from "./components/Footer/Footer";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";

gsap.registerPlugin(useGSAP, MotionPathPlugin); // register the hook to avoid React version discrepancies

function App() {
    const pythonRef = useRef();
    const jsRef = useRef();
    const reactRef = useRef();
    const cplusplusRef = useRef();
    const refs = [pythonRef, jsRef, reactRef, cplusplusRef];

    // const imagesWithRefs = [
    //     { src: cplusplusImage, ref: cplusplusRef },
    //     { src: jsImage, ref: jsRef },
    //     { src: reactImage, ref: reactRef },
    //     { src: pythonImage, ref: pythonRef },
    // ];

    // const width = useWindowWidth();

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
            <SkillsSection/>
            <ProjectsSection/>
            <Footer/>
        </div>
    );
}

export default App;
