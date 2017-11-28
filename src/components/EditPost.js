import React from 'react';

export class EditPost extends React.Component {
  
  onSubmit = (post) => {
    // redux dispatch action EditPost
  }

  onRemove = () => {
    // redux dispatch action removePost
  }

  render() {
    return (
      <div>
        <h2>Edit post of your blog</h2>
        {/*Render a Post form*/}
        {/*Render a delete button*/}
      </div>
    );
  };
}