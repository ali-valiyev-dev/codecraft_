import { useGSAP } from "@gsap/react";
import { useFetchMedia, useLoadingState } from "../hooks";
import Loading from "./Loading";
import animate from "../utils/animate";

const ImagesGrid = () => {
  const { mediaSrc: image1 } = useFetchMedia("images", "team-1.webp");
  const { mediaSrc: image2 } = useFetchMedia("images", "team-2.webp");
  const { mediaSrc: image3 } = useFetchMedia("images", "team-3.webp");

  const { loading, error } = useLoadingState(image1, image2, image3);

  useGSAP(() => {
    if (!loading) {
      animate([".anim-grid-image"]);
    }
  }, [loading]);

  if (error) return null;

  if (loading) return <Loading />;

  return (
    <div className="flex h-full gap-2">
      <div className="flex flex-col gap-2 w-1/2">
        <img
          src={image1}
          loading="eager"
          alt="Codecraft team"
          className="anim-grid-image w-full h-1/2 object-cover rounded-sm"
        />
        <img
          src={image2}
          loading="eager"
          alt="Codecraft team"
          className="anim-grid-image w-full h-1/2 object-cover rounded-sm"
        />
      </div>

      <div className="w-1/2">
        <img
          src={image3}
          loading="eager"
          alt="Codecraft team"
          className="anim-grid-image w-full h-full object-cover rounded-sm"
        />
      </div>
    </div>
  );
};

export default ImagesGrid;
