import React, { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    // If you are using AOS, initialize it here
    if (typeof AOS !== 'undefined') {
      AOS.init();
    }
  }, []);

  const services = [
    {
      icon: 'bi-activity',
      title: 'Nesciunt Mete',
      description: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
      link: 'https://bootstrapmade.com/content/demo/iLanding/service-details.html',
      delay: 100,
    },
    {
      icon: 'bi-diagram-3',
      title: 'Eosle Commodi',
      description: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
      link: 'https://bootstrapmade.com/content/demo/iLanding/service-details.html',
      delay: 200,
    },
    {
      icon: 'bi-easel',
      title: 'Ledo Markt',
      description: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
      link: 'https://bootstrapmade.com/content/demo/iLanding/service-details.html',
      delay: 300,
    },
    {
      icon: 'bi-clipboard-data',
      title: 'Asperiores Commodit',
      description: 'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.',
      link: 'https://bootstrapmade.com/content/demo/iLanding/service-details.html',
      delay: 400,
    },
  ];

  return (
    <div>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
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
                    Read More <i className="bi bi-arrow-right"></i>
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
