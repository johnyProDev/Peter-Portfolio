import React, { useEffect } from 'react';

const Pricing = () => {
  useEffect(() => {
    // If you're using AOS, initialize it here
    if (typeof AOS !== 'undefined') {
      AOS.init();
    }
  }, []);

  const plans = [
    {
      name: 'Basic Plan',
      price: '9.9',
      currency: '$',
      period: '/ month',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.',
      features: [
        'Duis aute irure dolor',
        'Excepteur sint occaecat',
        'Nemo enim ipsam voluptatem',
      ],
      link: '#',
      delay: 100,
    },
    {
      name: 'Standard Plan',
      price: '19.9',
      currency: '$',
      period: '/ month',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.',
      features: [
        'Lorem ipsum dolor sit amet',
        'Consectetur adipiscing elit',
        'Sed do eiusmod tempor',
        'Ut labore et dolore magna',
      ],
      link: '#',
      delay: 200,
      popular: true,
    },
    {
      name: 'Premium Plan',
      price: '39.9',
      currency: '$',
      period: '/ month',
      description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.',
      features: [
        'Temporibus autem quibusdam',
        'Saepe eveniet ut et voluptates',
        'Nam libero tempore soluta',
        'Cumque nihil impedit quo',
        'Maxime placeat facere possimus',
      ],
      link: '#',
      delay: 300,
    },
  ];

  return (
    <div>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4 justify-content-center">
          {plans.map((plan, index) => (
            <div
              className={`col-lg-4 ${plan.popular ? 'popular' : ''}`}
              data-aos="fade-up"
              data-aos-delay={plan.delay}
              key={index}
            >
              <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="currency">{plan.currency}</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <p className="description">{plan.description}</p>

                <h4>Featured Included:</h4>
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="bi bi-check-circle-fill"></i>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href={plan.link} className={`btn ${plan.popular ? 'btn-light' : 'btn-primary'}`}>
                  Buy Now
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
