import { useSelector } from 'react-redux';

import { getUserName } from 'redux/selectors';
import { useLogOutMutation } from 'redux/userApi';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const name = useSelector(getUserName);

  const [logOut] = useLogOutMutation();

  return (
    <div className={css.userMenu__wrapper}>
      <p className={css.userMenu__text}>
        Welcome, <span>{name}</span>!
      </p>
      <button
        className={css.userMenu__btn}
        type="button"
        onClick={() => logOut()}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
