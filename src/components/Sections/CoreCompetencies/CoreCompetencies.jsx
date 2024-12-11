import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

const CoreCompetencies = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
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
  );
};

// Simple TabPanel helper component
const TabPanel = ({ children }) => (
  <Typography component="div">{children}</Typography>
);

export default CoreCompetencies;
