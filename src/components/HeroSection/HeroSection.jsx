import React from "react";
import locationImage from "../../assets/icons/location.png";
// import cv from '/assets/cv/Youssef_CV.pdf'

export default function HeroSection() {
  const nameSurname = "Youssef Essam";
  const position = "Software & Embedded Systems Engineer";
  const location = "Istanbul, Turkey";
  // const description = `From a hobby to a way of maintaining life. The code has become a
  //             part of me`;
  const description = `Building high-performance software and embedded systems.`;

  const scrollToProjectsSection = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative z-1 flex flex-col gap-2 pt-40">
      <div className="absolute top-8 left-1/2 -z-1 h-[min(80vw,425px)] w-[min(85vw,480px)] -translate-x-1/2 rounded-[50%] bg-[red] bg-[linear-gradient(to_bottom,#181521,#07070D)] shadow-[0_-20px_30px_rgba(255,255,255,0.4)] blur-[0.5px]"></div>
      <div className="absolute top-[calc(2rem-1px)] left-1/2 -z-2 h-[min(80vw,425px)] w-[min(85vw,480px)] -translate-x-1/2 rounded-[50%] bg-white blur-[1px]"></div>

      <h1 className="font-hero-title px-4 [font-size:var(--fs-5)] [font-weight:300]">
        {nameSurname}
      </h1>

      <p className="font-hero-subtitle text-subtitle my-2 [font-size:var(--fs-3)]">
        {position}
      </p>
      <div className="flex items-center gap-2 self-center">
        <img className="h-6" src={locationImage} />
        <p className="font-sansation-light text-subtitle [font-size:var(--fs-1)] [font-weight:300]">
          {location}
        </p>
      </div>
      <p className="font-sansation-light text-subtitle mx-auto my-8 px-8 [font-size:var(--fs-2)]">
        {description}
      </p>
      <a
        className={
          "font-inter w-fit self-center rounded-lg border border-solid border-[#787878] px-8 py-4 [font-size:var(--fs-1)] text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
        }
        href="/assets/cv/Youssef_CV.pdf"
        download={"Youssef_Essam_CV.pdf"}
      >
        Download CV
      </a>
    </section>
  );
}
