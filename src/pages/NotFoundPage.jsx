import { useNavigate } from "react-router-dom";
import { Button, Container } from "../components";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      {/* main content */}
      <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto text-center bg-blue-500 px-28 py-10 rounded-lg">
        <h1 className="text-9xl font-extrabold text-white">404</h1>

        <p className="text-4xl font-bold text-gray-300">Oops! Page not found</p>

        {/* button to go home */}
        <Button
          title="Back to Homepage"
          onClick={() => {
            navigate("/");
          }}
          alt="Navigate to Home page"
        />
      </div>
    </Container>
  );
};

export default NotFoundPage;
