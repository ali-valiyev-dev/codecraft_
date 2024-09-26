import { useParams } from "react-router-dom";

const IndustriesPage = () => {
  const params = useParams();
  // const navigate = useNavigate();

  return <div>{params.id}</div>;
};

export default IndustriesPage;
