import { ChangeEvent, useId } from 'react';

import styles from './InputGroup.module.css';

type InputType = 'text' | 'textarea' | 'tel' | 'url' | 'email';

interface InputGroupProps {
  type: InputType;
  placeholder: string;
  label: string;
  required?: boolean;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputGroup = ({ onChange, type, placeholder, label, required, value }: InputGroupProps) => {
  const id = useId();

  return (
    <div className={styles.inputGroup}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      { type === 'textarea'
        ? <textarea onChange={onChange} className={styles.textarea} id={id} rows={10} placeholder={placeholder} required={!!required} value={value} />
        : <input onChange={onChange} className={styles.input} id={id} type={type} placeholder={placeholder} required={!!required} value={value} />
      }
    </div>
  );
}

export default InputGroup;
