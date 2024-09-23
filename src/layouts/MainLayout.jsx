import { Header } from "../components";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-primary-blue w-full flex flex-col  items-center relative ">
      <Header />
      <main className="bg-primary-blue h-screen w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
