import React from 'react';
import App from './app';
export class Video extends React.Component {
  render() {
    return (
      <div>
        <video controls autostart autoPlay muted src/>
      </div>
    );
  }
}