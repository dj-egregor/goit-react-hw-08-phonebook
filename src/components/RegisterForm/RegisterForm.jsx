import { RotatingLines } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

import { serverError, registerError } from 'utils/notification';
import { useRegisterMutation } from 'redux/userApi';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const [register, { isLoading, error }] = useRegisterMutation();

  useEffect(() => {
    if (error) {
      if (error.status === 400) {
        registerError();
      }
      if (error.status === 500) {
        serverError();
      }
    }
  }, [error]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const confirmPassword = form.elements.confirmPassword.value;

    if (password !== confirmPassword) {
      toast.error('Passwords do not match. Please try again.');
      return;
    }

    register({ name, email, password });
  };

  return (
    <>
      <ToastContainer autoClose={2500} position="top-center" />
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Username"
            required
          />
        </label>
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
        <label className={css.label}>
          Confirm Password
          <input
            className={css.input}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </label>
        <button className={css.btn} type="submit" disabled={isLoading}>
          {isLoading && <RotatingLines height="20" width="20" />}
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
