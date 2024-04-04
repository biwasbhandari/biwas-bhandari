import React from "react";
import { Button } from "../ui/button";
// import { ModeToggle } from "../mode-toggle";

import { animateScroll as scroll } from "react-scroll";
import { Mobnav } from "./Mobnav";

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
    <div className="flex items-center gap-2">
   
      <Button onClick={scrollToContact}>Contact Me</Button>
      <Mobnav />
    </div>
  );
};

export default MenuToggle;
