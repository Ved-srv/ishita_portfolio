import React, { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMic, FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import "./hero.css";
import ishta from "../../assets/ishta_img.jpg";

const Hero = () => {
  const headlines = [
    "I use identity-based targeting and conversion psychology for e-commerce brands that make impulse buyers act fast—and logical buyers feel like it was *their idea* all along.",
    "I help e-commerce brands go beyond guesswork—using psychology-backed messaging that moves people from Maybe later... to Take my money!",
    "I use qualitative, behavior-based insights that reveal the subconscious motivators behind your customers' decisions, helping you create ads, messaging, and offers that convert—with Zero Wasted Ad Spend.",
  ];

  // Animation variants for carousel with improved timing
  const carouselVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "#linkedin",
      delay: 0,
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "#twitter",
      delay: 0.1,
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "#instagram",
      delay: 0.2,
    },
    {
      name: "Podcast",
      icon: <FiMic />,
      url: "#podcast",
      delay: 0.3,
    },
    {
      name: "Email",
      icon: <FiMail />,
      url: "#email",
      delay: 0.4,
    },
  ];

  // Format headline with highlighted text
  const formatHeadline = (text) => {
    return text.split("*").map((part, index) => {
      // Every odd index is highlighted text
      return index % 2 === 1 ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      );
    });
  };

  // State for carousel
  const [[page, direction], setPage] = useState([0, 0]);

  // Calculate current index considering infinite looping
  const headlineIndex =
    ((page % headlines.length) + headlines.length) % headlines.length;

  // Function to handle pagination with debounce
  const [isAnimating, setIsAnimating] = useState(false);

  const paginate = useCallback(
    (newDirection) => {
      if (!isAnimating) {
        setIsAnimating(true);
        setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
        setTimeout(() => setIsAnimating(false), 800);
      }
    },
    [isAnimating]
  );

  // Auto-scroll carousel with improved timing
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        paginate(1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [page, isAnimating, paginate]);

  return (
    <div className="hero-container">
      <div className="hero-background">
        <div className="bg-element-1"></div>
        <div className="bg-element-2"></div>
      </div>

      <div className="hero-content">
        <div className="hero-image-container">
          <motion.div
            className="hero-image"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="image-overlay"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            ></motion.div>
            <img src={ishta} alt="Ishita Bhatt" className="profile-image" />
          </motion.div>
        </div>

        <div className="hero-text-container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-title"
          >
            Ishita Bhatt
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hero-profession"
          >
            <span>Conversion Rate Optimization Strategist</span>
            <span className="profession-separator">&</span>
            <span>Conversion Copywriter</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="hero-main-text"
          >
            I use qualitative, behavior-based insights that reveal the
            subconscious motivators behind your customers' decisions, helping
            you create ads, messaging, and offers that convert—with Zero Wasted
            Ad Spend.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <a href="contact" className="cta-button">
              Book a Free Call
            </a>
          </motion.div>

          <motion.div
            className="hero-social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.2 + social.delay }}
                whileHover={{ y: -3 }}
                className="social-icon"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="headline-carousel-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <h3 className="carousel-title">What I Do</h3>

        <div className="headline-carousel">
          <div className="carousel-controls">
            <button
              className="carousel-button prev"
              onClick={() => paginate(-1)}
            >
              ←
            </button>
            <div className="carousel-indicators">
              {headlines.map((_, index) => (
                <div
                  key={index}
                  className={`carousel-dot ${
                    index === headlineIndex ? "active" : ""
                  }`}
                  onClick={() =>
                    setPage([index, index > headlineIndex ? 1 : -1])
                  }
                />
              ))}
            </div>
            <button
              className="carousel-button next"
              onClick={() => paginate(1)}
            >
              →
            </button>
          </div>

          <div className="carousel-track">
            <AnimatePresence initial={false} custom={direction} mode="sync">
              <motion.div
                key={page}
                custom={direction}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: {
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.2,
                  },
                }}
                className="carousel-card"
              >
                {formatHeadline(headlines[headlineIndex])}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="client-logos"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="logo-placeholder"></div>
        <div className="logo-placeholder"></div>
        <div className="logo-placeholder"></div>
      </motion.div>
    </div>
  );
};

export default Hero;
