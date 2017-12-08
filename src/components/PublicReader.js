import React from 'react';
import showdown from 'showdown';
import database from '../firebase/firebase';

export class PublicReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
  }

  componentWillMount = () => {
    const id = this.props.match.params.id;
    const username = this.props.match.params.username;
    database.ref(`users/${username}/posts/${id}`)
      .once('value', snapshot => {
        let post = snapshot.val();
        let body = post.body;
        this.setState(() => ({ body }))
      }, err => console.log(err))
  }
  

  handleMarkdownToHtml = (text) => {
    let convert = new showdown.Converter();
    let html = convert.makeHtml(text);
    return { __html: html };
  }
  

  render() {
    return (
        <div className="container">
        {
          this.state.body !== undefined 
          ? (
            <div
              dangerouslySetInnerHTML={this.handleMarkdownToHtml(this.state.body)}
            >
            </div> ) : ''
        }
        </div>
    );
  };
}

export default PublicReader;