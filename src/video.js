import React from 'react';
import myVideo from './1.mp4';

class myVideoComponent extends React.Component {
  render() {
    return (
      <video width="100%" height="100%" preload="auto">
        <track kind="captions"></track>
        <source src={myVideo} type="video/mp4" />
      </video>
    );
  }
}
export default myVideoComponent;
