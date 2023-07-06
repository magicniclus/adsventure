import React from "react";
import LandingPage from "../../components/Layout/LandingPage";
import HeroLandingPage from "../../components/Organisms/Hero/HeroLandingPage";
import GoogleAssets from "../../components/Organisms/section/GoogleAssets";
import Trust from "../../components/Organisms/section/Trust";
import AllGoogleService from "../../components/Organisms/section/AllGoogleService";
import Strategy from "../../components/Organisms/section/Strategy";
import Expertise from "../../components/Organisms/section/Expertise";
import TimeLine from "../../components/Organisms/TimeLine";
import TestimonialGads from "../../components/Organisms/section/TestimonialGads";
import Cta from "../../components/Organisms/Cta";

const index = () => {
  return (
    <LandingPage certificate={true}>
      <HeroLandingPage />
      <GoogleAssets />
      <Trust />
      <AllGoogleService />
      <Strategy />
      <Expertise />
      <TimeLine />
      <TestimonialGads />
      <Cta />
    </LandingPage>
  );
};

export default index;
