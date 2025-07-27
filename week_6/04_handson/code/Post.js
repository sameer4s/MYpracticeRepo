
import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Post;
