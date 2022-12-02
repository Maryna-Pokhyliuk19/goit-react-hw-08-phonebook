import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import css from './RegisterForm.module.css';
import { register } from 'redux/auth-operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { register: registerForm, handleSubmit } = useForm();

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit(data => dispatch(register(data)))}
      autoComplete="off"
    >
      <label className={css.label}>
        Username
        <input
          type="text"
          {...registerForm('name', { required: 'Enter your name' })}
        />
      </label>
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
      <button type="submit">Register</button>
    </form>
  );
};
