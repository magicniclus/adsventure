import React from "react";
const people = [
  {
    title: "Google Search",
    description:
      "L'outil Google Search est une plateforme puissante qui permet de localiser instantanément des informations précises sur le web. Avec son ciblage précis et ses fonctionnalités avancées, il offre une opportunité unique pour connecter votre marque avec des prospects qualifiés au moment exact de leur recherche.",
    imageUrl: "/images/logo/google.png",
  },
  {
    title: "Youtube",
    description:
      "YouTube est une plateforme de partage de vidéos de premier plan qui permet aux marques de toucher un large public à travers du contenu visuel engageant. Avec son potentiel de ciblage et sa portée mondiale, YouTube offre une plateforme unique pour raconter l'histoire de votre marque et engager de manière significative avec votre public cible.",
    imageUrl: "/images/logo/yt.svg",
  },
  {
    title: "Google shopping",
    description:
      "Google Shopping est un service de comparaison de prix qui permet aux commerçants d'afficher leurs produits directement dans les résultats de recherche de Google. Il offre une manière efficace pour les entreprises de mettre en avant leurs produits, d'attirer des clients potentiels et d'optimiser leurs ventes en ligne.",
    imageUrl: "/images/logo/gtag.png",
  },
  {
    title: "Google display",
    description:
      "Google Display est un réseau publicitaire visuel qui permet aux entreprises d'afficher des annonces sous forme de bannières sur une multitude de sites web à travers le monde. C'est un outil puissant pour augmenter la notoriété de la marque, cibler des audiences spécifiques et stimuler l'engagement en présentant du contenu visuellement attrayant à un large éventail d'utilisateurs.",
    imageUrl: "/images/logo/display.png",
  },
  {
    title: "Performance MAX",
    description:
      "Performance Max est une campagne automatisée de Google qui utilise l'apprentissage automatique pour optimiser les performances sur tous les réseaux de Google. C'est un outil précieux pour les entreprises qui cherchent à maximiser leur ROI, atteindre des objectifs spécifiques et gérer leurs annonces de manière plus efficace à travers différents canaux.",
    imageUrl: "/images/logo/perf.png",
  },
  {
    title: "Application",
    description:
      "Maximisez le nombre de téléchargements de votre application avec les outils optimisés de Google. Renforcez par la suite la fidélité des utilisateurs grâce à une stratégie mobile performante et ciblée.",
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
