import React from "react";
import LandingPage from "../../components/Layout/LandingPage";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const index = () => {
  return (
    <LandingPage>
      <div className="bg-white py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
            Mentions l'égales d'Adsventure
          </h1>
          <div className="mt-10 max-w-2xl">
            <h2 className="text-xl mb-5 mt-10">
              Identification de l'éditeur du site
            </h2>
            <p>Le site www.adsventure.com est édité par :</p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>Nom de l'entreprise : Adsventure</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>Forme juridique : Auto-entreprise</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>E-mail : eleadbase@gmail.com</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>Siret : 83241465000024</span>
              </li>
            </ul>
            <h2 className="text-xl mb-5 mt-10">Directeur de la publication</h2>
            <p className="mt-8">
              Le directeur de la publication du site est Nicolas CASTERA, en
              qualité de gérant de la société Adsventure.
            </p>
            <h2 className="text-xl mb-5 mt-10">Hébergement du site</h2>
            <p className="mt-8">
              Le site www.adsventure.com est hébergé par :<br />
              Nom de l'hébergeur : Netlify
              <br />
              Email de l'hébergeur : privacy@netlify.com
            </p>
            <h2 className="text-xl mb-5 mt-10">Propriété intellectuelle</h2>
            <p className="mt-8">
              Le contenu du site, incluant mais sans s'y limiter, les textes,
              images, graphiques, logos, icônes, et code source, est la
              propriété exclusive de la société Adsventure ou de ses
              partenaires, et est protégé par les lois françaises et
              internationales relatives aux droits d'auteur.
            </p>
            <p className="mt-8">
              Toute reproduction, représentation, modification, publication,
              transmission, dénaturation, totale ou partielle du site ou de son
              contenu, par quelque procédé que ce soit, et sur quelque support
              que ce soit, est interdite sans l'autorisation préalable et écrite
              de la société Adsventure.
            </p>
            <h2 className="text-xl mb-5 mt-10"></h2>
            <p className="mt-8">
              Adsventure s'efforce d'assurer l'exactitude et la mise à jour des
              informations diffusées sur son site. Toutefois, Adsventure ne peut
              garantir l'exactitude, la précision, la mise à jour ou
              l'exhaustivité des informations mises à disposition sur le site.
            </p>
            <p className="mt-8">
              En conséquence, l'utilisateur reconnaît utiliser ces informations
              sous sa responsabilité exclusive. Adsventure ne saurait être tenu
              pour responsable des erreurs, omissions, interruptions du service
              ou des conséquences qui pourraient en découler pour l'utilisateur.
            </p>
            <h2 className="text-xl mb-5 mt-10">Liens hypertextes</h2>
            <p className="mt-8">
              Le site peut contenir des liens vers d'autres sites internet.
              Adsventure n'est pas responsable du contenu et de la politique de
              confidentialité des sites auxquels les utilisateurs peuvent
              accéder via ces liens.
            </p>
            <h2 className="text-xl mb-5 mt-10">Droit applicable</h2>
            <p className="mt-8">
              Les présentes mentions légales sont soumises au droit français. En
              cas de litige, les tribunaux français seront compétents.
            </p>
            <p className="mt-8">Date de la dernière mise à jour : 28/03/2023</p>
          </div>
        </div>
      </div>
    </LandingPage>
  );
};

export default index;
