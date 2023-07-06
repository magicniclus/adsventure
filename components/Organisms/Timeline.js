import React from "react";

const Timeline = () => {
  const timeline = [
    {
      name: "Analyse",
      description:
        "Analyse des tendances de recherche et les données démographiques pour mieux comprendre votre public et adapter votre stratégie de mots-clés.",
      date: "1",
      dateTime: "2021-08",
    },
    {
      name: "Testing",
      description:
        "Testing et analyse des performances de la campagne, ajustements et optimisation des éléments pour améliorer la qualité et l'efficacité de la campagne.",
      date: "2",
      dateTime: "2021-12",
    },
    {
      name: "Optimisation",
      description:
        "Nous surveillons et ajustons continuellement les enchères, les mots-clés et les annonces pour maximiser votre retour sur investissement.",
      date: "3",
      dateTime: "2022-02",
    },
    {
      name: "Scaling",
      description:
        " Une fois que nous avons trouvé une formule gagnante, nous pouvons décider d'augmentez votre budget et votre portée pour accroître votre impact et augmenter votre chiffre d'affaire.",
      date: "4",
      dateTime: "2022-12",
    },
  ];
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mt-2 text-xl font-bold tracking-tight text-indigo-600 sm:text-2xl mb-16">
          Les étapes de notre processus
        </h2>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
              >
                <svg
                  viewBox="0 0 4 4"
                  className="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {item.name}
              </p>
              <p className="mt-1 text-base leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {/* <div className="mt-10 flex">
          <a
            href="#service"
            className="text-base font-semibold leading-7 text-indigo-600"
          >
            Prendre rendez-vous
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Timeline;
