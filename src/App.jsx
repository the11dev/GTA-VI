import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  let [show, setShow] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask", {
      rotate: 18,
      duration: 2.5,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    })
    
    tl.to(".vi-mask", {
      scale: 12,
      duration: 1.8,
      delay: -2.3,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShow(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!show) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2.2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2.2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,  // Adjusted scale for better fit
      rotate: 0,
      duration: 2.2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".girlchar", {
      scale: 0.5, 
      x: "-50%",
      bottom: "-90%",
      rotate: 0,
      duration: 2.2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 0.85,
      rotate: 0,
      duration: 2.2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.8}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.9,
      });
    });
  }, [show]);

  return (
    <>
    {/* SVG */}
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* masking */}
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          {/* bg img */}
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {show && (
        // overflow:hidden to prevent extra gap at the bottom caused by the rotation nd scaling
        <div className="main relative overflow-hidden w-full rotate-[-10deg] scale-[1.7]">
        {/* LANDING PAGE */}
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
          {/* navbar */}
            <div className="nav absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>
          {/* Background images */}
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-3 absolute top-10 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-5deg]">
                <h1 className="text-[12rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[12rem] leading-none ml-20">theft</h1>
                <h1 className="text-[12rem] leading-none -ml-40">auto</h1>
              </div>
              <img
                className="absolute girlchar -bottom-[200%] left-1/2 -translate-x-1/2  scale-[2] rotate-[-20deg]"
                src="./char.png"
                alt=""
              />

            </div>
          {/* bottom bar */}
            <div className="bottom text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-3 items-center">
                <i className="text-3xl ri-arrow-down-line"></i>
                <h3 className="text-l font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>

        {/* Second page */}
          <div className="w-full min-h-full flex items-center justify-center bg-black px-4 py-10">
            <div className="container flex flex-col lg:flex-row text-white w-full max-w-[1400px] h-auto">
              
              <div className="limg relative w-full lg:w-1/2 h-[300px] lg:h-auto mb-10 lg:mb-0">
              {/* animated image */}
                <img className=
                  "absolute scale-[1.1] md:scale-[1.2] lg:scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full"
                  src="./imag.png"
                  alt=""
                />
              </div>

            {/* page 2 text */}
              <div className="rg w-full lg:w-[40%] flex flex-col justify-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-medium">
                  hunt
                </h1>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-medium">
                   or be hunted.
                </h1>

                <p className="mt-6 text-base md:text-lg lg:text-xl font-[Helvetica_Now_Display] leading-relaxed">
                  Welcome to Vice City — where the line between hustle and survival blurs with every heartbeat. Beneath the glimmer of palm-lined boulevards and neon skylines lies a world of fast money, dirty deals, and dangerous ambition.
                </p>

                <p className="mt-4 text-base md:text-lg lg:text-xl font-[Helvetica_Now_Display] leading-relaxed">
                  From high-octane pursuits to deep-rooted power plays, every choice you make carves your legend. Build your empire, rule your streets, and rewrite the rules — one bold move at a time. <br/>Sun, sweat, and sin.
                </p>

                <p className="mt-4 text-base md:text-lg lg:text-xl font-[Helvetica_Now_Display] leading-relaxed">
                  Your city. Your rules. Your rise.


                </p>

                <button className="bg-yellow-500 px-6 py-4 text-black mt-6 text-lg md:text-2xl lg:text-3xl rounded hover:scale-105 transition-transform duration-300">
                  Coming — 26 may 2026!
                </button>
              </div>
            </div>
          </div>
          
        </div>
      )}
    </>
  );
}

export default App;