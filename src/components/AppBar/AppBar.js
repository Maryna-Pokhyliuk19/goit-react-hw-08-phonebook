import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.appHeader}>
      <container className={css.appContainer}>
        {/* <h2 className={css.title}>Welcome to PhoneBook</h2> */}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </container>
    </header>
  );
};
