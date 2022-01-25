import React from 'react';
import PropTypes from 'prop-types';
import { ContactListItem, ContactsListButton } from './ContactListItem.styled';

const ContactListLi = ({ id, name, number, OnDeleteContact }) => {
  return (
    <ContactListItem key={id}>
      <span>{name}:</span>
      <span> {number}</span>
      <ContactsListButton type="button" onClick={() => OnDeleteContact(id)}>
        Delete
      </ContactsListButton>
    </ContactListItem>
  );
};

export default ContactListLi;

ContactListLi.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  OnDeleteContact: PropTypes.func,
};
