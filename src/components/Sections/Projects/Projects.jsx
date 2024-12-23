import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const galleryItems = [
    {
      src: "https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-1.jpg",
      alt: "Gallery 1",
      link: "https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-1.jpg",
      detailsLink: "https://bootstrapmade.com/content/demo/PhotoFolio/gallery-single.html",
    },
    {
      src: "https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-2.jpg",
      alt: "Gallery 2",
      link: "https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-2.jpg",
      detailsLink: "https://bootstrapmade.com/content/demo/PhotoFolio/gallery-single.html",
    },
    {
      src: "https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-3.jpg",
      alt: "Gallery 3",
      link: "https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-3.jpg",
      detailsLink: "https://bootstrapmade.com/content/demo/PhotoFolio/gallery-single.html",
    },
    {
      src: "https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-4.jpg",
      alt: "Gallery 4",
      link: "https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-4.jpg",
      detailsLink: "https://bootstrapmade.com/content/demo/PhotoFolio/gallery-single.html",
    },
    {
      src: "https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-5.jpg",
      alt: "Gallery 5",
      link: "https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-5.jpg",
      detailsLink: "https://bootstrapmade.com/content/demo/PhotoFolio/gallery-single.html",
    },
    {
      src: "https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-6.jpg",
      alt: "Gallery 6",
      link: "https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-6.jpg",
      detailsLink: "https://bootstrapmade.com/content/demo/PhotoFolio/gallery-single.html",
    },
    {
      src: "https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-7.jpg",
      alt: "Gallery 7",
      link: "https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-7.jpg",
      detailsLink: "https://bootstrapmade.com/content/demo/PhotoFolio/gallery-single.html",
    },
    {
      src: "https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-8-2.jpg",
      alt: "Gallery 8",
      link: "https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/gallery/gallery-8-2.jpg",
      detailsLink: "https://bootstrapmade.com/content/demo/PhotoFolio/gallery-single.html",
    },
  ];

  return (
    <>
      <section>
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Projects</h2>
          <p>Showcasing key projects and their descriptions</p>
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
                <Tab label="Projects" />
                <Tab label="Galleries" />
              </Tabs>
            </Box>
          </div>

          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
            {activeTab === 0 && (
              <Box>
                <TabPanel>
                  <div className="row">
                    <div className="col-lg-6 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                      <h3>Project 1: Data Analytics with Python, Excel, and MySQL</h3>
                      <p className="fst-italic">
                        Utilized Python and libraries like Pandas to analyze Customer – Order relationships.
                        Visualized data using Power BI and managed the database with Django, using PostgreSQL to save the results.
                      </p>
                      <ul className="list-unstyled">
                        <li><i className="bi bi-check2-all text-primary"></i> Python + Pandas for data analysis</li>
                        <li><i className="bi bi-check2-all text-primary"></i> Power BI for data visualization</li>
                        <li><i className="bi bi-check2-all text-primary"></i> Django framework for database management</li>
                        <li><i className="bi bi-check2-all text-primary"></i> PostgreSQL for saving results</li>
                      </ul>
                      <a href="https://link-to-your-project" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-primary">Learn Data Analytics</button>
                      </a>
                      <small>Updated on July 2024</small>
                    </div>
                    <div className="col-lg-6 text-center">
                      <img
                        src="/assets/images/projects/ Data Analytics.jpg"
                        alt="Data Analytics"
                        className="img-fluid"
                        style={{ width: "400px", height: "300px" }}
                      />
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="row">
                    <div className="col-lg-6 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                      <h3>Project 2: Web Scraper with Python and Selenium</h3>
                      <p className="fst-italic">
                        Explores how I leverage data to extract insights, visualize trends, and make informed decisions.
                        This project demonstrates how I analyze and interpret data scraped from Jumia online shop using Selenium, Celery, and Python.
                      </p>
                      <ul className="list-unstyled">
                        <li><i className="bi bi-check2-all text-primary"></i> Web scraping with Python and Selenium</li>
                        <li><i className="bi bi-check2-all text-primary"></i> Data processing with Python and Celery</li>
                        <li><i className="bi bi-check2-all text-primary"></i> Insights extraction for data-driven decisions</li>
                      </ul>
                      <a href="https://link-to-your-project" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-primary">Jumia Products Analytics</button>
                      </a>
                      <small>Updated on July 2024</small>
                    </div>
                    <div className="col-lg-6 text-center">
                      <img
                        src="/assets/images/projects/Web Scrapping.jpg"
                        alt="Web Scraper"
                        className="img-fluid"
                        style={{ width: "400px", height: "300px" }}
                      />
                    </div>
                  </div>
                </TabPanel>

              </Box>
            )}

            {activeTab === 1 && (
              <Box>
                <TabPanel>
                  <section id="gallery" className="gallery section">
                    <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
                      <div className="row gy-4 justify-content-center">
                        {galleryItems.map((item, index) => (
                          <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                            <div className="gallery-item h-100">
                              <img src={item.src} className="img-fluid" alt={item.alt} />
                              <div className="gallery-links d-flex align-items-center justify-content-center">
                                <a href={item.link} title={item.alt} className="glightbox preview-link">
                                  <i className="bi bi-arrows-angle-expand"></i>
                                </a>
                                <a href={item.detailsLink} className="details-link">
                                  <i className="bi bi-link-45deg"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </TabPanel>
              </Box>
            )}
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

export default Projects;
