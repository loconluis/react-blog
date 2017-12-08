import React from 'react';
import { Link } from 'react-router-dom';


const PublicHeader = ({ publicName, name, isPostView }) => (
  <header className="header">
    <div className="container">
      <div className="header__content">
        <div className="header__title">
          <h1>{publicName} Blog</h1>
        </div>
        {
          isPostView ? (<Link className="btn btn--link" to={`/${name}`}>Go back</Link>) 
          : (
            <Link to="/" className="btn btn--action">login</Link>
          )
        }
      </div>
    </div>
  </header>
);

export default PublicHeader