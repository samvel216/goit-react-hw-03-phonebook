import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

export function ContactItem({ name, number, onClick }) {
  return (
    <>
      <p className={styles.text}>
        {name}: {number}{' '}
      </p>
      <button className={styles.btn} type="button" onClick={onClick}>
        Delete
      </button>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onClick: PropTypes.func,
};
