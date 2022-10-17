import { List } from 'phosphor-react';

import styles from './HamburguerMenu.module.css';

interface HamburguerMenuProps {
  handleMenuToggle: () => void;
}

const HamburguerMenu = ({ handleMenuToggle }: HamburguerMenuProps) => {
  return (
    <button className={styles.button} onClick={handleMenuToggle}>
      <List size={32} weight="bold" />
    </button>
  );
}

export default HamburguerMenu;
