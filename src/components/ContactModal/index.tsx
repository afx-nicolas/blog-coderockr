import styles from './ContactModal.module.css';

import SubmitIcon from '../SubmitIcon';
import { X } from 'phosphor-react';

const ContactModel = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <button className={styles.closeBtn}>
            <X className={styles.closeIcon} size={48} />
          </button>
          <span className={styles.heading}>Contact</span>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="name">Name</label>
              <input className={styles.input} id="name" type="text" placeholder="Fill your full name" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="email">E-mail</label>
              <input className={styles.input} id="email" type="email" placeholder="Fill a valid  e-mail" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="phone">Phone</label>
              <input className={styles.input} id="email" type="tel" placeholder="Fill your phone" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="message">Message</label>
              <textarea className={styles.textarea} id="message" rows={10} placeholder="Hello..." />
            </div>
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
