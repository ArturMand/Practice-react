import {
  emailSelector,
  sortedChatSelector,
} from 'components/Chat/Redux/Selectors';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const ChatList = () => {
  const chat = useSelector(sortedChatSelector);
  const isLogInUser = useSelector(emailSelector);
  return (
    <ListGroup
      style={{
        display: 'flex',
        gap: '10px',
        margin: '0 100px',
      }}
    >
      {chat.map(({ message, email, name, id }) => {
        const isCurrentUser = email === isLogInUser;
        return (
          <ListGroup.Item
            key={id}
            style={{ flexBasis: 'calc((100% - 220px) / 2)' }}
            variant={isCurrentUser ? 'success' : 'danger'}
          >
            {name}:{message}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};
