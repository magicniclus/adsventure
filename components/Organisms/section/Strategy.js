import React from "react";
const jobOpenings = [
  {
    id: 1,
    type: "Ventes en ligne",
    href: "#",
    description:
      "Google Ads est essentiel pour votre commerce en ligne grâce à sa visibilité sur le moteur de recherche le plus utilisé. Vous pouvez cibler votre public, ajuster vos budgets et contrôler les performances de vos campagnes en temps réel. Avec Google Shopping, vos produits sont directement mis en avant dans les résultats de recherche de Google, optimisant ainsi votre visibilité et stimulant vos ventes en ligne.",
  },
  {
    id: 2,
    type: "Génération de leads",
    href: "#",
    description:
      "Google Ads est un outil incontournable pour la génération de leads. En ciblant avec précision votre public et en adaptant vos annonces en fonction de mots-clés pertinents, vous pouvez attirer des prospects intéressés par vos produits ou services. De plus, grâce à des outils d'analyse intégrés, vous pouvez suivre et optimiser en temps réel l'efficacité de vos campagnes, ce qui est essentiel pour améliorer continuellement votre taux de conversion de prospects en clients.",
  },
  {
    id: 3,
    type: "Notoriété de marque",
    href: "#",
    description:
      "Google Ads est un outil clé pour augmenter votre notoriété. En permettant un ciblage précis, vos campagnes peuvent atteindre un large public pertinent, améliorant ainsi la reconnaissance de votre marque. De plus, grâce à sa visibilité sur le moteur de recherche le plus utilisé, Google Ads assure que vos annonces sont vues par un maximum d'internautes, boostant ainsi votre notoriété en ligne.",
  },
];

const Strategy = () => {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Une strategie unique pour chacun de nos clients
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Chaque mois nous travaillons et analisons les resultats de vos
              campagnes afin de vous proposer une strategie unique et sur mesure
              en fonction de votre activité et de vos objectifs.
            </p>
            <img
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
              alt=""
              className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
            />
          </div>
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <h3 className="sr-only">Job openings</h3>
            <ul className="-my-8 divide-y divide-gray-100">
              {jobOpenings.map((opening) => (
                <li key={opening.id} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <dt className="sr-only">Role</dt>
                    <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                      <a href={opening.href}>
                        {opening.type}
                        <span className="absolute inset-0" aria-hidden="true" />
                      </a>
                    </dd>
                    <dt className="sr-only">Description</dt>
                    <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">
                      {opening.description}
                    </dd>
                    <dt className="sr-only">Salary</dt>
                    <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                      <svg
                        viewBox="0 0 2 2"
                        className="h-0.5 w-0.5 flex-none fill-gray-300"
                        aria-hidden="true"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-center gap-x-6 w-full ">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Prendre rendez-vous <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
