import styles from '../Notification/Notification.module.css';

const Notification = ({ message }) => {
  return <h3 className={styles.subtitle}>{message}</h3>;
};

export default Notification;
