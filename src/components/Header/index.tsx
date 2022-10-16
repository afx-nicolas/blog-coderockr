import Link from 'next/link';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link passHref href="/">
          <a id={styles.logo}>Rockr Blog</a>
          </Link>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link passHref href="/">
                <a className={styles.navItem}>Posts</a>
              </Link>
            </li>
            <li>
              <Link passHref href="/contact">
                <a className={styles.navItem}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
