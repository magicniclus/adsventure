import React from "react";
import LandingPage from "../../components/Layout/LandingPage";
import Inscription from "../../components/Organisms/Forms/Inscription";

const index = () => {
  return (
    <div>
      <LandingPage
        description="Contactez Adsventure, l'agence SEA spécialisée dans l'optimisation de campagnes publicitaires Google Ads. Obtenez une consultation dès maintenant !"
        title="Contactez-nous pour une stratégie SEA performante Adsventure"
        canonical="contact"
      >
        <Inscription />
      </LandingPage>
    </div>
  );
};

export default index;
