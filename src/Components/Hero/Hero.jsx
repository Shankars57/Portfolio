import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";
import { duration } from "@mui/material";

const slideVariants = {
  initial: { x: 0 },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      staggerChildren: 0.1,
      duration: 1.5,
    },
  },
  scrollButton: {
    opacity: 0.5,
    y: 10,
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
  scrollText: {
    x: 100,
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
  scale: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Shankar Bonam </motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and UI Designer.
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button
              variants={textVariants}
              whileHover="scale"
              whileTap="tap"
            >
              <a href="#Services">See the latest works</a>
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover="scale"
              whileTap="tap"
            >
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            animate="scrollButton"
            variants={textVariants}
            src="/scroll.png"
            alt="scroll me"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={slideVariants}
        initial="initial"
        animate="animate"
      >
        Frontend Web Developer and Web Designer.{" "}
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
