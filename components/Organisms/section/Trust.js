import React from "react";

const Trust = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ils nous ont fait confience
          </h2>
          <div className="mx-auto mt-14 flex justify-between w-full bg-slate-100">
            <div className="flex flex-col justify-center items-center">
              <img
                className="max-h-12 w-full object-cover object-left"
                src="/images/logo/terabois.png"
                alt="terabois"
              />
              <h3>Terabois</h3>
            </div>
            <img
              className="max-h-12 w-full object-contain object-left"
              src="/images/logo/avenueimmo.png"
              alt="avenueimmo"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
              src="/images/logo/maprimerenov.png"
              alt="maprimerenov"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
              src="/images/logo/conciergeriecastera.png"
              alt="conciergerie-castera"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
              src="/images/logo/portailhabitat.png"
              alt="portail-habitat"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
