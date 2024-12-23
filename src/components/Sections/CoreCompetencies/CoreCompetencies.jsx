import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

const CoreCompetencies = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <section>
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills & Competencies</h2>
          <p>Highlighting hands-on experience and key technical skills across various technologies</p>
        </div>
        {/* End Section Title */}

        <div className="container">
          <div className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <Box sx={{ width: '100%' }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                centered
                sx={{
                  '& .MuiTabs-indicator': { backgroundColor: '#007bff' },
                  '& .MuiTab-root': {
                    fontWeight: 'bold',
                    textTransform: 'none',
                    '&.Mui-selected': { color: '#007bff' },
                  },
                }}
              >
                <Tab label="Languages & Frameworks" />
                <Tab label="DevOps & Tools" />
                <Tab label="Databases & Other Technologies" />
              </Tabs>
            </Box>
          </div>

          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
            {activeTab === 0 && (
              <Box>
                <TabPanel>
                  <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                      <h3>Languages & Frameworks</h3>
                      <p className="fst-italic">
                        Proficient in building robust applications across a variety of languages and frameworks.
                      </p>
                      <ul className="list-unstyled">
                        <li><i className="bi bi-check2-all text-primary"></i> <span>Python (Django, Pandas, Matplotlib)</span></li>
                        <li><i className="bi bi-check2-all text-primary"></i> <span>JavaScript (React, Redux, Node.js)</span></li>
                        <li><i className="bi bi-check2-all text-primary"></i> <span>Java (Spring Boot)</span></li>
                        <li><i className="bi bi-check2-all text-primary"></i> <span>Mobile Development with React Native (iOS, Android, Web)</span></li>
                        <li><i className="bi bi-check2-all text-primary"></i> <span>Frontend Development with React, Vue.js, and Angular</span></li>
                      </ul>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                      <img
                        src="https://bootstrapmade.com/content/demo/iLanding/assets/img/features-illustration-1.webp"
                        alt="Languages & Frameworks"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </TabPanel>
              </Box>
            )}

            {activeTab === 1 && (
              <Box>
                <TabPanel>
                  <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                      <h3>DevOps & Tools</h3>
                      <p className="fst-italic">
                        Experienced in utilizing various DevOps tools to streamline deployment and enhance productivity.
                      </p>
                      <ul className="list-unstyled">
                        <li><i className="bi bi-check2-all text-primary"></i> Proficiency in Docker (Docker Compose)</li>
                        <li><i className="bi bi-check2-all text-primary"></i> Nginx, Redis, Celery, Flower</li>
                        <li><i className="bi bi-check2-all text-primary"></i> Version control with Git and CI/CD workflows</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                      <img
                        src="https://bootstrapmade.com/content/demo/iLanding/assets/img/features-illustration-2.webp"
                        alt="DevOps & Tools"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </TabPanel>
              </Box>
            )}

            {activeTab === 2 && (
              <Box>
                <TabPanel>
                  <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                      <h3>Databases & Other Technologies</h3>
                      <p className="fst-italic">
                        Proficient in managing databases and utilizing a variety of additional technologies to enhance applications.
                      </p>
                      <ul className="list-unstyled">
                        <li><i className="bi bi-check2-all text-primary"></i> Databases: PostgreSQL, MySQL, MongoDB</li>
                        <li><i className="bi bi-check2-all text-primary"></i> Expertise in data processing with Pandas and Matplotlib</li>
                        <li><i className="bi bi-check2-all text-primary"></i> Excel: VLOOKUP, Pivot Tables, and advanced formulas</li>
                        <li><i className="bi bi-check2-all text-primary"></i> Microsoft Power BI for data visualization</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                      <img
                        src="https://bootstrapmade.com/content/demo/iLanding/assets/img/features-illustration-3.webp"
                        alt="Databases & Other Technologies"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </TabPanel>
              </Box>
            )}
          </div>
        </div>
      </section>

      {/* Features Cards Section */}
      <section id="features-cards" className="features-cards section">
        <div className="container">
          <div className="row gy-4">
            {[
              {
                icon: "bi-code-slash",
                title: "Python Development",
                text: "Hands-on experience with Python, including frameworks like Django, and libraries such as Pandas and Matplotlib for data analysis and visualization.",
                color: "blue",
              },
              {
                icon: "bi-braces",
                title: "JavaScript Frameworks",
                text: "Proficient in React, Redux, and Node.js for building dynamic, high-performance web applications.",
                color: "green",
              },
              {
                icon: "bi-box-arrow-in-up-right",
                title: "Mobile App Development",
                text: "Experienced in building cross-platform mobile applications using React Native for iOS, Android, and Web.",
                color: "orange",
              },
              {
                icon: "bi-cloud",
                title: "DevOps & Docker",
                text: "Strong expertise in containerization with Docker and Docker Compose for scalable application deployment.",
                color: "purple",
              },
              {
                icon: "bi-database",
                title: "Database Management",
                text: "Hands-on experience with PostgreSQL, ensuring efficient data management and storage for applications.",
                color: "red",
              },
              {
                icon: "bi-server",
                title: "Network & Systems",
                text: "Proficient with Nginx, Redis, and Celery for building scalable network systems and managing background tasks.",
                color: "cyan",
              },
              {
                icon: "bi-bar-chart-line",
                title: "Data Analysis & Power BI",
                text: "Competent in Excel (VLOOKUP, Pivot Tables, Formulas) and Microsoft Power BI for data analytics and reporting.",
                color: "teal",
              },
              {
                icon: "bi-cloud-arrow-up",
                title: "Cloud Services & Deployment",
                text: "Experienced in cloud computing and deployment, including tools like Docker and managing cloud-based services.",
                color: "pink",
              },
            ].map((feature, index) => (
              <div className="col-xl-3 col-md-6" key={index} data-aos="zoom-in" data-aos-delay={(index + 1) * 100}>
                <div className={`feature-box ${feature.color}`}>
                  <i className={`bi ${feature.icon}`}></i>
                  <h4>{feature.title}</h4>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Features 2 Section */}
      <section id="features-2" className="features-2 section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="feature-item text-end mb-5" data-aos="fade-right" data-aos-delay="200">
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h3>Cross-Platform Compatibility</h3>
                    <p>Built applications that run seamlessly on web, mobile (Android), and smart TV platforms, ensuring accessibility across devices.</p>
                  </div>
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-display"></i>
                  </div>
                </div>
              </div>

              <div className="feature-item text-end mb-5" data-aos="fade-right" data-aos-delay="300">
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h3>API Integrations</h3>
                    <p>Expert in integrating third-party services like Twilio, Stripe, PayPal, and Google Maps to enhance application functionality.</p>
                  </div>
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-code-square"></i>
                  </div>
                </div>
              </div>

              <div className="feature-item text-end" data-aos="fade-right" data-aos-delay="400">
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h3>Data Security & Payment Gateway</h3>
                    <p>Implementing secure payment gateways like PayPal and M-Pesa, ensuring smooth transactions with high-level data protection.</p>
                  </div>
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-shield-lock"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="phone-mockup text-center">
                <img
                  src="https://bootstrapmade.com/content/demo/iLanding/assets/img/phone-app-screen.webp"
                  alt="Phone Mockup"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="feature-item mb-5" data-aos="fade-left" data-aos-delay="200">
                <div className="d-flex align-items-center gap-4">
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-phone"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Fully Responsive & Retina Ready</h3>
                    <p>Responsive and retina-ready web applications built with Vue.js and React, ensuring flawless performance on all devices.</p>
                  </div>
                </div>
              </div>

              <div className="feature-item mb-5" data-aos="fade-left" data-aos-delay="300">
                <div className="d-flex align-items-center gap-4">
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-browser-chrome"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Browser Compatibility</h3>
                    <p>Ensuring applications run smoothly on all major browsers, providing a consistent experience across different platforms.</p>
                  </div>
                </div>
              </div>

              <div className="feature-item" data-aos="fade-left" data-aos-delay="400">
                <div className="d-flex align-items-center gap-4">
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-cloud"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Cloud-Based Solutions</h3>
                    <p>Developing scalable cloud-based systems, including multi-tenancy architecture for enterprise-level applications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>


  );
};

// Simple TabPanel helper component
const TabPanel = ({ children }) => (
  <Typography component="div">{children}</Typography>
);

export default CoreCompetencies;
