import propTypes from 'prop-types';
import styles from './Filter.module.css';

export function Filter({ value, onChange }) {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
