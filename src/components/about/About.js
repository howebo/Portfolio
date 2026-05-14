import React, { useEffect, useRef, useState } from 'react';
import Style from './About.module.scss';
import { info } from '../../info/Info';

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export default function About({ innerRef }) {
  const [headerRef, headerVisible] = useReveal();
  const [bioRef, bioVisible] = useReveal();
  const [skillsRef, skillsVisible] = useReveal();
  const [hobbiesRef, hobbiesVisible] = useReveal();

  return (
    <section ref={innerRef} id="about" className={Style.section}>
      <div className={Style.container}>
        <div
          ref={headerRef}
          className={`${Style.sectionHeader} ${headerVisible ? Style.visible : ''}`}
        >
          <span className={Style.sectionTag}>01 — About</span>
          <h2 className={Style.sectionTitle}>Who am I?</h2>
        </div>

        {/* Bio */}
        <div
          ref={bioRef}
          className={`${Style.bioCard} ${bioVisible ? Style.visible : ''}`}
        >
          <div className={Style.bioAvatar}>PSC</div>
          <p className={Style.bioText}>{info.bio}</p>
        </div>

        {/* Skills */}
        <div
          ref={skillsRef}
          className={`${Style.block} ${skillsVisible ? Style.visible : ''}`}
          style={{ transitionDelay: '0.1s' }}
        >
          <h3 className={Style.blockTitle}>Skills &amp; Tools</h3>
          <div className={Style.skillsGrid}>
            <div className={Style.skillGroup}>
              <p className={Style.groupLabel}>Proficient With</p>
              <div className={Style.tags}>
                {info.skills.proficientWith.map((s, i) => (
                  <span key={i} className={Style.tag}>{s}</span>
                ))}
              </div>
            </div>
            <div className={Style.skillGroup}>
              <p className={Style.groupLabel}>Exposed To</p>
              <div className={Style.tags}>
                {info.skills.exposedTo.map((s, i) => (
                  <span key={i} className={`${Style.tag} ${Style.tagGreen}`}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div
          ref={hobbiesRef}
          className={`${Style.block} ${hobbiesVisible ? Style.visible : ''}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <h3 className={Style.blockTitle}>Beyond the Code</h3>
          <div className={Style.hobbies}>
            {info.hobbies.map((h, i) => (
              <div key={i} className={Style.hobby}>
                <span className={Style.hobbyEmoji} role="img" aria-label={h.label}>{h.emoji}</span>
                <span className={Style.hobbyLabel}>{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
