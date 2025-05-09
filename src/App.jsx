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
