import React from 'react';
import { connect } from 'react-redux';
import showdown from 'showdown';

export class PublicReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
  }

  handleMarkdownToHtml = (text) => {
    let convert = new showdown.Converter();
    let html = convert.makeHtml(this.props.post.body);
    return { __html: html };
  }
  

  render() {
    return (
        <div className="container">
        {
          this.props.post !== undefined 
          ? (
            <div
              dangerouslySetInnerHTML={this.handleMarkdownToHtml(this.props.post.body)}
            >
            </div> ) : ''
        }
        </div>
    );
  };
}

const mapStateToProps = (state, props) => ({
  post: state.blog.find(post => post.id === props.match.params.id),
})

export default connect(mapStateToProps)(PublicReader);