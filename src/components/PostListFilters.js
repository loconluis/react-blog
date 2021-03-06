// eslint-disable import/first instead
import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter } from '../actions/filters';

class PostListFilters extends React.Component {
  
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  render() {
    return (
      <div className="container">
        <div className="input-group">
          <input
            className="text-input"
            type="text"
            placeholder="Search post"
            value={this.props.filters.text}
            onChange={this.onTextChange}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ filters: state.filters });


const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostListFilters);
