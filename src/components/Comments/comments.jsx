import React, { Component } from 'react';
import Comment from '../Comment';
import './comments.css';
 
class Comments extends Component {
  render() {
    return (
      <section className="section">
        {
          this.props.comments.map((comment, index) => {
            return <Comment key={index} comment={comment} />
          })
        }
      </section>
    );
  }
}
 
export default Comments;
