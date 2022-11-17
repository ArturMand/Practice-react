import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../Redux/operation/operation';
import { fetchTasks } from '../Redux/operation/tasksOperation';
export const TasksPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <button type="button" onClick={() => dispatch(logOut())}>
        {' '}
        Log Out
      </button>
      Tasks Page
    </div>
  );
};
