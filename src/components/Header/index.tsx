import { useRef } from 'react';
import Link from 'next/link';

import styles from './Header.module.css';

import { useScreenSize } from '../../hooks';

import HamburguerMenu from '../HamburguerMenu';

const Header = () => {
  const { width } = useScreenSize();
  const nav = useRef<HTMLUListElement>(null);

  const handleClassName = () => {
    nav.current?.classList.toggle(styles.active);
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link passHref href="/">
          <a id={styles.logo}>Rockr Blog</a>
          </Link>
        <nav>
          <ul ref={nav} className={styles.navList}>
            <li className={styles.navListItem}>
              <Link passHref href="/">
                <a className={styles.navItem}>Posts</a>
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link passHref href="/contact">
                <a className={styles.navItem}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        { width <= 768 && <HamburguerMenu handleMenuToggle={handleClassName} /> }
      </div>
    </header>
  );
};

export default Header;
