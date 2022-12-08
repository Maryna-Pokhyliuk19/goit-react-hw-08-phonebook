import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import css from './Form.module.css';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

const initialValues = { name: '', number: '' };

export const ContactsForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const formSubmitHandler = ({ name, number }, { resetForm }) => {
    const normalizedName = name.toLowerCase();
    const findName = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
    if (findName) {
      return alert(`${name} is already in contacts`);
    }
    const contact = { name, number };
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={formSubmitHandler}>
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <Field
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
