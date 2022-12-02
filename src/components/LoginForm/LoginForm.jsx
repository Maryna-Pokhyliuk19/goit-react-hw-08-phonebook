import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { logIn } from 'redux/auth-operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register: registerForm,
    handleSubmit,
    
  } = useForm();

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit(data => dispatch(logIn(data)))}
    >
      <label className={css.label}>
        Email
        <input
          type="email"
          {...registerForm('email', { required: 'Enter your email' })}
        />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          {...registerForm('password', { required: 'Enter your password' })}
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
