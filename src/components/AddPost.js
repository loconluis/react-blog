import React from 'react';

export class AddPost extends React.Component {
  
  onSubmit = (post) => {
    // redux dispatch action AddPost
  }

  render() {
    return (
      <div>
        <h2>Add a new post of your blog</h2>
        {/*Render a Post form*/}
      </div>
    );
  };
}