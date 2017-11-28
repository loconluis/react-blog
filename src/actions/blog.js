import database from '../firebase/firebase';

// ADD POST
export const addPost = post => ({
  type: 'ADD_POST',
  post,
});

// trigger the action
export const startAddPost = (postData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { title = '', body = '' } = postData;
    const post = { title, body };
    // add the post to database, later dispatch an action
    return database.ref(`users/${uid}/posts`).push(post)
      .then(ref => dispatch(addPost({ id: ref.key, ...post })));
  }
}

// REMOVE POST
export const removePost = ({ id } = {}) => ({
  type: 'REMOVE_POST',
  id,
});

// EDIT POST
export const editPost = (id, updates) => ({
  type: 'UPDATE_POST',
  id,
  updates,
});

// SET POSTS
export const setPosts = posts => ({
  type: 'SET_POSTS',
  posts,
});