import { About, CaseStudies, Hero, Solutions } from "../sections";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-primary-blue flex flex-col items-center justify-center">
      <Hero />
      <Solutions />
      <About />
      <CaseStudies />
    </div>
  );
};

export default Home;
