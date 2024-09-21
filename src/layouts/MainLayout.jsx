import PropTypes from "prop-types";
import { Header } from "../components";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-primary-blue w-full min-h-screen flex flex-col  items-center relative">
      <Header />
      <main className="">{children}</main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
