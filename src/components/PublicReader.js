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

  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    // this.setState(() => ({
    //   body: nextProps.post.body,
    // }))
  }

  componentWillMount () {
  }

  handleMarkdownToHtml = (text) => {
    let convert = new showdown.Converter();
    let html = convert.makeHtml(this.props.post.body);
    return { __html: html };
  }
  

  render() {
    console.log(this.props.post.body);
    return (
        <div
          dangerouslySetInnerHTML={this.handleMarkdownToHtml(this.props.post.body)}
        >
        </div>
    );
  };
}

const mapStateToProps = (state, props) => ({
  post: state.blog.find(post => post.id === props.match.params.id),
})

export default connect(mapStateToProps)(PublicReader);