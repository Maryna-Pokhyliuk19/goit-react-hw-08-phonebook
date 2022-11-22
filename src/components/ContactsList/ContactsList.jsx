import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import css from './ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.contactsList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={css.contactsItem} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className={css.contactsButton}
            type="submit"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
