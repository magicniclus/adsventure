import React from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import LandingPage from "../../components/Layout/LandingPage";
const index = () => {
  return (
    <LandingPage>
      <div className="bg-white py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
            Politique de confidentialité d&apos;Adsventure
          </h1>
          <div className="mt-10 max-w-2xl">
            <h2 className="text-xl mb-5 mt-10">Introduction :</h2>
            <p>
              Chez Adsventure, nous nous engageons à protéger et à respecter la
              confidentialité de nos clients et des visiteurs de notre site Web.
              Cette politique de confidentialité explique comment nous
              recueillons, utilisons et protégeons vos informations personnelles
              lorsque vous interagissez avec notre site Web ou utilisez nos
              services.
            </p>
            <h2 className="text-xl mb-5 mt-10">Collecte des informations :</h2>
            <p>Nous recueillons des informations personnelles lorsque vous :</p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>Visitez notre site Web.</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>Inscrivez-vous à notre newsletter.</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  Utilisez nos services ou communiquez avec notre équipe.
                </span>
              </li>
            </ul>
            <p className="mt-8">
              Ces informations peuvent inclure votre nom, adresse e-mail, numéro
              de téléphone, adresse IP et d'autres informations pertinentes pour
              fournir nos services.
            </p>
            <h2 className="text-xl mb-5 mt-10">
              Utilisation de vos informations :
            </h2>
            <p className="mt-8">Nous utilisons vos données pour :</p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  Vous fournir nos services et répondre à vos demandes.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  Améliorer notre site Web et nos services en analysant les
                  données de navigation.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  Vous envoyer des communications marketing, si vous avez choisi
                  de les recevoir.
                </span>
              </li>
            </ul>
            <h2 className="text-xl mb-5 mt-10">Partage des informations :</h2>
            <p className="mt-8">
              Adsventure ne vendra, n'échangera ou ne partagera vos informations
              personnelles avec des tiers sans votre consentement, sauf dans les
              cas suivants :
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  Lorsqu'il est nécessaire de partager des informations avec nos
                  partenaires ou fournisseurs de services pour vous fournir nos
                  services.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  Lorsqu'il est exigé par la loi, par une ordonnance judiciaire
                  ou par une demande gouvernementale.
                </span>
              </li>
            </ul>
            <h2 className="text-xl mb-5 mt-10">Sécurité des informations :</h2>
            <p className="mt-8">
              Nous prenons la sécurité de vos informations personnelles au
              sérieux et avons mis en place des mesures techniques et
              organisationnelles appropriées pour protéger vos données contre la
              perte, le vol, l'accès non autorisé, la divulgation, l'altération
              et la destruction.
            </p>
            <h2 className="text-xl mb-5 mt-10">Cookies :</h2>
            <p className="mt-8">
              Notre site Web utilise des cookies pour améliorer votre expérience
              utilisateur et pour analyser l'utilisation de notre site. Vous
              pouvez gérer vos préférences de cookies dans les paramètres de
              votre navigateur.
            </p>
            <h2 className="text-xl mb-5 mt-10">Vos droits :</h2>
            <p className="mt-8">
              Vous avez le droit de demander l'accès, la rectification ou la
              suppression de vos informations personnelles détenues par
              Adsventure. Vous pouvez également vous opposer au traitement de
              vos données ou demander la limitation de ce traitement. Pour
              exercer ces droits, veuillez nous contacter à l'adresse e-mail
              indiquée ci-dessous.
            </p>
            <h2 className="text-xl mb-5 mt-10">
              Mises à jour de la politique de confidentialité :
            </h2>
            <p className="mt-8">
              Adsventure se réserve le droit de modifier cette politique de
              confidentialité à tout moment. Les modifications seront publiées
              sur cette page, et nous vous encourageons à consulter
              régulièrement cette politique pour vous tenir informé de la
              manière dont nous protégeons vos informations personnelles.
            </p>
            <h2 className="text-xl mb-5 mt-10">Contact :</h2>
            <p className="mt-8">
              Si vous avez des questions ou des préoccupations concernant notre
              politique de confidentialité, veuillez nous contacter à
              eleadbase@gmail.com.
            </p>
            <p className="mt-8">Date de la dernière mise à jour : 28/03/2023</p>
          </div>
        </div>
      </div>
    </LandingPage>
  );
};

export default index;
