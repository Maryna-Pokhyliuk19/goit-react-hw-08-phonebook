import css from './ContactsList.module.css';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactsItem} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className={css.contactsButton}
            type="submit"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
