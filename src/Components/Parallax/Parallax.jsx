import React, { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
const Parallax = ({ type }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div
      ref={ref}
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg,#111132 , #0c0c1d)"
            : "linear-gradient(180deg,#111132 , #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What we do?" : "what we did?"}
      </motion.h1>

      <motion.div  className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
