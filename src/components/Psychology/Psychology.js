import React from "react";
import { motion } from "framer-motion";
import "./psychology.css";

const Psychology = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="psychology-container" id="psychology">
      <div className="psychology-background">
        <div className="psych-bg-element-1"></div>
        <div className="psych-bg-element-2"></div>
      </div>

      <motion.div
        className="psychology-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="psychology-header" variants={itemVariants}>
          <h2 className="psychology-title">
            <span className="highlight-text">Spoiler Alert:</span> Nobody
            actually cares about your product.
          </h2>
        </motion.div>

        <motion.div className="psychology-info" variants={itemVariants}>
          <p>
            What they care about is what your product makes <em>them feel</em>.
          </p>
          <p>
            Their fears. Their aspirations. Their egos. Their desire to be seen,
            admired, envied, or reassured…etc
          </p>
          <p>
            In other words:{" "}
            <span className="highlight-text">
              Your customers want to see themselves in your website, ads, emails
              etc.
            </span>
          </p>
        </motion.div>

        <motion.div className="psychology-banner" variants={itemVariants}>
          <h3>If Your Website Isn't Selling, It's Costing You.</h3>
          <p>
            You're running ads. Testing creatives. And still… your ads aren't
            converting.
          </p>
          <p>
            Your customers don't make <em>logical</em> decisions. They make{" "}
            <strong>emotional</strong> ones. Then, they justify those decisions
            with logic <em>after</em> the fact.
          </p>
        </motion.div>

        <motion.div className="psychology-emphasis" variants={itemVariants}>
          <p className="emphasis-text">
            <strong>
              That's why your ads, website, and emails need to speak to emotions
              first.
            </strong>
          </p>
        </motion.div>

        <motion.div className="psychology-approach" variants={itemVariants}>
          <p>
            Using a mix of{" "}
            <span className="highlight-text">
              NLP analysis, psychographic mapping, and identity-driven insights
            </span>
            , I decode what truly influences your audience—so your messaging
            stops feeling "salesy" and starts feeling{" "}
            <span className="highlight-text">
              like it was their idea all along!
            </span>
          </p>
        </motion.div>

        <motion.div className="callout-box" variants={itemVariants}>
          <h3>
            Know why they Buy
            <br />
            Before <em>THEY DO</em>
          </h3>
          <p>
            Stop wasting budget on ads, landing pages, and emails that don't
            convert.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Psychology;
