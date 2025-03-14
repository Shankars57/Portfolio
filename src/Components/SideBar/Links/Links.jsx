import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1, 
    },
  },
  close: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1, 
    },
  },
};

const itemVariants = {
  open: { opacity: 1, y: 0 }, 
  close: { opacity: 0, y: 50 }, 
};

const Links = ({ open }) => {
  const items = ["Home", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div className="links" variants={variants} animate={open ? "open" : "close"}>
      {items.map((item, i) => (
        <motion.a 
          key={i} 
          href={`#${item}`} 
          variants={itemVariants} 
          whileHover={{scale:1.1}}
          whileTap={{scale:0.95}}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
