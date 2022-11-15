import { addMessage } from 'components/Chat/Redux/ChatOperations';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export const ChatForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addMessage(e.target.elements.message.value.trim()));
    e.target.reset();
  };
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '0',
        right: '0',
        left: '0',
        padding: '0 100px',
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Form.Control type="text" name="message" />
          <Button
            variant="primary"
            type="submit"
            style={{ marginLeft: '10px' }}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
