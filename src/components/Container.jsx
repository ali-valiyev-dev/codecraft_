import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <section className="bg-neutral-white w-full mx-auto max-w-screen-2xl px-4 md:px-8 xl:px-16 py-10 lg:py-14 xl:py-20">
      {children}
    </section>
  );
};
Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
