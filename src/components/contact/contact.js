import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, "ved");
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      const result = await emailjs.sendForm(
        "service_bovedfk",
        "template_pdvco9v",
        form.current,
        "T0NFZjNzaa8nn2MQv"
      );

      if (result.status === 200) {
        setSubmitSuccess(true);
        setFormState({
          name: "",
          email: "",
          business: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="contact-container">
      <div className="contact-background">
        <div className="bg-element-1"></div>
        <div className="bg-element-2"></div>
      </div>

      <motion.div
        className="contact-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="contact-header" variants={itemVariants}>
          <h1 className="contact-title">Let's talk</h1>
        </motion.div>

        {/* <motion.div className="contact-options" variants={itemVariants}>
          <ul className="options-list">
            <li>
              <span>Startups should check</span>
              <a href="#agency" className="highlight-link">
                my agency
              </a>
              <span>out.</span>
            </li>
            <li>
              <span>For career advice book a</span>
              <a href="#mentor" className="highlight-link">
                mentor session
              </a>
              <span>.</span>
            </li>
          </ul>
          <p className="contact-else">Message me for anything else.</p>
        </motion.div> */}

        <motion.form
          ref={form}
          className="contact-form"
          onSubmit={handleSubmit}
          variants={containerVariants}
        >
          <motion.div className="form-field" variants={itemVariants}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div className="form-field" variants={itemVariants}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div className="form-field" variants={itemVariants}>
            <input
              type="text"
              id="business"
              name="business"
              placeholder="Business"
              value={formState.business}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div className="form-field" variants={itemVariants}>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formState.message}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>

          <motion.div className="form-submit" variants={itemVariants}>
            <button
              type="submit"
              className={`submit-button ${isSubmitting ? "submitting" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </motion.div>

          {submitSuccess && (
            <motion.div
              className="submit-success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Your message has been sent successfully!
            </motion.div>
          )}

          {submitError && (
            <motion.div
              className="submit-error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              There was an error sending your message. Please try again.
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
