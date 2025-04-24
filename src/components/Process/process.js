import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./process.css";

const Process = () => {
  const steps = [
    {
      id: 1,
      phase: "Step 1",
      title: "Collect Emotional Data",
      description:
        "Using NLP to analyze real customer conversations, reviews, and behavior—pulling out the emotions, fears, and desires driving purchases.",
      color: "rgba(136, 48, 195, 0.8)",
    },
    {
      id: 2,
      phase: "Step 2",
      title: "Analyze Emotional Motivators",
      description:
        "Categorizing this data into 9 key emotional motivators—so you know exactly what's moving the needle.",
      color: "rgba(136, 48, 195, 0.8)",
    },
    {
      id: 3,
      phase: "Step 3",
      title: "Identify Core Emotional Drivers",
      description:
        "Pinpointing the top 3 emotional triggers that influence your audience most, prioritizing these for your messaging and creatives.",
      color: "rgba(136, 48, 195, 0.8)",
    },
    {
      id: 4,
      phase: "Step 4",
      title: "Uncover Evergreen Emotions",
      description:
        "Revealing the long-term emotional triggers that will keep working—so you're not constantly chasing trends.",
      color: "rgba(136, 48, 195, 0.8)",
    },
    {
      id: 5,
      phase: "Step 5",
      title: "Create a Strategy Roadmap",
      description:
        "Aligning your ads, landing pages, and website copy with the psychology of your customers—turning insights into a scalable, profitable growth plan.",
      color: "rgba(136, 48, 195, 0.8)",
    },
    {
      id: 6,
      phase: "Step 6",
      title: "Drive Results with Emotional Insights",
      description:
        "We apply these findings to your campaigns so you stop guessing and start converting.",
      color: "rgba(136, 48, 195, 0.8)",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="process-container" id="process">
      <div className="process-background">
        <div className="process-bg-element-1"></div>
        <div className="process-bg-element-2"></div>
      </div>

      <motion.div
        className="process-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="process-header" variants={itemVariants}>
          <h2 className="process-title">My Process</h2>
        </motion.div>

        <div className="process-cards">
          {steps.map((step) => (
            <Card
              key={step.id}
              phase={step.phase}
              title={step.title}
              description={step.description}
              color={step.color}
            />
          ))}
        </div>

        <motion.div className="process-cta" variants={itemVariants}>
          <p className="cta-text">
            📌 Want a marketing strategy that actually works?
          </p>
          <a href="contact" className="cta-button">
            Book a Free Call
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Card = ({ phase, title, description, color }) => {
  const [active, setActive] = useState(false);

  // Handle both hover on desktop and click on mobile
  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setActive(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setActive(false);
    }
  };

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <motion.div
      className="process-card"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Card corners */}
      <div className="card-corner top-left"></div>
      <div className="card-corner top-right"></div>
      <div className="card-corner bottom-left"></div>
      <div className="card-corner bottom-right"></div>

      {/* Phase badge only visible when not active */}
      {!active && (
        <div className="phase-badge centered">
          <span className="phase-text">{phase}</span>
        </div>
      )}

      <AnimatePresence>
        {active && (
          <motion.div
            className="card-content-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ backgroundColor: color }}
          >
            <div className="card-content-inner">
              <h3 className="card-title">{title}</h3>
              <p className="card-description">{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Process;
