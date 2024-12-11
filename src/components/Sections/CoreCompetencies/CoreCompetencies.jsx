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
        <h2>Core Competencies</h2>
        <p>Highlighting the technical skills and expertise that define Peter's career</p>
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
              <Tab label="Frontend Development" />
              <Tab label="Backend Development" />
              <Tab label="DevOps & Tools" />
            </Tabs>
          </Box>
        </div>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          {activeTab === 0 && (
            <Box>
              <TabPanel>
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Modern Frontend Frameworks</h3>
                    <p className="fst-italic">
                      Expert in building responsive and dynamic user interfaces using modern frameworks and libraries.
                    </p>
                    <ul>
                      <li><i className="bi bi-check2-all"></i> Proficient in React, Vue.js, and Angular</li>
                      <li><i className="bi bi-check2-all"></i> Expertise in CSS frameworks like Bootstrap and Tailwind</li>
                      <li><i className="bi bi-check2-all"></i> Skilled in creating interactive and accessible UIs</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="https://bootstrapmade.com/content/demo/iLanding/assets/img/features-illustration-1.webp"
                      alt="Frontend Development"
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
                    <h3>Robust Backend Systems</h3>
                    <p className="fst-italic">
                      Crafting scalable and secure backend solutions to power modern applications.
                    </p>
                    <ul>
                      <li><i className="bi bi-check2-all"></i> Experience with Node.js, Laravel, and Django</li>
                      <li><i className="bi bi-check2-all"></i> Skilled in RESTful API and GraphQL development</li>
                      <li><i className="bi bi-check2-all"></i> Strong database management skills with MySQL and MongoDB</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="https://bootstrapmade.com/content/demo/iLanding/assets/img/features-illustration-2.webp"
                      alt="Backend Development"
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
                    <h3>DevOps & Tooling</h3>
                    <p className="fst-italic">
                      Streamlining development and deployment processes with effective tools and practices.
                    </p>
                    <ul>
                      <li><i className="bi bi-check2-all"></i> Proficiency in Docker, Kubernetes, and CI/CD pipelines</li>
                      <li><i className="bi bi-check2-all"></i> Expertise in version control systems like Git</li>
                      <li><i className="bi bi-check2-all"></i> Skilled in cloud platforms including AWS and Azure</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="https://bootstrapmade.com/content/demo/iLanding/assets/img/features-illustration-3.webp"
                      alt="DevOps & Tools"
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
                icon: "bi-code-square",
                title: "Custom Development with Open Source APIs",
                text: "Skilled in creating custom applications and integrations using open source APIs like Twilio, PayPal, and Stripe.",
                color: "orange",
              },
              {
                icon: "bi-server",
                title: "Advanced Backend Development",
                text: "Expert in building robust backend systems using Laravel, PHP, and multi-tenancy architecture.",
                color: "blue",
              },
              {
                icon: "bi-people",
                title: "User Authentication & Payment Integration",
                text: "Experience in implementing secure user authentication and payment systems, such as PayPal and M-Pesa integrations.",
                color: "green",
              },
              {
                icon: "bi-laptop",
                title: "Responsive Web Development",
                text: "Proficient in creating responsive web applications using Vue.js, React, and Bootstrap.",
                color: "red",
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
