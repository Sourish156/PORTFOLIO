import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEye, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Modern Architectural Building",
      category: "Architecture",
      description: "A contemporary multi-story building design with modern aesthetics, featuring glass facades, balconies, and sophisticated lighting. This project showcases advanced architectural visualization techniques.",
      images: [
        {
          url: "/modern-architectural.jpg",
          alt: "Modern Architectural Building - 3D Model"
        }
      ],
      technologies: ["AutoCAD", "3D Modeling", "Rendering", "Architectural Design"],
      features: ["Detailed floor plans", "3D exterior visualization", "Lighting analysis", "Material specifications"]
    },
    {
      id: 2,
      title: "Stylized 3D Tree Model",
      category: "3D Modeling",
      description: "A beautifully rendered stylized tree with detailed foliage and natural lighting. This project demonstrates expertise in organic modeling and environmental visualization.",
      images: [
        {
          url: "/stylized-tree-model.jpg",
          alt: "Stylized 3D Tree Model"
        }
      ],
      technologies: ["3D Modeling", "Texturing", "Lighting", "Rendering"],
      features: ["Organic modeling", "Procedural texturing", "Natural lighting", "Environmental effects"]
    },
    {
      id: 3,
      title: "Industrial Product Design",
      category: "Product Design",
      description: "Precision engineering design for industrial components with detailed technical specifications and manufacturing considerations.",
      images: [
        {
          url: "/industrial-product.jpg",
          alt: "Industrial Product Design - 3D Model"
        }
      ],
      technologies: ["AutoCAD", "Technical Drawing", "Engineering Design", "Manufacturing"],
      features: ["Technical drawings", "Assembly instructions", "Material specifications", "Quality control"]
    },
    {
      id: 4,
      title: "Residential Interior Design",
      category: "Interior Design",
      description: "Complete interior design visualization with modern furniture, lighting, and spatial planning for residential spaces.",
      images: [
        {
          url: "/residential-interior.jpg",
          alt: "Residential Interior Design - 3D Visualization"
        }
      ],
      technologies: ["3D Modeling", "Interior Design", "Lighting Design", "Furniture Modeling"],
      features: ["Space planning", "Furniture layout", "Lighting design", "Material selection"]
    },
    {
      id: 5,
      title: "Salon Interior Design",
      category: "Interior Design",
      description: "Modern salon interior design with elegant styling stations, comfortable seating areas, and sophisticated lighting. This project showcases commercial interior design expertise with attention to customer experience and functionality.",
      images: [
        {
          url: "/salon-interior.jpg",
          alt: "Salon Interior Design - 3D Visualization"
        }
      ],
      technologies: ["3D Modeling", "Interior Design", "Commercial Design", "Lighting Design"],
      features: ["Styling stations layout", "Customer seating areas", "Professional lighting", "Modern aesthetics"]
    }
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>Portfolio</h2>
          <p>Showcasing my best 3D modeling and AutoCAD projects</p>
        </motion.div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-item"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openProject(project)}
            >
              <div className="portfolio-image">
                <img src={project.images[0].url} alt={project.images[0].alt} />
                <div className="portfolio-overlay">
                  <FaEye />
                </div>
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p className="portfolio-category">{project.category}</p>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-technologies">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="modal-overlay" onClick={closeProject}></div>
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <button className="modal-close" onClick={closeProject}>
                  <FaTimes />
                </button>
                
                <div className="modal-image-container">
                  <img 
                    src={selectedProject.images[currentImageIndex].url} 
                    alt={selectedProject.images[currentImageIndex].alt} 
                  />
                  {selectedProject.images.length > 1 && (
                    <>
                      <button className="modal-nav prev" onClick={prevImage}>
                        <FaArrowLeft />
                      </button>
                      <button className="modal-nav next" onClick={nextImage}>
                        <FaArrowRight />
                      </button>
                    </>
                  )}
                </div>
                
                <div className="modal-info">
                  <h2>{selectedProject.title}</h2>
                  <p className="modal-category">{selectedProject.category}</p>
                  <p className="modal-description">{selectedProject.description}</p>
                  
                  <div className="modal-technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-list">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
