import css from './button-styled.module.css';
import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';

const ButtonStyled = ({ children, disabled, isLoading, ...rest }) => {
  return (
    <button className={css.btn} disabled={disabled} {...rest} type="submit">
      {isLoading && <RotatingLines height="20" width="20" />}
      {children}
    </button>
  );
};

ButtonStyled.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default ButtonStyled;
