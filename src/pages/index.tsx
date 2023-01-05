import { HeroSection } from "../components/HeroSection";
import { Public as Layout } from "../layouts/Public";
import { Testimonials } from "../components/Testimonials";
import { Questioner } from "../components/Questioner/Questioner";
import { HowItWorks } from "../components/HowItWorks";

const index = () => {
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
