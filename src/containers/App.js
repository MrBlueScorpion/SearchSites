import React from 'react';
import SearchFrom from '../components/SearchForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const App = () => (
  <div style={style.container}>
    <Header />
    <main style={style.main}>
      <SearchFrom />
    </main>
    <Footer />
  </div>
);

const style = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },
  main: {
    flex: 1
  }
};

export default App;
