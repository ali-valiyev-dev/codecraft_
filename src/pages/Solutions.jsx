import { useParams } from "react-router-dom";

const Solutions = () => {
  const params = useParams();
  // const navigate = useNavigate();

  return <div>{params.id}</div>;
};

export default Solutions;
