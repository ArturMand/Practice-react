import React from 'react';
import { useDispatch } from 'react-redux';
import { registration } from '../Redux/operation/operation';

export const AuthPage = () => {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    const email = e.target.elements.email.value.trim();
    const name = e.target.elements.name.value.trim();
    const password = e.target.elements.password.value.trim();
    dispatch(registration({ email, password, name }));
  };
  return (
    <form onSubmit={onSubmit}>
      <input name="name" type="text" placeholder="name" />
      <input name="email" type="email" placeholder="email" />
      <input name="password" type="password" placeholder="password" />
      <button type="submit"> register</button>
    </form>
  );
};
