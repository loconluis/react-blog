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
    const { title = '', body = '', createdAt = 0 } = postData;
    const post = { title, body, createdAt };
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

export const startRemovePost = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/posts/${id}`).remove()
      .then(() => dispatch(removePost({ id })));
  }
}

// EDIT POST
export const editPost = (id, updates) => ({
  type: 'UPDATE_POST',
  id,
  updates,
});

export const startEditPost = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/posts/${id}`).update(updates)
      .then(() => dispatch(editPost(id, updates)));
  }
}

// SET POSTS
export const setPosts = posts => ({
  type: 'SET_POSTS',
  posts,
});

export const startSetPosts = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.id;
    return database.ref(`users/${uid}/posts`).once('value')
      .then((snapshot) => {
        const posts = [];
        snapshot.forEach((childSnapshot) => {
          console.log(snapshot);
          posts.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        return posts;
      }).then(posts => dispatch(setPosts(posts)));
  }
}