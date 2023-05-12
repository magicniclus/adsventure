import React from "react";
import LandingPage from "../../components/Layout/LandingPage";
import HeroWithForm from "../../components/Organisms/Hero/HeroWithForm";

const index = () => {
  return (
    <LandingPage
      description="Contactez Adsventure, l'agence SEA spécialisée dans l'acquisition de leads. Obtenez une consultation dès maintenant !"
      title="Contactez-nous pour une stratégie d'acquisition de leads"
      canonical="contact"
    >
      <HeroWithForm />
    </LandingPage>
  );
};

export default index;
