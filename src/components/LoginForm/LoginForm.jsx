import { RotatingLines } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

import { loginError } from 'utils/notification';
import { useLoginMutation } from 'redux/userApi';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const [login, { isLoading, error }] = useLoginMutation();

  useEffect(() => {
    if (error) {
      if (error.status === 400) {
        loginError();
      }
    }
  });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    login({ email, password });
  };

  return (
    <>
      <ToastContainer autoClose={1500} position="top-center" />
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <input
            className={css.input}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </label>
        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </label>
        <button className={css.btn} type="submit" disabled={isLoading}>
          {isLoading && <RotatingLines height="20" width="20" />}
          Log In
        </button>
      </form>
    </>
  );
};

export default LoginForm;
