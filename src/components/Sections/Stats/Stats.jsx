import React, { useEffect } from 'react';

const Stats = () => {
  useEffect(() => {
    // If using PureCounter.js or any similar library, initialize here
    if (typeof PureCounter !== 'undefined') {
      new PureCounter();
    }
  }, []);

  const stats = [
    {
      start: 0,
      end: 15,
      label: 'Projects Completed',
    },
    {
      start: 0,
      end: 8,
      label: 'Clients Served',
    },
    {
      start: 0,
      end: 1200,
      label: 'Hours Spent on Development',
    },
    {
      start: 0,
      end: 10,
      label: 'Technologies Used',
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
