import { Contacts } from 'pages/Contacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { refreshUser } from 'redux/auth-operations';
import { Layout } from './Layout/Layout';
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to={'login'} />} />
        <Route path="registration" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
