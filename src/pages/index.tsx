import Reactpixel, { pageView } from "react-facebook-pixel";
import { HeroSection } from "../components/HeroSection";
import { Public as Layout } from "../layouts/Public";
import { Testimonials } from "../components/Testimonials";
import { Questioner } from "../components/Questioner/Questioner";
import { HowItWorks } from "../components/HowItWorks";

const index = () => {
  Reactpixel.init("993435672043956");
  pageView();

  return (
    <Layout>
      <HeroSection />
      <HowItWorks />
      <Questioner />
      <Testimonials />
    </Layout>
  );
};

export default index;
