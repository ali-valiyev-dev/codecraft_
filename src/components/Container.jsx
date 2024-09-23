import PropTypes from "prop-types";

const Container = ({ id, children }) => {
  return (
    <section
      id={id}
      className="bg-primary-blue w-full mx-auto max-w-screen-2xl px-4 md:px-10 xl:px-16 py-28">
      {children}
    </section>
  );
};
Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Container;
