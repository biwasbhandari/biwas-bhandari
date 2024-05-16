// import logo from "../../assets/logo.png";
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
        <Button onClick={scrollToContact} variant="link">
          {/* <img src={logo} alt="Biwas" height={50} width={50} /> */}
          <p className="text-3xl font-bold">BiwasDev</p>
        </Button>
      </div>
    </div>
  );
};
export default Logo;
