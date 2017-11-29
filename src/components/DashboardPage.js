import React from 'react';

// Components
import PostSummary from './PostSummary';
import PostListFilters from './PostListFilters';
import PostList from './PostList';


const DashboardPage = () => (
  <div>
    <PostSummary />
    <hr />
    <PostListFilters />
    <PostList />
  </div>
);

export default DashboardPage;