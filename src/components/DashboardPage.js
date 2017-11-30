import React from 'react';

// Components
import PostSummary from './PostSummary';
import PostListFilters from './PostListFilters';
import PostList from './PostList';


const DashboardPage = () => (
  <div>
    <PostSummary />
    <PostListFilters />
    <PostList />
  </div>
);

export default DashboardPage;