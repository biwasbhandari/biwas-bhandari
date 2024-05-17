import { ArrowDown, Youtube } from "lucide-react";
import profile from "../../assets/me.png";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById("project");
    if (contactElement) {
      scroll.scrollTo(contactElement.offsetTop, {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    }
  };

  return (
    <motion.section
      className="bg-white dark:bg-gray-800 flex flex-col-reverse items-center md:justify-around justify-center md:flex-row p-3 min-h-[85vh]"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="home"
    >
      <div className="container mx-auto px-6 flex-col flex md:w-1/2 w-full p-3">
        <motion.h1
          className="font-bold md:text-6xl text-3xl text-center font-bebas-neue uppercase leading-none text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Frontend Developer..
        </motion.h1>
        <motion.p
          className="my-4 md:text-2xl text-xl text-center text-gray-700 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Experienced in react, typescript, mongodb for 2 years and currently
          learning python to deep dive into Generative AI.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-2 mt-5 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            onClick={scrollToContact}
            className="uppercase py-2 px-4 rounded-lg border-2 border-transparent text-white text-md mr-4 "
          >
            My Projects <ArrowDown height={15} />{" "}
          </Button>
          <a
            href="https://youtube.com/@s-biwas"
            target="_blank"
            className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 dark:text-white  hover:text-white text-md flex items-center gap-2"
          >
            Youtube <Youtube />
          </a>
        </motion.div>
      </div>
      <motion.div
        className=" md:flex justify-center md:w-1/2 w-full p-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <img
          src={profile}
          alt="biwas"
          className="max-w-xs md:max-w-sm m-auto md:h-auto md:max-h-[80vh] lg:max-h-[80vh] border-l xl:max-h-[80vh] rounded-lg"
          loading="lazy"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
