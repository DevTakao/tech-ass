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
      <div className="max-w-[1192px] mx-auto">
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
      </div>
    </main>
  );
};

export default Home;
