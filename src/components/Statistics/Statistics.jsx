import styles from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>Good: {good}</li>
      <li className={styles.item}>Neutral: {neutral}</li>
      <li className={styles.item}>Bad: {bad}</li>
      <li className={styles.item}>Total: {total}</li>
      <li className={styles.item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

export default Statistics;
