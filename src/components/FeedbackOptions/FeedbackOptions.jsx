import styles from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.wrap}>
      {options.map(name => (
        <button
          key={name}
          type="button"
          data-name={name}
          onClick={() => onLeaveFeedback(name)}
          className={styles.button}
        >
          {name[0].toUpperCase() + name.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
