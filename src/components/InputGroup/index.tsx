import { useId } from 'react';

import styles from './InputGroup.module.css';

type InputType = 'text' | 'textarea' | 'tel' | 'url' | 'email';

interface InputGroupProps {
  type: InputType;
  placeholder: string;
  label: string;
}

const InputGroup = ({ type, placeholder, label }: InputGroupProps) => {
  const id = useId();

  return (
    <div className={styles.inputGroup}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      { type === 'textarea'
        ? <textarea className={styles.textarea} id={id} rows={10} placeholder={placeholder} />
        : <input className={styles.input} id={id} type={type} placeholder={placeholder} />
      }
    </div>
  );
}

export default InputGroup;
