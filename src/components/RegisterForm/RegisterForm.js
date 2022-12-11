import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import css from './RegisterForm.module.css';
import { register } from 'redux/auth-operations';
import { selectError } from 'redux/selectors';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const error = useSelector(selectError);

  return (
    <>
      {error && <p className={css.error}>{error}</p>}
      <form
        className={css.form}
        onSubmit={handleSubmit(data => dispatch(register(data)))}
        autoComplete="off"
      >
        <label className={css.label}>
          Username
          <input
            className={css.input}
            type="text"
            {...registerForm('name', { required: 'Enter your name' })}
          />
          {errors.name?.message && (
            <p className={css.error}>{errors.name.message}</p>
          )}
        </label>
        <label className={css.label}>
          Email
          <input
            className={css.input}
            type="email"
            {...registerForm('email', { required: 'Enter your email' })}
          />
          {errors.email?.message && (
            <p className={css.error}>{errors.email.message}</p>
          )}
        </label>
        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="password"
            {...registerForm('password', { required: 'Enter your password' })}
          />
          {errors.password?.message && (
            <p className={css.error}>{errors.password.message}</p>
          )}
        </label>
        <button className={css.button} type="submit">
          Register
        </button>
      </form>
    </>
  );
};
