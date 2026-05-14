import Home from './home/Home';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import React from 'react';

export default function SinglePageRoutes({ refs }) {
  return (
    <>
      <Home innerRef={refs.refHome} />
      <About innerRef={refs.refAbout} />
      <Portfolio innerRef={refs.refPortfolio} />
    </>
  );
}
