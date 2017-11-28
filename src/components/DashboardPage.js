import React from 'react';

// Components
import PostSummary from './PostSummary';
import PostList from './PostList';


const DashboardPage = () => (
  <div>
    <PostSummary />
    <hr />
    <PostList />
  </div>
);

export default DashboardPage;