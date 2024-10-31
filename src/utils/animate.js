import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animate = selectors => {
  const mm = gsap.matchMedia();

  const animateElements = (selector, startPosition) => {
    gsap.fromTo(
      selector,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: selector,
          start: startPosition,
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  };

  mm.add("(min-width: 1280px)", () => {
    selectors.forEach(selector => animateElements(selector, "top 75%"));
  });

  mm.add("(min-width: 767px) and (max-width: 1279px)", () => {
    selectors.forEach(selector => animateElements(selector, "top 80%"));
  });

  mm.add("(max-width: 766px)", () => {
    selectors.forEach(selector => animateElements(selector, "top 85%"));
  });

  ScrollTrigger.refresh();
};

export default animate;
