import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";
import useAnimation from "../utils/hooks/useAnimations";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const StatisticItem = ({ label, total }) => {
  const valueRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useAnimation([".anim-stat"]);

  useGSAP(() => {
    gsap.fromTo(
      valueRef.current,
      { innerHTML: 0 },
      {
        innerHTML: total,
        duration: 2,
        scrollTrigger: {
          trigger: valueRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        ease: "power1.inOut",
        snap: { innerHTML: 1 },
        onComplete: () => {
          const formattedTotal =
            total >= 1000 ? `${(total / 1000).toFixed(0)}K` : `${total}`;
          valueRef.current.innerHTML = formattedTotal;
          setIsLoaded(true);
        },
      }
    );
  }, [total]);

  return (
    <div className="anim-stat flex flex-col items-center justify-center gap-2 px-2">
      <div className="flex items-center justify-center text-4xl font-medium text-primary-blue">
        <h3 ref={valueRef}>0</h3>
        {isLoaded && <Icon icon={"mdi:plus"} />}
      </div>
      <p className="lg:text-lg text-neutral-500 text-nowrap">{label}</p>
    </div>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default StatisticItem;
