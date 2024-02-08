import { useState, useEffect } from "react";

const Animation = (elementId: string) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(elementId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementId]);

  const revealClass = isVisible
    ? "opacity-100 translate-y-0 transition-opacity duration-700"
    : "opacity-0 translate-y-10";

  return revealClass;
};

export default Animation;
