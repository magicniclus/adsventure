import LandingPage from "../components/Layout/LandingPage";
import ContentSection from "../components/Organisms/ContentSection";
import Cta from "../components/Organisms/Cta";
import Faq from "../components/Organisms/FAQ/Faq";
import Prestations from "../components/Organisms/Prestations";
import Testimonials from "../components/Organisms/Testimonials";
import Timeline from "../components/Organisms/Timeline";

export default function Home() {
  return (
    <LandingPage
      description="Boostez vos ventes avec AdsVenture, agence Google Ads experte en stratégies SEA. Atteignez vos objectifs et augmentez votre ROI. Contactez-nous !"
      title="AdsVenture: Gagnez en visibilité avec nos experts Google Ads"
      withHero={true}
      certificate={true}
    >
      <ContentSection />
      <Timeline />
      <Prestations />
      <Faq />
      <Testimonials />
      <Cta />
    </LandingPage>
  );
}
