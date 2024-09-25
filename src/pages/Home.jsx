import { About, CaseStudies, Hero, Solutions, Testimonials } from "../sections";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-primary-blue flex flex-col items-center justify-center">
      <Hero />
      <Solutions />
      <About />
      <CaseStudies />
      <Testimonials />
    </div>
  );
};

export default Home;
