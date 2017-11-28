const getVisiblePost = (posts, { text, sortBy }) => {
  return posts.filter(post => {
    const textMatch = post.title.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    return 0;
  });
}

export default getVisiblePost;