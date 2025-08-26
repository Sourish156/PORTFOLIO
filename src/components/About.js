import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUser, FaAward, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { icon: <FaBriefcase />, number: "50+", label: "Projects Completed" },
    { icon: <FaAward />, number: "5+", label: "Years Experience" },
    { icon: <FaUser />, number: "30+", label: "Happy Clients" },
    { icon: <FaGraduationCap />, number: "100%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>About Me</h2>
          <p>Get to know the professional behind the 3D models</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
                         <div className="profile-image">
               <img 
                 src="/profile-photo.jpg" 
                 alt="Sourish Chattopadhyay - Professional 3D Modeler"
                 className="profile-photo"
                 onError={(e) => {
                   e.target.style.display = 'none';
                   e.target.nextSibling.style.display = 'flex';
                 }}
               />
               <div className="image-placeholder" style={{ display: 'none' }}>
                 <FaUser />
                 <p>Profile Photo</p>
               </div>
             </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Sourish Chattopadhyay</h3>
            <h4>Professional 3D Modeler & AutoCAD Master</h4>
            
            <p>
              I am a passionate and skilled 3D modeler with extensive expertise in AutoCAD, 
              specializing in creating high-quality product models and architectural visualizations. 
              With years of experience in the industry, I bring ideas to life through precise 
              technical drawings and stunning 3D renderings.
            </p>
            
            <p>
              My work spans across various industries including product design, architecture, 
              engineering, and manufacturing. I pride myself on delivering exceptional quality 
              that meets the highest standards of precision and detail.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <FaAward />
                </div>
                <div className="feature-content">
                  <h5>Expert in AutoCAD</h5>
                  <p>Master-level proficiency in AutoCAD for precise technical drawings</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <FaBriefcase />
                </div>
                <div className="feature-content">
                  <h5>3D Modeling Specialist</h5>
                  <p>Creating detailed and realistic 3D models for various applications</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <FaUser />
                </div>
                <div className="feature-content">
                  <h5>Professional Service</h5>
                  <p>Dedicated to delivering quality work on time and within budget</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
