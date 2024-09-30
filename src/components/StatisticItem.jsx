import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";

const StatisticItem = ({ label, total }) => {
  const valueRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const animation = gsap.fromTo(
      valueRef.current,
      { innerHTML: 0 },
      {
        innerHTML: total,
        duration: 2,
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

    return () => {
      animation.kill();
    };
  }, [total]);

  return (
    <div className="flex flex-col items-center justify-center gap-2 px-2">
      <div className="flex items-center justify-center">
        <h3
          ref={valueRef}
          className="text-4xl text-white">
          0
        </h3>
        {isLoaded && (
          <Icon
            icon={"mdi:plus"}
            width={36}
            height={36}
            className="text-primary-vividCyanBlue"
          />
        )}
      </div>
      <p className="lg:text-lg text-neutral-cyanBluishGray text-nowrap">
        {label}
      </p>
    </div>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default StatisticItem;
