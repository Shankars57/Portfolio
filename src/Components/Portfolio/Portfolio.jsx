import React, { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Vanilla JS Music Player",
    img: "https://images.pexels.com/photos/6686443/pexels-photo-6686443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ullam ad eum ipsam cum, beatae enim et eaque quia dolor deleniti! Accusamus, provident repudiandae neque sapiente consequatur omnis perferendis necessitatibus?",

    link: "https://mellifluous-cobbler-860aa2.netlify.app/",
  },
  {
    id: 2,
    title: "React Food Delivery App",
    img: "https://images.pexels.com/photos/8939267/pexels-photo-8939267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ullam ad eum ipsam cum, beatae enim et eaque quia dolor deleniti! Accusamus, provident repudiandae neque sapiente consequatur omnis perferendis necessitatibus?",
    link: "https://digitial-diner.netlify.app/",
  },
  {
    id: 2,
    title: "React Portfolio",
    img: "https://images.pexels.com/photos/7552372/pexels-photo-7552372.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ullam ad eum ipsam cum, beatae enim et eaque quia dolor deleniti! Accusamus, provident repudiandae neque sapiente consequatur omnis perferendis necessitatibus?",
    link: "https://shankarportfo.netlify.app",
  },
];

const Single = ({ items }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:['start start','end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            {" "}
            <img ref={ref} src={items.img} alt={items.title} />
          </div>

          <motion.div className="textContainer content" style={{ y }}>
            <h2>{items.title}</h2>
            <p>{items.desc}</p>
            <button style={{ cursor: "pointer" }}>
              <a href={items.link}>See Demo</a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }}  className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single items={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
