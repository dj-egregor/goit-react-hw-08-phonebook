import { PropTypes } from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { RotatingLines } from 'react-loader-spinner';
import { useEffect } from 'react';

import { notifyDeliteContact } from 'utils/notification';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();

  useEffect(() => {
    if (isSuccess) {
      notifyDeliteContact();
    }
  }, [isSuccess]);

  return (
    <li className={css.contactItem}>
      {name}: <span>{number}</span>
      <button
        onClick={() => deleteContact(id)}
        disabled={isLoading}
        className={css.btn}
      >
        {isLoading && <RotatingLines height="20" width="20" />}
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
