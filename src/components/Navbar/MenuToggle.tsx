import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";

import { animateScroll as scroll } from "react-scroll";

const MenuToggle: React.FC = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      scroll.scrollTo(contactElement.offsetTop, {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    }
  };

  return (
    <div className="flex items-center gap-3">
      <ModeToggle />
      <Button onClick={scrollToContact}>Contact</Button>
    </div>
  );
};

export default MenuToggle;
