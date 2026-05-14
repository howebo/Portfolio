import React from 'react';
import Style from './IconLink.module.scss';

export default function IconLink({ href, icon, label, variant = 'primary' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${Style.link} ${variant === 'ghost' ? Style.ghost : Style.primary}`}
      aria-label={label}
    >
      <i className={icon} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
