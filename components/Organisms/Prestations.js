import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

const Prestations = () => {
  const frequencies = [
    { value: "monthly", label: "Monthly", priceSuffix: "/month" },
    { value: "annually", label: "Annually", priceSuffix: "/year" },
  ];
  const tiers = [
    {
      name: "Création de vos landing pages",
      id: "tier-freelancer",
      href: "https://calendly.com/adventure-contact/rendez-vous-decouverte?month=2023-03",
      price: "400€",
      description:
        "Boostez vos conversions en ligne avec nos landing page sur mesure et performantes.",
      features: [
        "Création du design",
        "Developpement de vos landing page",
        "Adaptation des landing page sur tous les supports",
        "Optimisation SEO de nos pages",
        "Service de suivi 3 mois",
      ],
      mostPopular: false,
    },
    {
      name: "Création et optimisation de vos campagnes google ads",
      id: "tier-startup",
      href: "https://calendly.com/adventure-contact/rendez-vous-decouverte?month=2023-03",
      description:
        "Spécialisé et certifié google ads, nous vous aidons à atteindre le plus efficassement vos futures clients.",
      features: [
        "Etude de marché",
        "Création de votre compte publicitaire",
        "Recherche des mots clés",
        "Optimisation de vos campagnes",
        "Analyse des résultats",
        "Un analyste attitré",
        "Suivi 24h/24",
      ],
      mostPopular: true,
    },
    {
      name: "Full pack",
      id: "tier-enterprise",
      href: "https://calendly.com/adventure-contact/rendez-vous-decouverte?month=2023-03",
      description:
        "Création, developpement et optimisation de votre site web, création et optimisation de vos campagne publicitaires, notre service Full-Pack vous permet de bénéficier de notre expertise sur l'ensemble des préstation lié à votre activité afin de répondre au mieux a vos attente.",
      features: [
        "Création du design",
        "Developpement du site/landing page",
        "Adaptation du site sur tous les supports",
        "Optimisation SEO du site",
        "Etude de marché",
        "Création de votre compte publicitaire",
        "Recherche des mots clés",
        "Optimisation de vos campagnes",
        "Analyse des résultats",
        "Un analyste attitré",
        "Support 5/7jours",
      ],
      mostPopular: false,
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className="bg-gray-900 py-24 sm:py-32" id="service">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-indigo-400 sm:text-5xl">
            {/* Pricing plans for teams of&nbsp;all&nbsp;sizes */}
            Notre expertise à votre service
          </h2>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Bénéficiez de notre expertise et de notre savoir-faire pour la
          création de votre site web, de vos landing pages ou de votre
          ecommerce. De plus, notre service de création et de gestion de
          campagnes publicitaires sur le réseau de recherche le plus efficace,
          Google Ads, vous permettra d'atteindre vos objectifs rapidement et
          efficacement. Nous mettons notre expérience à votre disposition pour
          vous accompagner tout au long du processus.
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "bg-white/5 ring-2 ring-indigo-500"
                  : "ring-1 ring-white/10",
                "rounded-3xl p-8 xl:p-10"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className="text-lg font-semibold leading-8 text-white"
                >
                  {tier.name}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                {tier.description}
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
                    : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
                  "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                )}
              >
                Allez plus loin
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-white"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prestations;
