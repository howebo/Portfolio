import React from 'react';
import Style from './SocialIcon.module.scss';

export default function SocialIcon({ link, icon, label }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={Style.icon}
    >
      <i className={icon} aria-hidden="true" />
    </a>
  );
}
