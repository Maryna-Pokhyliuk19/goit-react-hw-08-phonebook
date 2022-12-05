import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom/dist';
import { logOut } from 'redux/auth-operations';
import { selectUserName } from 'redux/selectors';

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {userName}</p>
      <NavLink className={css.link} to="contacts">
        Contacts
      </NavLink>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
