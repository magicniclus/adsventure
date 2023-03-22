import { useState, useRef, useEffect } from "react";
import Header from "./Header";
import { gsap } from "gsap";

const HeaderWithHeroTwo = () => {
  //Animaiton
  const imageRefOne = useRef();
  const imageRefTwo = useRef();
  const imageRefThree = useRef();
  const imageRefFour = useRef();
  const imageRefFive = useRef();
  const textRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    // Animation de l'image
    gsap.fromTo(
      imageRefOne.current,
      {
        y: 500,
        opacity: 0,
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      imageRefTwo.current,
      {
        y: 500,
        opacity: 0,
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power3.out",
        delay: 0.1, // Ajoutez le décalage ici
      }
    );
    gsap.fromTo(
      imageRefThree.current,
      {
        y: 500,
        opacity: 0,
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power3.out", // Ajoutez le décalage ici
      }
    );
    gsap.fromTo(
      imageRefFour.current,
      {
        y: 500,
        opacity: 0,
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power3.out",
        delay: 0.1, // Ajoutez le décalage ici
      }
    );
    gsap.fromTo(
      imageRefFive.current,
      {
        y: 500,
        opacity: 0,
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power3.out",
      }
    );

    // Animation du texte
    gsap.fromTo(
      textRef.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        duration: 1,
        ease: "power3.out",
        opacity: 1,
        x: 0,
        delay: 0.1,
      }
    );

    //Animation du bouton
    gsap.fromTo(
      buttonRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        duration: 1,
        ease: "power3.out",
        opacity: 1,
        y: 0,
        delay: 0.3,
      }
    );
  }, []);

  //Le composant
  const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-white relative">
      <Header whiteBg={true} />
      <main>
        <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div className="absolute top-0 left-1/2 right-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
            <svg
              viewBox="0 0 801 1036"
              aria-hidden="true"
              className="w-[50.0625rem]"
            >
              <path
                fill="url(#70656b7e-db44-4b9b-b7d2-1f06791bed52)"
                fillOpacity=".3"
                d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.652 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z"
              />
              <defs>
                <linearGradient
                  id="70656b7e-db44-4b9b-b7d2-1f06791bed52"
                  x1="508.179"
                  x2="-28.677"
                  y1="-116.221"
                  y2="1091.63"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center overflow">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl overflow-hidden">
                  <div className="" ref={textRef}>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                      AdsVenture, <br />
                      propulsez votre
                      <br /> entreprise vers de
                      <br /> nouveaux sommets
                    </h1>
                    <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                      Laissez nous prendre en charge votre présence en ligne et
                      améliorer votre visibilité auprès de vos clients. Grâce à
                      nos services professionnels de gestion de campagnes
                      publicitaires Google Ads et de développement de site
                      web/landing page, soyez au plus proche de vos clients.
                    </p>
                  </div>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      ref={buttonRef}
                      href="https://calendly.com/adventure-contact/rendez-vous-decouverte?month=2023-03"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      A l'attaque !
                    </a>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        ref={imageRefOne}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative overflow-hidden">
                      <img
                        ref={imageRefTwo}
                        src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                        alt=""
                        ref={imageRefThree}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative overflow-hidden">
                      <img
                        ref={imageRefFour}
                        src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        ref={imageRefFive}
                        src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeaderWithHeroTwo;
