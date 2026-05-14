import React from 'react';
import Style from './EmojiBullet.module.scss';

export default function EmojiBullet({ emoji, text }) {
  return (
    <li className={Style.bullet}>
      <span className={Style.emoji} role="img" aria-hidden="true">{emoji}</span>
      <span className={Style.text}>{text}</span>
    </li>
  );
}
