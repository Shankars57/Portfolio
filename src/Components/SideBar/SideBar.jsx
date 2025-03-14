import React, { useState } from "react";
import "./sidebar.scss";
import Links from "./Links/Links";
import Toggle from "./toggleBtn/ToggleBtn";
import { motion } from "framer-motion";
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  close: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40, 
    },
  },
};
const SideBar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

 

  return (
    <motion.div
      className="sidebar"
      animate={open ? "open" : "close"} 
      variants={variants} 
    >
      <motion.div className="bg" variants={variants}>
        <Links open={open} />
      </motion.div>
      <Toggle open={open} setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;
