import React from "react";
import LandingPage from "../../components/Layout/LandingPage";
import HeroLandingPage from "../../components/Organisms/Hero/HeroLandingPage";
import GoogleAssets from "../../components/Organisms/section/GoogleAssets";
import Trust from "../../components/Organisms/section/Trust";

const index = () => {
  return (
    <LandingPage certificate={true}>
      <HeroLandingPage />
      <GoogleAssets />
      <Trust />
    </LandingPage>
  );
};

export default index;
