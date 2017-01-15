/**
 * Created by Lixing on 14/1/17.
 */
import React from 'react';

const Footer = () => (
  <div style={style.container}>
    <h1 style={style.title}>Adslot Media</h1>
  </div>
);


const style = {
  container: {
    display: 'flex',
    padding: '2em',
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  title: {
    color: 'white'
  }

};

export default Footer;
