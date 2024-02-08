import { Youtube } from "lucide-react";
import profile from "../../assets/profile.png";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Hero: React.FC = () => {
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
    <motion.section
      className="flex flex-col-reverse items-center md:justify-around justify-center md:flex-row p-3 min-h-[95vh]"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="home"
    >
      <div className="flex-col items-center flex md:w-1/2 w-full p-3">
        <motion.h1
          className="font-bold md:text-6xl text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Biwas Bhandari
        </motion.h1>
        <motion.p
          className="my-4 text-secondary-foreground md:text-3xl text-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Frontend developer passionate about creating elegant and user-friendly
          interfaces.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button onClick={scrollToContact}>Hire Me</Button>
          <Link to="https://youtube.com/@s-biwas" target="_blank">
            <Button variant="secondary" className="flex items-center gap-2">
              Youtube <Youtube />
            </Button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="flex justify-center md:w-1/2 w-full p-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <img src={profile} alt="biwas" className="h-full" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
