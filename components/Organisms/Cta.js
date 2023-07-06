import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Cta = () => {
  const buttonRef = useRef();
  const textRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        delay: 0.1,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "bottom bottom",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "bottom bottom",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );
  }, []);
  return (
    <div className="bg-indigo-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <div className="overflow-hidden">
          <h2
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl overflow-hidden"
            ref={textRef}
          >
            Nos équipes spécilisés Google ads sont la pour vous !
          </h2>
        </div>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0 overflow-hidden">
          <a
            ref={buttonRef}
            href="https://calendly.com/adventure-contact/rendez-vous-decouverte?month=2023-03"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Prendre rendez-vous <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cta;
