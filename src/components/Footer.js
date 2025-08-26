import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Sourish Chattopadhyay</h3>
            <p>Professional 3D Modeler & AutoCAD Master</p>
            <p>Transforming ideas into stunning 3D reality with precision and creativity.</p>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Services</h4>
            <ul>
              <li>3D Modeling & Rendering</li>
              <li>AutoCAD Technical Drawings</li>
              <li>Architectural Visualization</li>
              <li>Product Design & Modeling</li>
              <li>Engineering Drawings</li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <a href="tel:+919641364188" className="footer-contact-item">
                <FaPhone />
                <span>+91 9641364188</span>
              </a>
              <a href="mailto:sourishchatterjee2005@gmail.com" className="footer-contact-item">
                <FaEnvelope />
                <span>sourishchatterjee2005@gmail.com</span>
              </a>
              <a href="https://wa.me/919641364188" className="footer-contact-item" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Sourish Chattopadhyay. All rights reserved.</p>
            <p>Professional 3D Modeling & AutoCAD Services</p>
          </div>
          
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
