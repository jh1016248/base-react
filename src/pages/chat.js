import React from 'react';
import {Link} from 'react-router';

class Chat extends React.Component {
  render () {
    return (
      <div className="wrap">
     	<p>hello Chat</p>
        <Link to="/">index</Link>
      </div>
    )
  }
}
export default Chat;
