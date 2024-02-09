import styles from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.wrap}>
      {options.map((name, idx) => (
        <button
          key={idx}
          type="button"
          data-name={name}
          onClick={onLeaveFeedback}
          className={styles.button}
        >
          {name[0].toUpperCase() + name.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
