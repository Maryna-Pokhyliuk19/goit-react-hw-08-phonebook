import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilter = e => {
    dispatch(filterContact(e.currentTarget.value.trim()));
  };

  return (
    <label className={css.labelFilter}>
      Find contact by the name
      <input
        className={css.inputFilter}
        type="text"
        value={filter}
        onChange={onFilter}
      />
    </label>
  );
};
