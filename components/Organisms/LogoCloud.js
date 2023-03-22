import React from "react";

const LogoCloud = () => {
  return (
    <div className="bg-white py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-700">
          Ils nous font confiance:
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <h3 className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 text-gray-700 text-2xl font-light text-center">
            Maison Terabois
          </h3>
          <h3 className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 text-gray-700 text-2xl font-light text-center">
            Maprimerenov-info
          </h3>
          <h3 className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 text-gray-700 text-2xl font-light text-center">
            Avenue-Immo
          </h3>
          <h3 className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 text-gray-700 text-2xl font-light text-center">
            Contrôle Aquitain de l'habitat
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
