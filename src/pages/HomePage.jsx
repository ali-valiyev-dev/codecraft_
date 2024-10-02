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
    <div className="bg-neutral-white w-full h-full flex flex-col items-center justify-center">
      <Hero />
      <Solutions />
      <About />
      <CaseStudies />
      <Testimonials />
      <Contacts />
    </div>
  );
};

export default HomePage;
