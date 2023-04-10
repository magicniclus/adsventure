import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const Prestations = () => {
  const frequencies = [
    { value: "monthly", label: "Monthly", priceSuffix: "/month" },
    { value: "annually", label: "Annually", priceSuffix: "/year" },
  ];
  const tiers = [
    {
      name: "Audite gratuite en visio (Offre découverte)",
      id: "tier-freelancer",
      href: "https://calendly.com/adventure-contact/rendez-vous-decouverte?month=2023-03",
      price: "Free",
      description:
        "Testez nos services sans engagement et découvrez comment notre expertise peut booster vos résultats avec cet audit gratuit en visio !",
      features: [
        "Analyse de votre présence en ligne actuelle",
        "Identification des points d'amélioration",
        "Recommandations pour optimiser vos campagnes Google Ads",
        "Session de questions-réponses pour comprendre vos objectifs et besoins",
        "Devis personnalisé pour nos services payants",
      ],
      mostPopular: true,
    },
    {
      name: "Pack Essentiel",
      id: "tier-startup",
      href: "https://calendly.com/adventure-contact/rendez-vous-decouverte?month=2023-03",
      price: "399€",
      description:
        "Optez pour notre Pack Essentiel et bénéficiez d'un partenariat à long terme pour une croissance stable et durable de votre présence en ligne.",
      features: [
        "Audite complet de votre compte Google Ads",
        "Création ou optimisation d'une campagne Google Ads",
        "Sélection des mots-clés pertinents et ajustement des enchères",
        "Optimisation des annonces et des extensions",
        "Suivi et rapport de performance mensuel",
        "Session de révision et d'ajustement mensuelle",
      ],
      mostPopular: false,
    },
    {
      name: "Pack Premium ",
      id: "tier-enterprise",
      href: "https://calendly.com/adventure-contact/rendez-vous-decouverte?month=2023-03",
      price: "599",
      description:
        "Choisissez le Pack Premium pour une stratégie publicitaire complète et personnalisée qui vous permettra de dominer votre marché et d'obtenir des résultats exceptionnels.",
      features: [
        "Tous les avantages du Pack Essentiel",
        "Analyse approfondie des mots-clés et des audiences",
        "Optimisation avancée des annonces et des extensions",
        "Mise en place de stratégies d'enchères avancées pour maximiser le retour sur investissement",
        "Gestion de budget publicitaire optimisée pour une performance durable",
        "Coordination et intégration avec d'autres canaux de marketing en ligne (réseaux sociaux, email marketing, etc.)",
        "Session de révision et d'ajustement bimensuelle",
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
          Bénéficiez de notre service de{" "}
          <strong>
            création et gestion de campagnes publicitaires Google Ads
          </strong>{" "}
          pour atteindre vos objectifs rapidement et efficacement. Nous vous
          accompagnons tout au long du processus.
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
