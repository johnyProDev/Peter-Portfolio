import React, { useEffect } from 'react';

const Stats = () => {
  useEffect(() => {
    // If using purecounter.js or any similar library, initialize here
    if (typeof PureCounter !== 'undefined') {
      new PureCounter();
    }
  }, []);

  const stats = [
    {
      start: 0,
      end: 232,
      label: 'Clients',
    },
    {
      start: 0,
      end: 521,
      label: 'Projects',
    },
    {
      start: 0,
      end: 1453,
      label: 'Hours Of Support',
    },
    {
      start: 0,
      end: 32,
      label: 'Workers',
    },
  ];

  return (
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row gy-4">
        {stats.map((stat, index) => (
          <div className="col-lg-3 col-md-6" key={index}>
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start={stat.start}
                data-purecounter-end={stat.end}
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
