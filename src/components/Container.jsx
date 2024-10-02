import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <section className="bg-neutral-white w-full mx-auto max-w-screen-2xl px-4 md:px-10 xl:px-16 py-28">
      {children}
    </section>
  );
};
Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
