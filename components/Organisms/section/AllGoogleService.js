import React from "react";
const people = [
  {
    title: "Google Search",
    description:
      "Plusieurs milliards de recherches sont effectuées tous les jours sur Google search. Vos prospects sont déjà entrain de rechercher vos produits ou services. Soyez visibles.",
    imageUrl: "/images/logo/google.png",
  },
  {
    title: "Youtube",
    description:
      "Youtube représente une audience sans équivalent de plus de 2 milliards d’utilisateurs connectés chaque mois. 1 milliard d’heures visionnées chaque jour ! En France, Youtube est le deuxième site le plus visité !",
    imageUrl: "/images/logo/yt.svg",
  },
  {
    title: "Google shopping",
    description:
      "Les annonces Google Shopping sont idéales pour accroître la visibilité de vos produits et augmenter vos taux d’acquisition et de conversion.",
    imageUrl: "/images/logo/gtag.png",
  },
  {
    title: "Google display",
    description:
      "Le Réseau Display de Google permet de toucher la majorité des internautes à travers le monde sur des millions de sites, de pages d’actualités, de blogs et de sites Google tels que Gmail et YouTube.",
    imageUrl: "/images/logo/display.png",
  },
  {
    title: "Performance MAX",
    description:
      "Avec Google Performance Max vous pouvez atteindre vos objectifs sur l’ensembles des leviers Google tout en optimisant les coûts de vos campagnes digitales.",
    imageUrl: "/images/logo/perf.png",
  },
  {
    title: "Application",
    description:
      "Augmentez le taux de téléchargement de votre application et fidélisez vos clients grâce à une stratégie mobile performante.",
    imageUrl: "/images/logo/play.png",
  },
  // More people...
];

const AllGoogleService = () => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Deployez vous rapidement sur tous les outils publicitaires de Google
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Google est l'un des outils le plus complet et le plus puissant pour
            vos campagnes
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.map((person) => (
            <li
              key={person.title}
              className="rounded-2xl bg-gray-800 px-8 py-10"
            >
              <img
                className="mx-auto h-16 w-16 object-cover rounded-full md:h-20 md:w-20"
                src={person.imageUrl}
                alt={person.title}
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                {person.title}
              </h3>
              <p className="text-sm leading-6 text-gray-400">
                {person.description}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex items-center gap-x-6 w-full ">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            On y va ! <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllGoogleService;
