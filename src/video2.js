import React from 'react';
import myVideo from './2.mp4';

class VideoVertComponent extends React.Component {
  render() {
    return (
      <video
        width="100%"
        height="100%"
        preload="auto"
        autoPlay={true}
        loop={true}
        muted={true}
        display="inline-block"
        vertical-align="baseline"
        object-fit="contain"
      >
        <track kind="captions"></track>
        <source src={myVideo} type="video/mp4" />
      </video>
    );
  }
}
export default VideoVertComponent;
