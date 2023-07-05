import React from "react";
import LandingPage from "../../components/Layout/LandingPage";
import HeroLandingPage from "../../components/Organisms/Hero/HeroLandingPage";
import GoogleAssets from "../../components/Organisms/section/GoogleAssets";
import Trust from "../../components/Organisms/section/Trust";
import AllGoogleService from "../../components/Organisms/section/AllGoogleService";
import Strategy from "../../components/Organisms/section/Strategy";

const index = () => {
  return (
    <LandingPage certificate={true}>
      <HeroLandingPage />
      <GoogleAssets />
      <Trust />
      <AllGoogleService />
      <Strategy />
    </LandingPage>
  );
};

export default index;
