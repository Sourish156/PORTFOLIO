import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaCube, 
  FaDraftingCompass, 
  FaBuilding, 
  FaIndustry,
  FaCogs,
  FaRulerCombined,
  FaLightbulb,
  FaPalette
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    {
      icon: <FaDraftingCompass />,
      title: "AutoCAD Mastery",
      description: "Expert-level proficiency in AutoCAD for precise technical drawings, schematics, and engineering designs",
      level: 95
    },
    {
      icon: <FaCube />,
      title: "3D Modeling",
      description: "Creating detailed and realistic 3D models for products, architecture, and industrial applications",
      level: 90
    },
    {
      icon: <FaBuilding />,
      title: "Architectural Design",
      description: "Comprehensive architectural visualization and building design with attention to detail",
      level: 85
    },
    {
      icon: <FaIndustry />,
      title: "Product Design",
      description: "Industrial product modeling and design optimization for manufacturing processes",
      level: 88
    },
    {
      icon: <FaCogs />,
      title: "Technical Drawing",
      description: "Precision engineering drawings and technical documentation for various industries",
      level: 92
    },
    {
      icon: <FaRulerCombined />,
      title: "Dimensional Analysis",
      description: "Accurate measurements and dimensional analysis for manufacturing and assembly",
      level: 87
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
      description: "Creative solutions for complex design challenges and technical requirements",
      level: 90
    },
    {
      icon: <FaPalette />,
      title: "Rendering & Visualization",
      description: "High-quality renders and visualizations that bring designs to life",
      level: 85
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>Skills & Expertise</h2>
          <p>Comprehensive technical skills and professional capabilities</p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-progress">
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  ></motion.div>
                </div>
                <span className="progress-text">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="summary-content">
            <h3>Why Choose My Services?</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <h4>Precision & Accuracy</h4>
                <p>Every detail is carefully crafted to meet exact specifications and industry standards.</p>
              </div>
              <div className="summary-item">
                <h4>Fast Turnaround</h4>
                <p>Efficient workflow ensures timely delivery without compromising on quality.</p>
              </div>
              <div className="summary-item">
                <h4>Professional Quality</h4>
                <p>Industry-standard outputs that exceed expectations and client requirements.</p>
              </div>
              <div className="summary-item">
                <h4>Ongoing Support</h4>
                <p>Continuous communication and support throughout the project lifecycle.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
