import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from 'assets/FNLogodarkV2.png';
import styles from './menu.module.css';

const SlideMenu = ({ showHideMenu }) => (
  <div className={styles.menu}>
    <nav className={styles.menu__nav}>
      <div className={styles['image-container']}>
        <button
          type="button"
          className={styles.close__menu}
          onClick={() => showHideMenu()}
        >
          <svg
            height="48"
            viewBox="0 0 48 48"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </button>
        <Link to="/">
          <img className={styles.logo} alt="logo" src={logo} />
        </Link>
      </div>
      <ul className={styles.menu__list}>
        <li className={styles.list__item}>
          <Link to="/#sharingBuildings" className={styles.nav__link}>
            Report Building
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link to="/about#about" className={styles.nav__link}>
            About
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link to="/view-buildings#view" className={styles.nav__link}>
            View Buildings
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

SlideMenu.propTypes = {
  showHideMenu: PropTypes.func.isRequired,
};

export default SlideMenu;
