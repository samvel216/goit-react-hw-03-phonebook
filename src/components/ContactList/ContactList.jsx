import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

export function ContactList({ data, onDeleteContact }) {
  return (
    <ul className={styles.list}>
      {data.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <ContactItem
            contactId={id}
            name={name}
            number={number}
            onClick={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
};
