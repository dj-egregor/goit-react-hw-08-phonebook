import { PropTypes } from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { RotatingLines } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import ButtonStyled from '../../shared/ButtonStyled/ButtonStyled';
import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from 'redux/contactsSlice';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);

  const [deleteContact, { isLoading: isDeleting, isSuccess: isDeleted }] =
    useDeleteContactMutation();
  const [updateContact, { isLoading: isUpdating, isSuccess: isUpdated }] =
    useUpdateContactMutation();

  useEffect(() => {
    if (isDeleted) {
      toast.success('Contact has been deleted!');
    }
    if (isUpdated) {
      setIsEditing(false);
      toast.success('Contact has been updated!');
    }
  }, [isDeleted, isUpdated]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedName(name);
    setEditedNumber(number);
  };

  const handleSaveClick = () => {
    updateContact({ id, name: editedName, number: editedNumber });
  };

  const handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      deleteContact(id);
    }
  };

  const handleChange = e => {
    if (e.target.name === 'name') {
      setEditedName(e.target.value);
    } else if (e.target.name === 'number') {
      setEditedNumber(e.target.value);
    }
  };

  return (
    <li className={css.contactItem}>
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={editedName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="number"
            value={editedNumber}
            onChange={handleChange}
          />
          <div>
            <ButtonStyled onClick={handleSaveClick} disabled={isUpdating}>
              {isUpdating && <RotatingLines height="20" width="20" />}
              Save
            </ButtonStyled>
            <ButtonStyled onClick={handleCancelClick}>Cancel</ButtonStyled>
          </div>
        </>
      ) : (
        <>
          <span>{name}:</span> <span>{number}</span>
          <div>
            <ButtonStyled onClick={handleEditClick}>Edit</ButtonStyled>
            <ButtonStyled onClick={handleDeleteClick} disabled={isDeleting}>
              {isDeleting && <RotatingLines height="20" width="20" />}
              Delete
            </ButtonStyled>
          </div>
        </>
      )}
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
