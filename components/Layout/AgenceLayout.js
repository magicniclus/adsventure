import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../Organisms/Footer";
import Header from "../Organisms/Headers/Header";
import {
  AcademicCapIcon,
  BuildingOfficeIcon,
  ArrowTrendingUpIcon,
  CheckBadgeIcon,
} from "@heroicons/react/20/solid";
import Cta from "../Organisms/Cta";
import ValideModale from "../Organisms/Modales/ValideModale";
import { useSelector } from "react-redux";
import ErrorModal from "../Organisms/Modales/ErrorModal";

const AgenceLayout = (props) => {
  const title = props.title;
  const state = useSelector((state) => state);
  const canonical = props.canonical || "";
  const robots = props.robots || "follow";
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    state.validModal?.show ? setShow(true) : setShow(false);
  }, [state.validModal]);
  useEffect(() => {
    state.errorModal?.show ? setShowError(true) : setShowError(false);
  }, [state.errorModal]);
  return (
    <>
      <Head>
        <title>
          Agence SEA {props.title}, experte en optimisation de sites web
        </title>
        <meta
          name="description"
          content={
            "Faites confiance à notre agence à " +
            props.title +
            " pour vos campagnes publicitaires. Boostez votre visibilité et votre chiffre d'affaires grâce à nos experts."
          }
        />
        <meta name="robots" content={"index, " + robots} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="fr" />
        <link
          rel="canonical"
          href={
            "https://www.adventure-agency.com/agences/" +
            props.title.toLowerCase()
          }
        />
      </Head>
      <main className="min-h-[100vh]">
        <div className="bg-white">
          <Header />
          <div className="relative">
            <div className="mx-auto max-w-7xl">
              <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                <svg
                  className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="0,0 90,0 50,100 0,100" />
                </svg>

                <div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
                  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <div className="hidden sm:mb-10 sm:flex">
                      <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Découvrez toutes nos solutions Google ads
                        <a
                          href="/#service"
                          className="whitespace-nowrap font-semibold text-indigo-600"
                        >
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          En savoir plus <span aria-hidden="true">&rarr;</span>
                        </a>
                      </div>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                      Agence Google ads à {props.title}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      Agence Google Ads sur {props.title}. Transformez votre
                      visibilité, maximisez vos profits.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <a
                        href="#"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Je prends rendez-vous
                      </a>
                      <a
                        href="/"
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        Qui sommes nous ? <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
          <svg
            viewBox="0 0 801 1036"
            aria-hidden="true"
            className="absolute -top-80 left-[max(6rem,33%)] -z-10 w-[50.0625rem] transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
          >
            <path
              fill="url(#bba7d695-d9bb-4e8a-a43b-2b951b4ac9c0)"
              fillOpacity=".3"
              d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.653 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z"
            />
            <defs>
              <linearGradient
                id="bba7d695-d9bb-4e8a-a43b-2b951b4ac9c0"
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
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <p className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                Deploy faster
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Agence de {props.title}
              </h2>
              <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Optimisez votre visibilité locale
              </h3>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Notre agence Google Ads vous accompagne à {props.title} pour
                améliorer votre visibilité en ligne. Atteignez votre cible
                locale avec une stratégie publicitaire adaptée et performante.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
              <div className="relative lg:order-last lg:col-span-5">
                <svg
                  className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                      width={200}
                      height={200}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M0.5 0V200M200 0.5L0 0.499983" />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
                  />
                </svg>
                <figure className="border-l border-indigo-600 pl-8">
                  <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                    <p>
                      “Notre entreprise s'engage à créer des campagnes Google
                      Ads percutantes, pour vous aider à atteindre vos
                      objectifs. Grâce à notre équipe dévouée et passionnée,
                      nous offrons une expérience personnalisée et conviviale
                      pour transformer vos investissements publicitaires en
                      succès retentissants. Alors, rejoignez-nous et découvrez
                      les bienfaits d'une collaboration avec AdsVenture pour
                      propulser votre entreprise vers de nouveaux horizons !”
                    </p>
                  </blockquote>
                  <figcaption className="mt-8 flex gap-x-4">
                    {/* <img
                      src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                    /> */}
                    <div className="text-sm leading-6 flex items-center">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-500 mr-3">
                        <span className="text-xs font-medium leading-none text-white">
                          NC
                        </span>
                      </span>
                      <div className="">
                        <div className="font-semibold text-gray-900">
                          Nicolas Castera, CEO
                        </div>
                        <div className="text-gray-600">@Nicolas</div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
                <p>
                  Notre équipe d'experts certifiés Google Ads met à votre
                  disposition ses compétences pour optimiser vos campagnes et
                  vous garantir un retour sur investissement maximal. Bénéficiez
                  d'un suivi personnalisé et d'une stratégie adaptée à votre
                  secteur d'activité.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Les avantages de notre agence
                </h2>
                <ul
                  role="list"
                  className="mt-8 max-w-xl space-y-8 text-gray-600"
                >
                  <li className="flex gap-x-3">
                    <BuildingOfficeIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Expertise locale
                      </strong>{" "}
                      dans toutes les villes françaises
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <AcademicCapIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      Equipe de professionnels
                      <strong className="font-semibold text-gray-900">
                        certifiés Google Ads
                      </strong>{" "}
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckBadgeIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      Suivi
                      <strong className="font-semibold text-gray-900">
                        personnalisé et stratégie sur-mesure
                      </strong>{" "}
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ArrowTrendingUpIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Maximisation
                      </strong>{" "}
                      du retour sur
                      <strong className="font-semibold text-gray-900">
                        investissement
                      </strong>{" "}
                    </span>
                  </li>
                </ul>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Des résultats concrets
                </h2>
                <p className="mt-8">
                  Collaborer avec notre agence Google Ads, c'est choisir la
                  performance et la réussite pour votre entreprise. Nous nous
                  engageons à vous offrir des résultats concrets et mesurables
                  pour vous permettre de développer votre activité en toute
                  sérénité.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Cta />
      </main>
      <Footer />
      {show ? <ValideModale /> : null}
      {showError ? <ErrorModal /> : null}
    </>
  );
};

export default AgenceLayout;
