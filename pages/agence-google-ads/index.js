import React from "react";
import LandingPage from "../../components/Layout/LandingPage";
import HeroLandingPage from "../../components/Organisms/Hero/HeroLandingPage";
import GoogleAssets from "../../components/Organisms/section/GoogleAssets";
import AllGoogleService from "../../components/Organisms/section/AllGoogleService";
import Strategy from "../../components/Organisms/section/Strategy";
import Expertise from "../../components/Organisms/section/Expertise";
import Timeline from "../../components/Organisms/Timeline";
import TestimonialGads from "../../components/Organisms/section/TestimonialGads";
import Cta from "../../components/Organisms/Cta";
import FAQ from "../../components/Organisms/FAQ/Faq";

const index = () => {
  return (
    <LandingPage
      certificate={true}
      canonical="agence-google-ads"
      description="Boostez votre ROI avec Ads Venture, agence certifiée Google Ads. Spécialistes en gestion de campagne AdWords offrant des solutions sur mesure."
      title="Agence Google Ads certifiée - Expertise en AdWords | Ads Venture"
    >
      <HeroLandingPage />
      <GoogleAssets />
      <AllGoogleService />
      <Strategy />
      <Expertise />
      <Timeline />
      <TestimonialGads />
      <Cta />
      <FAQ />
    </LandingPage>
  );
};

export default index;
