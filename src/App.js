import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './App.css';
import SearchBox from './components/SearchBox';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <div style={style.container}>
        <Header/>
        <main style={style.main}>
          <SearchBox/>
        </main>
        <Footer/>
      </div>
    </Provider>
  )
};

const style = {
  container: {
    display: 'flex',
    minHeight: 100 + 'vh',
    flexDirection: 'column'
  },
  main: {
    flex: 1
  }
};

export default App;