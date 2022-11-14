import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { AuthPage } from './Pages/AuthPage';
import ChatPage from './Pages/ChatPage';

export const RouterChat = () => {
  const { isLogIn } = useSelector(state => state.auth);
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Navigate to="/auth" />} />
        <Route
          path="auth"
          element={isLogIn ? <Navigate to="/chat" /> : <AuthPage />}
        />
        <Route
          path="chat"
          element={isLogIn ? <ChatPage /> : <Navigate to="/auth" />}
        />
      </Route>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};
