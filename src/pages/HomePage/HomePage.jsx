import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsLoggedIn } from 'redux/selectors';
import css from './HomePage.module.css';

const HomePage = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div className={css.wrapper}>
      <h1>Welcome to your Phonebook!</h1>
      <h2>Now you will definitely not forget your contacts!</h2>
      {!isLoggedIn && (
        <>
          <p className={css.text}>
            Have an account?
            <span className={css.pre_text}>
              <Link to="/login" className={css.link}>
                Login
              </Link>
            </span>
          </p>
          <p className={css.text}>
            No account?
            <span className={css.pre_text}>
              <Link to="/register" className={css.link}>
                Sig In!
              </Link>
            </span>
          </p>
        </>
      )}
    </div>
  );
};
export default HomePage;
