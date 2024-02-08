import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import { Navlist } from "./Navlist";
import clsx from "clsx";

const Navbar: React.FC = () => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > prevScrollY) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }

      setPrevScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);
  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{ y: scrollingDown ? -50 : 0 }}
      transition={{ duration: scrollingDown ? 0.6 : 0.5 }}
      className={clsx(
        "flex justify-between  items-center bg-background animate-fade-in font-normal p-2 border-b  relative z-50",
        !scrollingDown && "sticky top-0"
      )}
    >
      <Logo />
      <Navlist />
      <MenuToggle />
    </motion.div>
  );
};

export default Navbar;
