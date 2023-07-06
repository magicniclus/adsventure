import React from "react";
const timeline = [
  {
    name: "Maximisez le potentiel de vos audiences",
    description:
      "Placez les utilisateurs au cœur de votre stratégie numérique pour dynamiser vos campagnes marketing.",
    date: "Aug 2021",
    dateTime: "2021-08",
  },
  {
    name: "Travailler avec le Search Google",
    description:
      "Acquérez de nouveaux clients en vous positionnant stratégiquement au moment le plus propice. ",
    date: "Dec 2021",
    dateTime: "2021-12",
  },
  {
    name: "Exploitez le plein potentiel de YouTube",
    description:
      "Positionnez vous sur la plateform video la plus utilisée au monde",
    date: "Feb 2022",
    dateTime: "2022-02",
  },
  {
    name: "Choisissez le Display Google",
    description:
      "Choisissez le display pour apparetre sur l'ensemble des moteurs de recherche partenaire à Google.",
    date: "Dec 2022",
    dateTime: "2022-12",
  },
];
const GoogleAssets = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-20">
          Les atouts de Google ads
        </h2>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item, idx) => (
            <div key={item.name}>
              <div
                dateTime={item.dateTime}
                className="flex items-center text-xl font-semibold leading-6 text-indigo-600"
              >
                <svg
                  viewBox="0 0 4 4"
                  className="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {idx + 1}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {item.name}
              </p>
              <p className="mt-1 text-base leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            En savoir plus <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GoogleAssets;
