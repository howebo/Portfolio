import React, { useState, useEffect } from 'react';
import Style from './Home.module.scss';
import EmojiBullet from './EmojiBullet';
import SocialIcon from './SocialIcon';
import { info } from '../../info/Info';

const roles = [
  'Full Stack Developer',
  'Software Engineer @ Circana',
  'Problem Solver',
];

export default function Home({ innerRef }) {
  const [displayText, setDisplayText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;

    if (!isDeleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIdx));
        setCharIdx(c => c + 1);
      }, 75);
    } else if (!isDeleting && charIdx > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIdx));
        setCharIdx(c => c - 1);
      }, 40);
    } else {
      setIsDeleting(false);
      setRoleIdx(r => (r + 1) % roles.length);
      setCharIdx(0);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, roleIdx]);

  const resumeLink = info.socials.find(s => s.label === 'resume')?.link;

  return (
    <section ref={innerRef} id="home" className={Style.hero}>
      <div className={Style.glow} />
      <div className={Style.content}>
        <div className={Style.textSide}>
          <p className={Style.greeting}>Hello there, I'm</p>
          <h1 className={Style.name}>
            {info.firstName}{' '}
            <span className={Style.gradientText}>{info.lastName}</span>
            <span className={Style.wave}>👋</span>
          </h1>
          <div className={Style.typewriterRow}>
            <span className={Style.typewriter}>{displayText}</span>
            <span className={Style.cursor}>|</span>
          </div>
          <ul className={Style.bullets}>
            {info.miniBio.map((item, i) => (
              <EmojiBullet key={i} emoji={item.emoji} text={item.text} />
            ))}
          </ul>
          <div className={Style.socials}>
            {info.socials.map((s, i) => (
              <SocialIcon key={i} link={s.link} icon={s.icon} label={s.label} />
            ))}
          </div>
          <div className={Style.ctas}>
            {resumeLink && (
              <a href={resumeLink} target="_blank" rel="noreferrer" className={Style.ctaPrimary}>
                Resume
              </a>
            )}
            <a href="#portfolio" className={Style.ctaSecondary}>
              View Work
            </a>
          </div>
        </div>

        <div className={Style.photoSide}>
          <div className={Style.photoRing}>
            <img
              src={info.selfPortrait}
              alt={`${info.firstName} ${info.lastName}`}
              className={Style.photo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
