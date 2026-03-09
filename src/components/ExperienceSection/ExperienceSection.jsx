import React, { useEffect, useRef, useState } from "react";
import { debounce } from "../../utilities/debounce";

function Svgs() {
  return (
    <>
      <svg
        className="absolute top-[-30vh] left-0 -z-3 w-[120%]"
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
            <stop stopColor="#0B0A10" />
            <stop offset="0.5" stopColor="#0D0E12" />
            <stop offset="1" stopColor="#100F16" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className="absolute top-0 left-0 -z-2 w-[120%]"
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
            <stop stopColor="#0B0A10" />
            <stop offset="0.5" stopColor="#08090E" />
            <stop offset="1" stopColor="#100F16" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}

function Card({
  row,
  position,
  companyName,
  tasks,
  isLeft = false,
  date,
  ref,
}) {
  const timelineBoxStyles = isLeft
    ? "col-start-1 border-l-2 bg-[linear-gradient(to_left,#0f0f15,rgba(255,255,255,0.05))]"
    : "col-start-3 border-r-2 bg-[linear-gradient(to_right,#0f0f15,rgba(255,255,255,0.05))] max-[750px]:border-r-0 max-[750px]:border-l-2 max-[750px]:border-l-solid max-[750px]:border-l-white max-[750px]:bg-[linear-gradient(to_left,#0f0f15,rgba(255,255,255,0.05))]";
  return (
    <div
      className={`${timelineBoxStyles} row-start-${row} col-span-1 row-span-1 flex max-w-150 flex-col gap-2 rounded-lg p-[min(2rem,6vw)] pr-[min(1rem,3vw)] max-[750px]:col-1`}
      ref={row === 1 ? ref : null}
    >
      <h1 className="font-inter self-start [font-size:var(--position-size)]">
        {position}
      </h1>
      <div className="flex justify-between gap-8">
        <p className="font-inter self-start [font-size:var(--company-size)] [font-weight:300] italic">
          {companyName}
        </p>

        <p className="font-inter text-end [font-size:var(--company-size)] [font-weight:200] whitespace-nowrap text-white italic min-[750px]:hidden">
          {date}
        </p>
      </div>
      <ul className="flex list-disc flex-col gap-4 pl-4">
        {tasks.map((task, idx) => (
          <li
            key={idx}
            className="font-inter text-left [font-size:var(--tasks-size)] tracking-[0.1rem]"
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperienceSection({ style }) {
  const firstCardRef = useRef(null);
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    if (!firstCardRef.current) return;

    const card = firstCardRef.current;

    const debouncedUpdate = debounce(() => {
      setOffsetTop(card.offsetHeight / 2);
      console.log(`Called debounced function`);
    }, 50);

    const observer = new ResizeObserver(debouncedUpdate);
    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      companyName: "Technomind Digital Systems",
      position: "Software Engineer",
      date: "June 2025 - Current",
      tasks: [
        "Built the control software for a digital pathology device, combining frontend, backend, and hardware integration to enable high performance imaging.",
        "Built and maintained the web control interface using React, TypeScript, and Tailwind CSS to provide real time device control.",
        ,
        "Improved autofocus and scanning algorithms, achieving an 818% increase in scanning speed and significantly enhancing device performance.",
        "Worked closely with hardware engineers to align software optimizations with device capabilities, improving system reliability.",
        "Refactored legacy codebases into clean, modular components, boosting maintainability and enabling faster feature development.",
      ],
    },
    {
      companyName: "Letna Marine",
      position: "Software Developer",
      date: "Feb 2023 - June 2025",
      tasks: [
        "Extended an open source ROV control application using C++ and QML within the Qt Framework to add new features and improve functionality.",
        "Implemented multi camera streaming, audio recording, and custom sensor integration to enhance real time ROV operation.",
        "Redesigned the user interface to improve UI/UX, providing clearer visualization of sensor data and enhancing operator efficiency.",
      ],
    },
    {
      companyName: "Lagari UAV Club",
      position: "Software Developer",
      date: "Jan 2022 - June 2022",
      tasks: [
        "Developed flight software for the 2022 Teknofest UAV Competition as part of the autonomous navigation team.",
        "Built a real time target detection and geolocation pipeline using Python and OpenCV to accurately identify ground targets from UAV imagery.",
        "Integrated autonomous navigation logic into the UAV control stack to enable precision payload delivery to detected targets.",
      ],
    },
  ];

  return (
    <section className="relative z-0 grid justify-items-center" style={style}>
      <Svgs />
      <div className="relative flex flex-col gap-12">
        <h2 className="font-inter [font-size:var(--section-title-size)] [font-weight:400] tracking-[0.4rem]">
          EXPERIENCE
        </h2>
        <div className="grid max-w-[1400px] grid-cols-[1fr_auto_1fr] grid-rows-[1fr_1fr_auto] items-center justify-items-center gap-[var(--experience-gap)] overflow-hidden px-8 max-[750px]:grid-cols-1">
          <div
            className="bx relative col-start-2 row-start-1 h-full w-px bg-[linear-gradient(to_bottom,rgba(255,255,255,0.6),rgba(0,0,0,0.1))] max-[750px]:hidden"
            style={{
              gridRowEnd: `span ${experiences.length}`,
              top: offsetTop,
            }}
          ></div>

          {experiences.map((experience, index) => (
            <React.Fragment key={index}>
              <Card
                ref={firstCardRef}
                position={experience.position}
                companyName={experience.companyName}
                row={index + 1}
                tasks={experience.tasks}
                isLeft={index % 2 === 0}
                date={experience.date}
              />

              {index % 2 === 0 ? (
                <>
                  <div
                    className={`relative col-span-1 col-start-2 row-span-1 h-5 w-5 rounded-[50%] border border-solid border-white bg-gray-500 text-[#1100ff] before:absolute before:top-0 before:left-0 before:-z-1 before:h-px before:w-[130px] before:transform-[translate(calc(-100%),calc(20px/2-1px))] before:rounded-[10%] before:bg-[linear-gradient(to_left,rgba(255,255,255,0.6),rgba(0,0,0,0.1))] before:content-[''] max-[750px]:hidden`}
                    style={{
                      gridRowStart: index + 1,
                    }}
                  ></div>
                  <p
                    className={`font-inter col-span-1 col-start-3 row-span-1 text-end [font-size:var(--company-size)] [font-weight:200] whitespace-nowrap text-white italic max-[750px]:hidden`}
                    style={{
                      gridRowStart: index + 1,
                    }}
                  >
                    {experience.date}
                  </p>
                </>
              ) : (
                <>
                  <div
                    className={`relative col-span-1 col-start-2 row-span-1 h-5 w-5 rounded-[50%] border border-solid border-white bg-gray-500 text-[#1100ff] before:absolute before:top-0 before:right-0 before:-z-1 before:h-px before:w-[130px] before:transform-[translate(calc(100%),calc(20px/2-1px))] before:rounded-[10%] before:bg-[linear-gradient(to_right,rgba(255,255,255,0.6),rgba(0,0,0,0.1))] before:content-[''] max-[750px]:hidden`}
                    style={{
                      gridRowStart: index + 1,
                    }}
                  ></div>
                  <p
                    className={`font-inter col-span-1 col-start-1 row-span-1 text-end [font-size:var(--company-size)] [font-weight:200] whitespace-nowrap text-white italic max-[750px]:hidden`}
                    style={{
                      gridRowStart: index + 1,
                    }}
                  >
                    {experience.date}
                  </p>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
