/**
 * Created by Lixing on 14/1/17.
 */
import React from 'react';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div style={style.container}>
      <h1 style={style.title}>Adslot Media</h1>
    </div>
  )
};

const style = {
  container: {
    display: 'flex',
    padding: 2 + 'em',
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  title: {
    color: 'white'
  }

};

export default Footer;
