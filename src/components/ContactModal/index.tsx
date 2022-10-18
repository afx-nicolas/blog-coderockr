import { useContext } from 'react';
import { X } from 'phosphor-react';

import styles from './ContactModal.module.css';

import { modalContext } from '../../contexts/ModalContext';

import InputGroup from '../InputGroup';
import SubmitIcon from '../SubmitIcon';

const ContactModel = () => {
  const { closeModal } = useContext(modalContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <button onClick={closeModal} className={styles.closeBtn}>
            <X className={styles.closeIcon} size={48} />
          </button>
          <span className={styles.heading}>Contact</span>
          <form className={styles.form}>
            <InputGroup type="text" label="Name" placeholder="Fill your full name" />
            <InputGroup type="email" label="E-mail" placeholder="Fill a valid e-mail" />
            <InputGroup type="tel" label="Phone" placeholder="Fill your phone" />
            <InputGroup type="textarea" label="Message" placeholder="Hello..." />
            <button className={styles.submit}>
              <SubmitIcon />
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactModel;
