import React from 'react';
import SearchBox from '../components/SearchBox';
import Header from '../components/Header';
import Footer from '../components/Footer';

const App = () => {
  return (
    <div style={style.container}>
      <Header />
      <main style={style.main}>
        <SearchBox />
      </main>
      <Footer />
    </div>
  );
};

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
