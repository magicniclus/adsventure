import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const Faq = () => {
  const faqs = [
    {
      question: "Qu'est-ce qu'Adsventure ?",
      answer:
        "Adsventure est une agence spécialisée en gestion de campagnes Google Ads et en création de landing pages optimisées. Nous aidons les entreprises à améliorer leur taux de conversion et à soutenir leur croissance grâce à notre expertise en publicité Google Ads.",
    },
    {
      question:
        "Pourquoi choisir Adsventure pour gérer mes campagnes Google Ads ?",
      answer:
        "En choisissant Adsventure, vous bénéficiez de l'expertise de spécialistes certifiés Google Ads, qui travaillent sans relâche pour concevoir des campagnes publicitaires percutantes et ciblées, adaptées à vos objectifs de croissance. Nous proposons également des landing pages optimisées pour maximiser votre taux de conversion.",
    },
    {
      question: "Combien coûtent vos services ?",
      answer:
        "Les tarifs de nos services varient en fonction de la taille et de la complexité de votre projet. Pour obtenir un devis personnalisé, n'hésitez pas à nous contacter et à nous fournir des informations sur vos objectifs et vos besoins spécifiques. Il est important de préciser qu'Adsventure ne collabore pas avec des entreprises générant moins de 25 000 € de chiffre d'affaires par mois.",
    },
    {
      question:
        "Comment fonctionne le processus de création d'une landing page ?",
      answer:
        "Notre équipe de concepteurs web travaille en étroite collaboration avec vous pour créer une landing page esthétiquement attrayante et fonctionnelle. Nous nous assurons que la page est optimisée pour encourager les visiteurs à passer à l'action, en prenant en compte la navigation, le choix des images et des mots-clés.",
    },
    {
      question:
        "Comment puis-je suivre les performances de mes campagnes Google Ads ?",
      answer:
        "Adsventure vous fournira des rapports réguliers sur les performances de vos campagnes Google Ads, incluant des indicateurs clés tels que le nombre de clics, le coût par clic, le taux de conversion et le retour sur investissement. De plus, nous serons disponibles pour discuter des résultats et apporter des ajustements si nécessaire.",
    },
    {
      question:
        "Combien de temps faut-il pour voir des résultats avec Google Ads et les landing pages optimisées ?",
      answer:
        "Les résultats varient en fonction de plusieurs facteurs, tels que la concurrence, le budget publicitaire et l'efficacité de la landing page. Cependant, de nombreux clients commencent à voir des améliorations notables dans les conversions et les ventes après quelques semaines de travail avec Adsventure.",
    },
    // More questions...
  ];
  return (
    <div className="bg-gray-900" id="FAQ">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            Questions fréquentes :
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;
