import './App.css';
import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import TeamsListContainer from './components/TeamsListContainer'
import Home from './components/Home'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Link to='/'> Home </Link>
          <Link to='/teams'> Teams </Link>
          <Route path="/" exact component={Home} />
          <Route path="/teams" component={TeamsListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App