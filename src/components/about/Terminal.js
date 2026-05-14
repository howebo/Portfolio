import React from 'react';
import Style from './Terminal.module.scss';

export default function Terminal({ text }) {
  return (
    <div className={Style.terminal}>
      <div className={Style.titlebar}>
        <span className={Style.red} />
        <span className={Style.amber} />
        <span className={Style.green} />
      </div>
      <div className={Style.body}>{text}</div>
    </div>
  );
}
