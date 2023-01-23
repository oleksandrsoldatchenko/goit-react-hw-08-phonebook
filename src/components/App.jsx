import { Toaster } from 'react-hot-toast';

import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { useFilter } from 'hooks/useFilter';
import { useContacts } from 'hooks/useContacts';

import { Container } from './App.styled';

export function App() {
  const [filter, onSetFilter] = useFilter();
  const [contacts, onAddContact, onDeleteContact] = useContacts();

  const empty = () => contacts.length > 0;

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onData={onAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={onSetFilter} />
      {empty() ? (
        <>
          <ContactList contacts={contacts} onDeleteContact={onDeleteContact} />
        </>
      ) : (
        <h3>
          Phonebook is empty! <br /> Add your contacts.
        </h3>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </Container>
  );
}
