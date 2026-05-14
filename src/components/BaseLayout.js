import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import { singlePage } from '../info/Info';
import SinglePageRoutes from './SinglePageRoutes';
import MultiPageRoutes from './MultiPageRoutes';
import useScrollObserver from '../hooks/useScrollObserver';

export default function BaseLayout() {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === '/' ? 'home' : location.pathname.slice(1)
  );
  const refHome = useScrollObserver(setActive);
  const refAbout = useScrollObserver(setActive);
  const refPortfolio = useScrollObserver(setActive);
  const [darkMode, setDarkMode] = useState(true);

  function handleToggleDarkMode() {
    const next = !darkMode;
    localStorage.setItem('darkMode', `${next}`);
    setDarkMode(next);
  }

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      setDarkMode(JSON.parse(saved));
    }
  }, []);

  return (
    <div className={`${Style.root} ${darkMode ? Style.dark : Style.light}`}>
      <Navbar
        darkMode={darkMode}
        handleClick={handleToggleDarkMode}
        active={active}
        setActive={setActive}
      />
      <main className={Style.main}>
        {singlePage
          ? <SinglePageRoutes refs={{ refHome, refAbout, refPortfolio }} />
          : <MultiPageRoutes />
        }
      </main>
      <footer className={Style.footer}>
        <p>
          Crafted with <span className={Style.heart}>♥</span> by{' '}
          <a href="https://www.linkedin.com/in/priyansh02/" className={Style.footerLink}>
            Priyansh
          </a>
        </p>
        <p className={Style.footerYear}>© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
