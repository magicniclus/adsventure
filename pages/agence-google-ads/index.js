import React from "react";
import LandingPage from "../../components/Layout/LandingPage";
import HeroLandingPage from "../../components/Organisms/Hero/HeroLandingPage";

const index = () => {
  return (
    <LandingPage certificate={true}>
      <HeroLandingPage />
    </LandingPage>
  );
};

export default index;
