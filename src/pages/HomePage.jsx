import { TechPartners } from "../components";
import {
  About,
  CaseStudies,
  Contacts,
  Hero,
  Solutions,
  Testimonials,
} from "../sections";

const HomePage = () => {
  return (
    <div
      id="home"
      className="bg-primary-blue flex flex-col items-center justify-center">
      <Hero />
      <Solutions />
      <About />
      <TechPartners />
      <CaseStudies />
      <Testimonials />
      <Contacts />
    </div>
  );
};

export default HomePage;
