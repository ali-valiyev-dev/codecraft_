import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const useAnimation = (selectors, dep) => {
  const selectorsRef = useRef(selectors);

  useGSAP(() => {
    selectorsRef.current = selectors;

    const mm = gsap.matchMedia();

    const animateElements = (startPosition, selector) => {
      gsap.fromTo(
        selector,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15,
          scrollTrigger: {
            trigger: selector,
            start: startPosition,
            toggleActions: "play none none none",
          },
        }
      );
    };

    selectorsRef.current.forEach(selector => {
      mm.add("(min-width: 1280px)", () => animateElements("top 75%", selector));
      mm.add("(min-width: 767px) and (max-width: 1279px)", () =>
        animateElements("top 80%", selector)
      );
      mm.add("(max-width: 766px)", () => animateElements("top 85%", selector));
    });

    return () => {
      mm.revert();
    };
  }, [dep]);
};

export default useAnimation;
