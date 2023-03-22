import LandingPage from "../components/Layout/LandingPage";
import ContentSection from "../components/Organisms/ContentSection";
import Cta from "../components/Organisms/Cta";
import Faq from "../components/Organisms/FAQ/Faq";
import Prestations from "../components/Organisms/Prestations";
import Testimonials from "../components/Organisms/Testimonials";

export default function Home() {
  return (
    <LandingPage
      description="Page d'accueil"
      title="Accueil || AdsVenture"
      withHero={true}
    >
      <ContentSection />
      <Prestations />
      <Faq />
      <Testimonials />
      <Cta />
    </LandingPage>
  );
}
