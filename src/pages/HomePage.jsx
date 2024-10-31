import {
  Hero,
  Solutions,
  About,
  TechPartners,
  Testimonials,
  CaseStudies,
  Contacts,
} from "../sections";

const HomePage = () => {
  return (
    <div className="bg-neutral-white w-full h-full flex flex-col items-center justify-center">
      <Hero />
      <Solutions />
      <About />
      <TechPartners />
      <Testimonials />
      <CaseStudies />
      <Contacts />
    </div>
  );
};

export default HomePage;
