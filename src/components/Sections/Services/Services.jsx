import React, { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    // If you are using AOS (Animate On Scroll), initialize it here
    if (typeof AOS !== 'undefined') {
      AOS.init();
    }
  }, []);

  const services = [
    {
      icon: 'bi-laptop',
      title: 'Custom Web Development',
      description: 'I specialize in creating dynamic and responsive websites using the latest web technologies like React, Vue.js, and Laravel. From frontend to backend, I provide full-stack solutions tailored to your needs.',
      link: '#custom-web-development',
      delay: 100,
    },
    {
      icon: 'bi-gear',
      title: 'API Integrations',
      description: 'I help integrate third-party APIs such as PayPal, Stripe, Twilio, and Google Maps into your application, ensuring seamless functionality and boosting the efficiency of your digital platforms.',
      link: '#api-integrations',
      delay: 200,
    },
    {
      icon: 'bi-layers',
      title: 'Mobile App Development',
      description: 'I build cross-platform mobile applications using React Native and other frameworks, focusing on performance, scalability, and user experience to ensure your app stands out.',
      link: '#mobile-app-development',
      delay: 300,
    },
    {
      icon: 'bi-bar-chart',
      title: 'Cloud and Database Solutions',
      description: 'I provide robust cloud hosting and database management solutions, ensuring scalability and security. I integrate technologies such as AWS and Google Cloud to handle your data and server needs efficiently.',
      link: '#cloud-database-solutions',
      delay: 400,
    },
  ];

  return (
    <div>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Delivering high-quality software solutions with a focus on innovation, performance, and user satisfaction.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={service.delay}
              key={index}
            >
              <div className="service-card d-flex">
                <div className="icon flex-shrink-0">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={service.link} className="read-more">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
