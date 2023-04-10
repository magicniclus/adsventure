import React, { useRef } from "react";

const Svg = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 40"
      width="60"
      height="40" // Utiliser la classe d'animation CSS Module
    >
      <path
        d="M5,35 L20,20 L30,35"
        stroke="#5045e4"
        fill="none"
        strokeWidth="2"
      />
      <path
        d="M30,35 L45,5 L55,35"
        stroke="#5045e4"
        fill="none"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Svg;
