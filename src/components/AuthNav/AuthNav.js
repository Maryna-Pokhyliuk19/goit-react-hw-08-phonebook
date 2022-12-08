import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <header className={css.header}>
      <h2 className={css.title}>Welcome to PhoneBook</h2>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.link)}
        to="registration"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.link)}
        to="login"
      >
        Log In
      </NavLink>
    </header>
  );
};
