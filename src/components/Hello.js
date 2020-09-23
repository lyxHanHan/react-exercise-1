import React from 'react';
import '../styles/Hello.scss';
import avatar from '../assets/avatar.jpg';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <img className="Logo" src={avatar} alt="logo" />
        <h1 className="hello">HELLO,</h1>
        <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV.</h2>
        <hr></hr>
      </div>
    );
  }
}
export default Hello;
