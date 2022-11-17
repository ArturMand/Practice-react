import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Wellcome</h1>
      <button type="button" onClick={() => navigate('/authpage')}>
        Start
      </button>
    </>
  );
};
