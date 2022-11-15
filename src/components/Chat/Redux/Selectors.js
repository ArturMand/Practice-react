export const nameSelector = state => state.auth.user?.displayName;
export const emailSelector = state => state.auth.user?.email;
export const chatSelector = state => state.chat.messages;
export const sortedChatSelector = state => {
  const sortedMessages = chatSelector(state);
  return [...sortedMessages].sort((a, d) => a.createdAt - d.createdAt);
};
