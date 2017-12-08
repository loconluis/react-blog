import React, { Component } from 'react';
import database from '../firebase/firebase';
import PostListItem from './PostListItem';

class PublicList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    }
  }
  
  componentWillMount = () => {
    const username = this.props.match.params.username;
    database.ref(`users/${username}/posts`)
      .on('value', snapshot => {
        const posts = [];
        snapshot.forEach(childSnapshot => {
          posts.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          })
        })
        this.setState(() => ({ posts }))
      }, err => console.log(err))
  }
  

  render () {
    const name = this.props.match.params.username;
    const publicName = `@${name}`;
    return (
      <div>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__title">
              <h1>{publicName} Blog</h1>
            </div>
          </div>
        </div>
      </header>
        <div className="container">
          <div className="list-header">
            <div className="show-for-mobile">Post</div>
            <div className="show-for-desktop">Post</div>
            <div className="show-for-desktop">Preview</div>
          </div>
          <div className="list-body">
          {
            this.state.posts === 0 ? (
              <div>
                <span>No Posts</span>
              </div>) 
            : (
              this.state.posts.map((post, index) => <PostListItem isPublic key={index} {...post}/>)
            )
          }
          </div>
        </div>
      </div>
    )
  }
}

export default PublicList

