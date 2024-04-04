import { ArrowDown, Youtube } from "lucide-react";
import profile from "../../assets/profile.png";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById("skill");
    if (contactElement) {
      scroll.scrollTo(contactElement.offsetTop, {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    }
  };
  
  return (
    <motion.section
      className="flex flex-col-reverse items-center md:justify-around justify-center md:flex-row p-3 min-h-[90vh] "
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="home"
    >
      <div className="flex-col  flex md:w-1/2 w-full p-3">
        <motion.h1
          className="font-bold md:text-6xl text-3xl text-center "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        Frontend Developer..
        </motion.h1>
           <motion.p
          className="my-4 text-secondary-foreground md:text-3xl text-xl text-center font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I help local businesses by providing them tailored support and micro services.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-2 mt-5 justify-center "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button onClick={scrollToContact} className="flex items-center">My Services <ArrowDown height={15}/> </Button>
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
        <img src={profile} alt="biwas" className="md:h-auto  md:max-h-[60vh] lg:max-h-[70vh] border-l xl:max-h-[80vh]" loading="lazy"  />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
