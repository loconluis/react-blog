export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
        username: action.username,
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};