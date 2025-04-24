import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation items
  const navItems = ["Contact", "Projects", "Skills", "Blog"];

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Variants for animations
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, duration: 0.5 },
    },
  };

  const menuListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5 },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * index + 0.4, duration: 0.5 },
    }),
  };

  // Helper function to check if a nav item is the current active page
  const isActive = (path) => {
    if (path === "Ishta") {
      return location.pathname === "/";
    }
    return location.pathname === `/${path.toLowerCase()}`;
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <motion.span
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            ISHITA
          </motion.span>
        </Link>

        <div
          className={`menu-icon ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <motion.ul
          className={`nav-menu ${isMenuOpen ? "active" : ""}`}
          variants={menuListVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {navItems.map((item, index) => (
              <motion.li
                className="nav-item"
                key={item}
                custom={index}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  to={item === "Ishta" ? "/" : `/${item.toLowerCase()}`}
                  className={`nav-links ${isActive(item) ? "active" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
