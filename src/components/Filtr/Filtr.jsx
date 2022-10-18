import css from './Filtr.module.css';
import PropTypes from 'prop-types';

export const Filtr = ({ value, onChange }) => {
  return (
    <label className={css.labelFilter}>
      Find contact by the name
      <input
        className={css.inputFilter}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filtr.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
