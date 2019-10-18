import './App.css';
import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import TeamsListContainer from './components/TeamsListContainer'
import Home from './components/Home'
import TeamDetailsContainer from './components/TeamDetailsContainer'




class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <main>
      <header>
      <h1>Welcome to the Football Management Site</h1></header>
        <div>
        <Route path="/" exact component={Home} />
        <ul>
        <li><Link to='/'> Home </Link></li>
        <li><Link to='/teams'> Teams </Link></li> 
        </ul>
          <Route path="/teams" exact component={TeamsListContainer} />
          <Route path="/teams/:id" exact component={TeamDetailsContainer} />
        </div>
        </main>
      </Provider>
    );
  }
}

export default App


