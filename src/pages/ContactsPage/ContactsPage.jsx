import { WrapperContacts } from './ContactsPage.styled';
import { Toaster } from 'react-hot-toast';
import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useFilter } from 'hooks/useFilter';
import { useContacts } from 'hooks/useContacts';
import { Container, TextStyled } from './ContactsPage.styled';

const ContactsPage = () => {
  const [filter, onSetFilter] = useFilter();
  const [contacts, onAddContact, onDeleteContact] = useContacts();

  const empty = () => contacts.length > 0;

  return (
    <Container>
      
      <WrapperContacts>
        <h2>Phonebook</h2>
        <Form onData={onAddContact} />
      </WrapperContacts>
      
      <WrapperContacts>
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={onSetFilter} />
        {empty() ? (
          <>
            <ContactList
              contacts={contacts}
              onDeleteContact={onDeleteContact}
            />
          </>
        ) : (
          <TextStyled>
            Phonebook is empty! <br /> Add your contacts.
          </TextStyled>
        )}
        <Toaster position="top-center" reverseOrder={false} />
      </WrapperContacts>
      
    </Container>
  );
};

export default ContactsPage;
