import LoginForm from 'components/LoginForm';

import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={css.wrapper}>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
