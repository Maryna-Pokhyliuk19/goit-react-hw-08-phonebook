import { ContactsForm } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filtr/Filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      <>
        <Filter />
        <ContactsList />
      </>
    </div>
  );
};
