import { connect, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { loginOut } from '../Redux/AuthOperations';
import { getChat } from '../Redux/ChatOperations';
import { ChatForm } from '../components/ChatForm/ChatForm';
import { ChatList } from '../components/ChatList/ChatList';

const ChatPage = ({ userName, chatLogOut }) => {
  const distpatch = useDispatch();
  useEffect(() => {
    distpatch(getChat());
  }, [distpatch]);

  return (
    <>
      <div>{userName}</div>
      <Button variant="primary" onClick={chatLogOut}>
        Log Out
      </Button>
      <ChatList />
      <ChatForm />
    </>
  );
};
const mapStateToProps = state => ({
  userName: state.auth.user?.displayName,
});
const mapDispatchToProps = dispatch => ({
  chatLogOut: () => dispatch(loginOut()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
