import React from "react";
import LandingPage from "../../components/Layout/LandingPage";
import HeroLandingPage from "../../components/Organisms/Hero/HeroLandingPage";
import GoogleAssets from "../../components/Organisms/section/GoogleAssets";
import Trust from "../../components/Organisms/section/Trust";
import AllGoogleService from "../../components/Organisms/section/AllGoogleService";

const index = () => {
  return (
    <LandingPage certificate={true}>
      <HeroLandingPage />
      <GoogleAssets />
      <Trust />
      <AllGoogleService />
    </LandingPage>
  );
};

export default index;
