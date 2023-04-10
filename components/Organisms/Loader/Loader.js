import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Svg from "../../Molecules/Svg/Svg";

const Loader = () => {
  //   useEffect(() => {
  //     const tl = gsap.timeline({ repeat: -1 });

  //     tl.to(line1Ref.current, {
  //       duration: 1.5,
  //       strokeDashoffset: 0,
  //       ease: "power2.inOut",
  //     })
  //       .to(
  //         line2Ref.current,
  //         {
  //           duration: 1.5,
  //           strokeDashoffset: 0,
  //           ease: "power2.inOut",
  //         },
  //         "-=1" // chevauchement de l'animation
  //       )
  //       .to(line1Ref.current, {
  //         duration: 1.5,
  //         strokeDashoffset: 50,
  //         ease: "power2.inOut",
  //       })
  //       .to(
  //         line2Ref.current,
  //         {
  //           duration: 1.5,
  //           strokeDashoffset: 50,
  //           ease: "power2.inOut",
  //         },
  //         "-=1" // chevauchement de l'animation
  //       );

  //     return () => {
  //       tl.kill(); // Nettoyer l'animation lors du démontage du composant
  //     };
  //   }, []);

  return (
    <div className="h-screen max-w-full flex justify-center items-center flex-col">
      <div className="mx-auto flex justify-center items-center flex-col">
        <Svg />
        <div className="flex lg:flex-1">
          <img
            className="h-10 w-auto"
            src="/images/logo/AdsVenture-blue-little.png"
            alt="logo adsventure"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
