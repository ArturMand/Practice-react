// import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { googleAuth } from '../Redux/AuthOperations';

export const AuthPage = () => {
  const dispatch = useDispatch();
  return (
    // <Formik onSubmit={() => dispatch(googleAuth())}>
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch(googleAuth());
      }}
    >
      <button type="submit">Auth by Google</button>
    </form>
    //  </Formik>
  );
};
