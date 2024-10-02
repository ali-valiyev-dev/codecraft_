import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  Button,
  Container,
  Accordion,
  SectionHeader,
  TechPartners,
} from "../components";
import { SOLUTIONS_DATA } from "../constants";

const SolutionsPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const solution = SOLUTIONS_DATA.find(solution => solution.id === params.id);

  useEffect(() => {
    if (!solution) {
      navigate("/notFound");
    }
  }, [solution, navigate]);

  if (!solution) return null;

  const { pageTitle, pageSubtitle, img, title, desc, accordionData } = solution;

  return (
    <Container>
      <div className="space-y-16">
        {/* header with image */}
        <div className="flex flex-col items-center justify-center gap-8 ">
          {/* section header */}
          <SectionHeader
            title={pageTitle}
            subtitle={pageSubtitle}
          />

          {/* main content */}
          <div className="w-full flex flex-col-reverse lg:flex-row gap-6 xl:gap-12">
            {/* leftside content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
              {/* text content */}
              <h1 className="text-2xl lg:text-3xl xl:text-4xl text-primary-blue font-semibold">
                {title}
              </h1>

              <p className="text-black text-lg text-balance">{desc}</p>

              {/* button */}
              <Button
                title="Reach Out To Us"
                icon="lucide:arrow-right"
                onClick={() => {
                  navigate("/contacts");
                }}
                alt="Navigate to Contact page"
              />
            </div>

            {/* rightside image content */}
            <div className="lg:w-1/2 rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={img}
                alt={`${pageTitle} Cover`}
              />
            </div>
          </div>
        </div>

        {/* accordion */}
        <div className="space-y-6">
          <h2 className="text-4xl text-primary-blue font-semibold">
            {`Our ${pageTitle}`}
          </h2>

          <Accordion data={accordionData} />
        </div>

        {/* tech partners */}
        <TechPartners />
      </div>
    </Container>
  );
};

export default SolutionsPage;
