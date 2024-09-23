import { Hero, Solutions } from "../sections";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-primary-blue flex flex-col items-center justify-center">
      <Hero />
      <Solutions />
    </div>
  );
};

export default Home;
