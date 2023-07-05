import React from "react";

const Expertise = () => {
  return (
    <div className="bg-gray-900">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center flex items-center flex-col">
          <img
            className="h-20 w-auto mb-10"
            src="/images/logo/adscertificat.png"
            alt="logo adsventure"
          />
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Google nous reconnait comme
            <br />
            expert Google ads
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
            Après des années d'expérience et de travail acharné, Google nous a
            reconnu comme expert Google ads.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              En savoir plus <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
