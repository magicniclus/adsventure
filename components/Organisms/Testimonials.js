import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <h2 className="text-white text-2xl">Avenue-immo.com</h2>
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-white">
                <p>
                  “Je suis ravi d'avoir travaillé avec Adsventure pour la
                  génération de leads de mon entreprise. Leur expertise en
                  gestion de campagnes Google Ads et en création de landing
                  pages sur mesure a considérablement amélioré notre taux de
                  conversion, générant davantage de leads qualifiés et un impact
                  positif sur notre chiffre d'affaires. L'équipe est attentive
                  aux détails, réactive et communique efficacement tout au long
                  du processus. Je recommande fortement Adsventure à quiconque
                  cherche à optimiser ses performances publicitaires et à
                  augmenter ses ventes.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                {/* <img
                  className="h-14 w-14 rounded-full bg-gray-800"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                /> */}
                <div className="text-base">
                  <div className="font-semibold text-white">Franck</div>
                  <a
                    className="mt-1 text-gray-400"
                    href="https://www.avenue-immo.com/"
                  >
                    Créateur de avenue-immo.com
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 xl:pl-20">
            <h2 className="text-white text-2xl">Maprimerenov-info.org</h2>
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-white">
                <p>
                  “Je suis absolument enchanté de l'excellent travail réalisé
                  par Adsventure pour la génération de leads sur mon site
                  internet. Leur maîtrise des campagnes Google Ads et leur
                  talent pour concevoir des landing pages personnalisées ont
                  considérablement augmenté notre taux de conversion, entraînant
                  un afflux de prospects de qualité et une croissance notable de
                  notre activité. L'équipe d'Adsventure a été extrêmement
                  attentive, réactive et transparente tout au long du projet. Je
                  n'hésite pas à recommander Adsventure à tous ceux qui
                  cherchent à améliorer leur présence en ligne et à stimuler
                  leurs ventes.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                {/* <img
                  className="h-14 w-14 rounded-full bg-gray-800"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                /> */}
                <div className="text-base">
                  <div className="font-semibold text-white">Nicolas</div>
                  <a
                    href="https://www.maprimerenov-info.org/simulateur"
                    className="mt-1 text-gray-400"
                  >
                    CEO Maprimerenov-info
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
