import "./App.css";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";

import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Footer from "./components/Footer/Footer";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";

gsap.registerPlugin(useGSAP, MotionPathPlugin); // register the hook to avoid React version discrepancies

function App() {
    const sectionGaps = '5rem';

    return (
        <div className="app">
            <HeroSection />
            <ExperienceSection style={{marginTop: sectionGaps}}/>
            <SkillsSection style={{marginTop: sectionGaps}}/>
            <ProjectsSection style={{marginTop: sectionGaps}}/>
            <Footer style={{marginTop: '15rem'}}/>
        </div>
    );
}

export default App;
