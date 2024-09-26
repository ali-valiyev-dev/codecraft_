import { useParams } from "react-router-dom";

const SolutionsPage = () => {
  const params = useParams();
  // const navigate = useNavigate();

  return <div>{params.id}</div>;
};

export default SolutionsPage;
