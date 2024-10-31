import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Container,
  Accordion,
  SectionHeader,
  Loading,
} from "../components";
import { useGSAP } from "@gsap/react";
import animate from "../utils/animate";
import { useFetchData, useFetchMedia, useLoadingState } from "../hooks";
import { VALID_SOLUTION_IDS } from "../constants";
import { useEffect } from "react";
import { TechPartners } from "../sections";

const SolutionsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!VALID_SOLUTION_IDS.includes(id)) {
      navigate("/notFound");
    }
  }, [navigate, id]);

  const { data: solutionsData } = useFetchData("solutions_data", "*", [
    "solution_id",
    id,
  ]);

  const solution = solutionsData[0];

  const mediaSrc = useFetchMedia("images", solution?.img);

  const { loading, error } = useLoadingState(solutionsData, mediaSrc);

  useGSAP(() => {
    if (!loading) {
      animate([".anim-solution-content"]);
    }
  }, [loading]);

  if (error) return null;
  if (loading || !solution) return <Loading />;

  const { pageTitle, pageSubtitle, title, desc, accordionData } = solution;

  return (
    <Container>
      <div className="space-y-16 mt-20">
        {/* header with image */}
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="anim-solution-content">
            <SectionHeader
              title={pageTitle}
              subtitle={pageSubtitle}
            />
          </div>

          {/* main content */}
          <div className="w-full flex flex-col-reverse lg:flex-row gap-6 xl:gap-12">
            {/* leftside content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
              <h1 className="anim-solution-content text-2xl lg:text-3xl xl:text-4xl text-primary-blue font-semibold">
                {title}
              </h1>

              <p className="anim-solution-content text-black lg:text-lg">
                {desc}
              </p>

              <div className="anim-solution-content">
                <Button
                  title="Reach Out To Us"
                  icon="lucide:arrow-right"
                  onClick={() => navigate("/contacts")}
                  alt="Navigate to Contact page"
                />
              </div>
            </div>

            {/* rightside image content */}
            <div className="anim-solution-content lg:w-1/2 rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={mediaSrc.mediaSrc}
                loading="eager"
                alt={`${pageTitle} Cover`}
              />
            </div>
          </div>
        </div>

        {/* accordion */}
        <div className="space-y-6">
          <h2 className="anim-solution-content text-2xl lg:text-4xl text-primary-blue font-semibold">
            What We Offer
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
