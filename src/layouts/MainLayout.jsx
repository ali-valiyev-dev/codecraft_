import { Header } from "../components";
import { Outlet } from "react-router-dom";
import Footer from "../sections/Footer";

const MainLayout = () => {
  return (
    <div className="bg-primary-blue w-full flex flex-col items-center relative">
      <Header />
      <main className="bg-primary-blue w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
