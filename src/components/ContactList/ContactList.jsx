import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { ContactContainer, ContactEl } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactContainer>
      {contacts.map(({ id, name, number }) => (
        <ContactEl key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <Button
            variant="contained"
            size="small"
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </Button>
        </ContactEl>
      ))}
    </ContactContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
