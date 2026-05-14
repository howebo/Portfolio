import React, { useEffect, useRef, useState } from 'react';
import Style from './PortfolioBlock.module.scss';

export default function PortfolioBlock({ title, image, live, source, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const delay = `${(index % 3) * 0.1}s`;

  return (
    <article
      ref={ref}
      className={`${Style.card} ${visible ? Style.visible : ''}`}
      style={{ transitionDelay: delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={Style.imageWrap}>
        <img src={image} alt={title} className={Style.image} loading="lazy" />
        <div className={`${Style.overlay} ${hovered ? Style.overlayVisible : ''}`}>
          <h3 className={Style.overlayTitle}>{title}</h3>
          <div className={Style.overlayLinks}>
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer" className={Style.overlayBtn}>
                <i className="fa fa-external-link" aria-hidden="true" /> Live
              </a>
            )}
            {source && (
              <a href={source} target="_blank" rel="noopener noreferrer" className={`${Style.overlayBtn} ${Style.overlayBtnGhost}`}>
                <i className="fa fa-github" aria-hidden="true" /> Source
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={Style.cardFooter}>
        <h3 className={Style.title}>{title}</h3>
        <div className={Style.footerLinks}>
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className={Style.footerLink}>
              <i className="fa fa-external-link" aria-hidden="true" />
            </a>
          )}
          {source && (
            <a href={source} target="_blank" rel="noopener noreferrer" className={Style.footerLink}>
              <i className="fa fa-github" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
