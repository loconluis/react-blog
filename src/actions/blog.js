import database from '../firebase/firebase';

// ADD POST
export const addPost = post => ({
  type: 'ADD_POST',
  post,
});

// trigger the action
export const startAddPost = (postData = {}) => {
  return (dispatch, getState) => {
    // console.log(getState().auth)
    const username = getState().auth.username;
    const {title = '', body = '', createdAt = 0 } = postData;
    const post = {title, body, createdAt };
    // add the post to database, later dispatch an action
    return database.ref(`users/${username}/posts`).push(post)
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
    const username = getState().auth.username;
    return database.ref(`users/${username}/posts/${id}`).remove()
      .then(() => dispatch(removePost({ id })));
  }
}

// EDIT POST
export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates,
});

export const startEditPost = (id, updates) => {
  return (dispatch, getState) => {
    const username = getState().auth.username;
    return database.ref(`users/${username}/posts/${id}`).update(updates)
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
    const username = getState().auth.username;
    const dbURI = `users/${username}/posts`;
    return database.ref(dbURI)
      .once('value')
      .then((snapshot) => {
        console.log(snapshot);
        const posts = [];
        snapshot.forEach(childSnapshot => {
          posts.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        return posts;
      }).then(posts => dispatch(setPosts(posts)));
  }
}

export const startSetPublicPosts = (username) => {
  return (dispatch) => {
    const dbURI = `users/${username}/posts`;
    return database.ref(dbURI)
      .once('value')
      .then((snapshot) => {
        console.log(snapshot);
        const posts = [];
        snapshot.forEach(childSnapshot => {
          posts.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        return posts;
      }).then(posts => dispatch(setPosts(posts)));
  }
}