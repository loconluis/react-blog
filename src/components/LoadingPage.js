import React from 'react';
import loader from '../assets/images/loader.gif'

export default () => (
  <div className="loader">
    <img src={loader} className="loader__image" alt="loader" />
  </div>
);