/**
 * Created by Lixing on 14/1/17.
 */
import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => (
  <div style={style.container}>
    <nav style={style.nav}>
      <img src={Logo} alt="Adslot" />
    </nav>
  </div>
);

const style = {
  container: {
    display: 'flex',
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#d8d8d9',
    borderBottomStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center'

  },
  nav: {
    width: 1170
  }

};

export default Header;
