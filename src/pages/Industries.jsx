import { useParams } from "react-router-dom";

const Industries = () => {
  const params = useParams();
  // const navigate = useNavigate();

  return <div>{params.id}</div>;
};

export default Industries;
