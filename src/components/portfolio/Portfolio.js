import React, { useEffect, useRef, useState } from 'react';
import PortfolioBlock from './PortfolioBlock';
import Style from './Portfolio.module.scss';
import { info } from '../../info/Info';

export default function Portfolio({ innerRef }) {
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeaderVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={innerRef} id="portfolio" className={Style.section}>
      <div className={Style.container}>
        <div
          ref={headerRef}
          className={`${Style.sectionHeader} ${headerVisible ? Style.visible : ''}`}
        >
          <span className={Style.sectionTag}>02 — Work</span>
          <h2 className={Style.sectionTitle}>Things I've Built</h2>
        </div>
        <div className={Style.grid}>
          {info.portfolio.map((project, i) => (
            <PortfolioBlock
              key={i}
              index={i}
              title={project.title}
              image={project.image}
              live={project.live}
              source={project.source}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
