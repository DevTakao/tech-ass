import Nav from "./Nav";
import CTASection from "./CTASection";
import ImpactArtwork from "./ImpactArtwork";
import PartnerSection from "./PartnerSection";
import SloganSection from "./SloganSection";
import WorkflowSection from "./WorkflowSection";
import QuoteSection from "./QuoteSection";
import CharityAd from "./CharityAd";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <main>
      <Nav />
      <CTASection />
      <PartnerSection />
      <ImpactArtwork />
      <SloganSection />
      <WorkflowSection />
      <QuoteSection />
      <CharityAd />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Home;
