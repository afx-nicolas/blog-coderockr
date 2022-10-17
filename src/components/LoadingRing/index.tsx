import styles from './LoadingRing.module.css';

const LoadingRing = () => {
  return (
    <div className={styles.ldsRing}>
      <div></div><div></div><div></div><div></div>
    </div>
  );
}

export default LoadingRing;
