import { ContactsForm } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filtr/Filter';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <>
        <Filter />
        <ContactsList />
      </>
    </div>
  );
};
