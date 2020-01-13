import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Appskeleton from './components/skeleton/skeletonComponent'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Appskeleton />
          </div>
        </Router>
      </Provider>
    );
  }

}

export default App;
