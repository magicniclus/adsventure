import React from "react";
import LandingPage from "../../components/Layout/LandingPage";
const index = () => {
  return (
    <LandingPage
      title="Validation de rendez-vous - Agence SEA Adsventure"
      description="Merci d'avoir pris RDV avec AdsVenture ! SEO, marketing digital et stratégies innovantes. Découvrez nos conseils et astuces pour booster votre succès en ligne."
      canonical="validation-de-rendez-vous"
    >
      <img
        src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <p className="text-base font-semibold leading-8 text-white">Merci</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Rendez-vous confirmé
        </h1>
        <p className="mt-4 text-base text-white/70 sm:mt-6">
          Rendez-vous découverte (Gratuit)
        </p>

        <p className="mt-4 text-sm text-white/70 sm:mt-6">
          Une invitation a été envoyée à votre adresse email.
        </p>
        <div className="mt-10 flex justify-center">
          <a href="/" className="text-sm font-semibold leading-7 text-white">
            <span aria-hidden="true">&larr;</span> Retour à l'accueil
          </a>
        </div>
      </div>
    </LandingPage>
  );
};

export default index;
