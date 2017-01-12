import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './App.css';
import SearchBox from './components/SearchBox';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <div className="container">
        <SearchBox/>
      </div>

    </Provider>
  )
};
export default App;