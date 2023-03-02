import { useDispatch, useSelector } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';

import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const valueFilter = payload => {
    dispatch(setFilter(payload));
  };

  const changeFilter = e => {
    valueFilter(e.target.value);
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <DebounceInput
        minLength={1}
        debounceTimeout={300}
        className={css.input}
        type="text"
        value={filter}
        placeholder="Search"
        onChange={changeFilter}
      />
    </label>
  );
};

export default Filter;
