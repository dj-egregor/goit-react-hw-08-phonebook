import { NavLink } from 'react-router-dom';

import css from '../AppBar/AppBar.module.css';

const AuthNav = () => (
  <div>
    <NavLink to="/register" className={css.link}>
      Register
    </NavLink>
    <NavLink to="/login" className={css.link}>
      Log in
    </NavLink>
  </div>
);

export default AuthNav;
