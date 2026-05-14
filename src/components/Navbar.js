import React, { useState, useEffect } from 'react';
import Style from './Navbar.module.scss';
import Toggler from './home/Toggler';
import { HashLink as Link } from 'react-router-hash-link';
import { info, singlePage } from '../info/Info';

const navLinks = [
  { name: 'Home',      to: '',          active: 'home' },
  { name: 'About',     to: 'about',     active: 'about' },
  { name: 'Portfolio', to: 'portfolio', active: 'portfolio' },
];

const scrollWithOffset = (el) => {
  const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

export default function Navbar({ darkMode, handleClick, active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${Style.navbar} ${scrolled ? Style.scrolled : ''}`}>
      <div className={Style.inner}>
        <Link
          to={singlePage ? '#' : '/'}
          scroll={scrollWithOffset}
          smooth
          onClick={() => setActive('home')}
          className={Style.logo}
        >
          {info.initials}
        </Link>

        <ul className={Style.links}>
          {navLinks.map((link, i) => (
            <li key={i} className={link.active === active ? Style.activeItem : ''}>
              <Link
                to={singlePage ? `#${link.to}` : `/${link.to}`}
                scroll={scrollWithOffset}
                smooth
                onClick={() => { setActive(link.active); setMenuOpen(false); }}
                className={Style.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className={Style.actions}>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
          <button
            className={`${Style.hamburger} ${menuOpen ? Style.open : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`${Style.mobileMenu} ${menuOpen ? Style.mobileOpen : ''}`}>
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={singlePage ? `#${link.to}` : `/${link.to}`}
            scroll={scrollWithOffset}
            smooth
            onClick={() => { setActive(link.active); setMenuOpen(false); }}
            className={`${Style.mobileLink} ${link.active === active ? Style.mobileLinkActive : ''}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
