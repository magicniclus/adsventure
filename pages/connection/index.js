import React from "react";
import LandingPage from "../../components/Layout/LandingPage";
import Connection from "../../components/Organisms/Forms/Connection";

const index = () => {
  return (
    <LandingPage
      description="Connectez-vous à votre compte client chez Adsventure, l'agence spécialisée en SEA pour améliorer votre visibilité sur les moteurs de recherche"
      title="Connexion client - Agence spécialiste du SEA Adsventure"
      canonical="connection"
    >
      <Connection />
    </LandingPage>
  );
};

export default index;
