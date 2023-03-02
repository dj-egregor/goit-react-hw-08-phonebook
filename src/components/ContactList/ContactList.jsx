import { useSelector } from 'react-redux';

import css from './ContactList.module.css';
import ContactItem from './ContactItem';
import { getFilteredContacts } from 'redux/selectors';

import { useFetchContactsQuery } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';

const ContactList = () => {
  const filter = useSelector(getFilter);

  const { data: contacts, isLoading, error } = useFetchContactsQuery();
  return (
    <>
      {isLoading && <p className={css.default}>...loading</p>}
      {error && (
        <p className={css.default}>
          Sorry, something went wrong, please try again later!
        </p>
      )}
      {contacts && contacts.length === 0 && <p>There is no contact!</p>}
      <ul className={css.contactList}>
        {contacts &&
          getFilteredContacts(contacts, filter).map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
          ))}
      </ul>
    </>
  );
};

export default ContactList;
