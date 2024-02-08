import logo from "../../assets/Logo.png";
import { Button } from "../ui/button";

import { animateScroll as scroll } from "react-scroll";

const Logo = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById("home");
    if (contactElement) {
      scroll.scrollTo(contactElement.offsetTop, {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    }
  };
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <Button onClick={scrollToContact} variant="ghost">
          <img src={logo} alt="Biwas" height={50} width={50} />{" "}
        </Button>
      </div>
    </div>
  );
};
export default Logo;
