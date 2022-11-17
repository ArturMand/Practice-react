import { AuthPage } from './components/Pages/AuthPage';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './components/Pages/Home';
import { Layout } from './components/Pages/Layout';
import { PrivateRoute } from './PrivateRoute';
import { TasksPage } from './components/Pages/TasksPage';
import { RestrictedRoute } from './RestrictedRoute';

export const Tasks = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/authpage"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<AuthPage />} />
          }
        />
        <Route
          path="/tasks"
          element={<PrivateRoute redirectTo="/" component={<TasksPage />} />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
