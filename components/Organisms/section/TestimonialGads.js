import React from "react";
const people = [
  {
    name: "avenue-immo.com",
    tags: "Plateforme immobilière",
    imageUrl: "/images/logo/avenueimmo.png",
    bio: "Avenue-immo.com est un portail immobilier qui permet aux professonels de générer des demandes d'estimation qualifiers et de vendre leurs biens.",
    CPA: "22€",
    conversion: "+ 150%",
  },
  {
    name: "MaPrimeRenov-info.org",
    tags: "Amélioration de l'habitat",
    imageUrl: "/images/logo/maprimerenov.png",
    bio: "MaPrimeRenov-info.fr est un site d'information sur la rénovation énergétique en France. Il permet aux particuliers de trouver des informations sur les aides financières disponibles pour la rénovation énergétique de leur logement.",
    CPA: "8,5€",
    conversion: "+ 300%",
  },
  {
    name: "Terabois.fr",
    tags: "Entreprise de construction et de renovation",
    imageUrl: "/images/logo/terabois.png",
    bio: "Terabois est une entreprise de construction et de rénovation de maisons individuelles.",
    CPA: "16€",
    conversion: "+ 100%",
  },

  {
    name: "Conciergerie-castera.fr",
    tags: "Service de conciergerie",
    imageUrl: "/images/logo/conciergeriecastera.png",
    bio: "Conciergerie-castera.fr est une entreprise de conciergerie qui propose des services de gestion locative et de location saisonnière sur Bordeaux et le Bassin d'Arcachon.",
    CPA: "12€",
    conversion: "+ 100%",
  },
];
const TestimonialGads = () => {
  return (
    <div className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            L'investissement marketing le plus rentable pour vous
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Adsventure est le partenaire de beaucoup d'entreprises qui ont fait
            le choix de la croissance.
          </p>
          <div className="mt-10 flex items-center gap-x-6 w-full ">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Prendre rendez-vous <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <ul
          role="list"
          className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="flex flex-col gap-10 pt-12 sm:flex-row"
            >
              <img
                className="aspect-[4/5] w-24 flex-none rounded-2xl object-contain"
                src={person.imageUrl}
                alt={person.name}
              />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.tags}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li className="text-gray-600">
                    Coût par aquisition moyen <br />
                    <span className="font-bold text-green-600 text-xl">
                      {person.CPA}
                    </span>
                  </li>
                  <li className="text-gray-600">
                    Taux de conversion moyen <br />
                    <span className="font-bold text-green-600 text-xl">
                      {person.conversion}
                    </span>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestimonialGads;
