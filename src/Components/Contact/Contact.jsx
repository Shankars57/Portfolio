import { motion, useInView } from "framer-motion";
import "./Contact.scss";
import { useRef, useState } from "react";
import emailJs from "@emailjs/browser";

const variant = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const Contact = () => {
  const formRef = useRef(null);
  const svgRef = useRef(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const inView = useInView(svgRef, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();
    emailJs
      .sendForm("service_llmbxlh", "template_cndn9ph", formRef.current, {
        publicKey: "yN7vFYrgtemSaxEph",
      })
      .then(
        () => setSuccess(true),
        () => setError(true)
      );
  };

  return (
    <motion.div
      variants={variant}
      initial="initial"
      whileInView="animate"
      className="contact"
    >
      <motion.div variants={variant} className="textContainer">
        <motion.h1 variants={variant}>Let's work together</motion.h1>
        <motion.div className="items">
          <h2>Mail</h2>
          <p>BonamGShankar@gmail.com</p>
        </motion.div>
        <motion.div variants={variant} className="items">
          <h2>Address</h2>
          <p>Peddapuram</p>
        </motion.div>
        <motion.div variants={variant} className="items">
          <h2>Contact</h2>
          <p>9110560147</p>
        </motion.div>
      </motion.div>

      <motion.div variants={variant} className="formContainer">
        <motion.div
          className="phoneSvg"
          ref={svgRef}
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg"
          >
            <motion.path
              ref={svgRef}
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 3 }}
              d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        <motion.form
          ref={formRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            placeholder="Name"
            name="from_name"
            autoComplete="off"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="off"
            required
          />
          <textarea
            rows={8}
            placeholder="Message"
            name="message"
            autoComplete="off"
            required
          />
          <button type="submit">Submit</button>
          {error && <p style={{ color: "red" }}>Not Sent 😟</p>}
          {success && <p style={{ color: "green" }}>Success 👍🏻</p>}
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
