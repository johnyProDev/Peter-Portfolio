import React, { useEffect } from 'react';

const Pricing = () => {
  useEffect(() => {
    // If you're using AOS (Animate On Scroll), initialize it here
    if (typeof AOS !== 'undefined') {
      AOS.init();
    }
  }, []);

  const plans = [
    {
      name: 'Basic Plan',
      price: '50',
      currency: '$',
      period: '/ month',
      description: 'Get started with a simple, affordable plan tailored to small projects. Includes essential features for small-scale applications.',
      features: [
        'Custom web development using Vue.js',
        'API integrations (e.g., Stripe, PayPal)',
        '1 hour of support per month',
      ],
      link: '#',
      delay: 100,
    },
    {
      name: 'Standard Plan',
      price: '100',
      currency: '$',
      period: '/ month',
      description: 'Perfect for growing businesses that need more advanced features, integrations, and support. Includes everything in the Basic plan and more.',
      features: [
        'All Basic Plan features',
        'Additional API integrations (e.g., Twilio, Google Maps)',
        '2 hours of support per month',
        'Mobile app development (React Native)',
      ],
      link: '#',
      delay: 200,
      popular: true,
    },
    {
      name: 'Premium Plan',
      price: '200',
      currency: '$',
      period: '/ month',
      description: 'For businesses that need full-scale solutions, including advanced mobile apps, cloud hosting, and top-tier support.',
      features: [
        'All Standard Plan features',
        'Custom mobile app development (React Native)',
        'Advanced cloud and database solutions',
        'Priority support (5 hours/month)',
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
        <p>Choose the perfect plan to fit your needs, whether you’re just getting started or need full-scale solutions.</p>
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
