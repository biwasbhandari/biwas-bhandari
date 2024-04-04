
import { Button } from "../ui/button";

import { useEffect, useState } from "react";

import {  ArrowRightFromLine,  } from "lucide-react";

const skillCategories = [
  {
    category: "Web design",
    icons: [
      { Icon: ArrowRightFromLine, name: "Landing Page" },
      { Icon: ArrowRightFromLine, name: "Ecommerce Website" },
      { Icon: ArrowRightFromLine, name: "Portfolio Website" },
  
    ],
  },
  {
    category: "Graphics Design",
    icons: [
      { Icon: ArrowRightFromLine, name: "Banner Design" },
      { Icon: ArrowRightFromLine, name: "Logo Design" },
      { Icon: ArrowRightFromLine, name: "Menu Design" },
    ],
  },
  {
    category: "Other",
    icons: [
      { Icon: ArrowRightFromLine, name: "Flex Print" },
      { Icon: ArrowRightFromLine, name: "Color Print" },
      { Icon: ArrowRightFromLine, name: "Social Media Handling" },
      { Icon: ArrowRightFromLine, name: "Video editing" },
    ],
  },
];

const Skill = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skill");
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
  }, []);

  const revealClass = isVisible
    ? "opacity-100 translate-y-0 transition-opacity duration-900"
    : "opacity-0 translate-y-10";
  return (
    <div className={`p-8 rounded-lg  ${revealClass}`} id="skill">
      <h2 className="text-2xl font-bold mb-4">My Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6   ">
        {skillCategories.map(({ category, icons }, index) => (
          <div
            key={index}
            className={`mb-4 flex items-start flex-col border-r border-b shadow-sm p-3 hover:bg-primary-foreground `}
          >
            <h3 className="text-lg font-semibold mb-2">{category}</h3>
            {icons.map(({ Icon, name }, iconIndex) => (
              <div
                key={iconIndex}
                className="flex items-center gap-3 md:mb-7 mb-4"
              >
                <Icon className="text-3xl" />
                <Button variant="outline" size="sm">
                  {name}
                </Button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
