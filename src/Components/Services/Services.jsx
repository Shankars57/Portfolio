import React, { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: { x: "-100%", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 1,
    },
  },
};
const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, {
    rootMargin: "-150px",
  });
  return (
    <motion.div
      variants={variants}
      className="services"
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
     
    >
      <motion.div variants={variants} className="textContainer">
        <p>
          Focus on helping your brand grow
          <br /> and more forward
        </p>
        <hr />
      </motion.div>
      <motion.div variants={variants} className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:'orange'}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:'orange'}}>For Your</motion.b> Business
          </h1>
          <button>What we do?</button>
        </div>
      </motion.div>
      <motion.div variants={variants} className="listContainer">
        <motion.div
          variants={variants}
          whileHover={{ background: "rgba(211, 211, 211, 1)", color: "black" }}
          className="box"
        >
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos, ducimus tempora consequuntur molestias accusamus, qui
            suscipit dolores ratione, obcaecati est quas nesciunt deserunt
            aliquam distinctio tempore velit exercitationem explicabo
            blanditiis.
          </p>
          <button>Go</button>
        </motion.div>{" "}
        <motion.div
          variants={variants}
          whileHover={{ background: "lightGray", color: "black" }}
          className="box"
        >
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos, ducimus tempora consequuntur molestias accusamus, qui
            suscipit dolores ratione, obcaecati est quas nesciunt deserunt
            aliquam distinctio tempore velit exercitationem explicabo
            blanditiis.
          </p>
          <button>Go</button>
        </motion.div>{" "}
        <motion.div
          variants={variants}
          whileHover={{ background: "lightGray", color: "black" }}
          className="box"
        >
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos, ducimus tempora consequuntur molestias accusamus, qui
            suscipit dolores ratione, obcaecati est quas nesciunt deserunt
            aliquam distinctio tempore velit exercitationem explicabo
            blanditiis.
          </p>
          <button>Go</button>
        </motion.div>{" "}
        <motion.div
          variants={variants}
          whileHover={{ background: "lightGray", color: "black" }}
          className="box"
        >
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos, ducimus tempora consequuntur molestias accusamus, qui
            suscipit dolores ratione, obcaecati est quas nesciunt deserunt
            aliquam distinctio tempore velit exercitationem explicabo
            blanditiis.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
