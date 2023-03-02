import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Sorry, page not found!</h3>
      <Link className={css.link} to="/">
        To Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
