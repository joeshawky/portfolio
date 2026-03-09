import React from "react";
import linkedinIcon from "../../assets/icons/linkedin.png";
import githubIcon from "../../assets/icons/github.png";

function Svgs() {
  return (
    <>
      <svg
        className="max-h-[min(40vw,50vh)] w-full"
        viewBox="0 0 1440 646"
        fill="none"
        preserveAspectRatio="none"
      >
        <g filter="url(#filter0_i_16_16)">
          <path
            d="M0 382V645H1440V407L1341.84 232L1222.64 317L1122.27 2L839.964 407L764.683 292L658.035 527H413.372L614.121 407L74.6075 477L0 382Z"
            fill="white"
          />
        </g>
        <path
          d="M0 382V645H1440V407L1341.84 232L1222.64 317L1122.27 2L839.964 407L764.683 292L658.035 527H413.372L614.121 407L74.6075 477L0 382Z"
          stroke="white"
        />
        <defs>
          <filter
            id="filter0_i_16_16"
            x="-4.5"
            y="0.883301"
            width="1445"
            height="660.617"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-4" dy="16" />
            <feGaussianBlur stdDeviation="8.55" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.137855 0 0 0 0 0.0730862 0 0 0 0 0.163462 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_16_16"
            />
          </filter>
        </defs>
      </svg>

      <svg
        className="absolute top-[15%] left-0 w-[20%]"
        viewBox="0 0 338 142"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M1 141L337 1L155 141H1Z" fill="#D9D9D9" stroke="black" />
      </svg>

      <svg
        className="absolute top-0 left-0 max-h-[5vw] transform-[translate(150%,150%)]"
        viewBox="0 0 146 78"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M49 57L145 1L73 77H1L49 57Z" fill="#D9D9D9" stroke="black" />
      </svg>

      <svg
        className="absolute top-0 left-0 max-h-[15vw] transform-[translate(250%,-4vw)]"
        viewBox="0 0 178 182"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M2 180L177 1L103 150L2 180Z" fill="#D9D9D9" stroke="black" />
      </svg>

      <svg
        className="absolute top-0 right-0 max-h-[20vw] transform-[translate(-120%,-60%)]"
        viewBox="0 0 128 141"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M13 140L127 1L1 107L13 140Z" fill="#D9D9D9" stroke="black" />
      </svg>
    </>
  );
}

function Socials() {
  const linkedinUrl = "https://www.linkedin.com/in/youssef02/";
  const githubUrl = "https://github.com/joeshawky";

  return (
    <div className="absolute right-[5%] bottom-6 flex flex-col gap-[clamp(0.25rem,1vw,1rem)]">
      <img
        className="w-[clamp(16px,8vw,60px)] cursor-pointer"
        src={linkedinIcon}
        onClick={() => window.open(linkedinUrl, "_blank")}
      />
      <img
        className="w-[clamp(16px,8vw,60px)] cursor-pointer"
        src={githubIcon}
        onClick={() => window.open(githubUrl, "_blank")}
      />
    </div>
  );
}

export default function Footer({ style }) {
  return (
    <footer className="relative mt-60" style={style}>
      <Svgs />
      <Socials />
      <p className="absolute bottom-3 left-[50%] transform-[translateX(-50%)] [font-size:var(--fs-4)] text-black">
        &copy; Youssef Essam 2026
      </p>
    </footer>
  );
}
