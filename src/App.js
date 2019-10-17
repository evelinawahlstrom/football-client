import './App.css';
import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'

class App extends Component {
  componentDidMount() {
    // query parameters --> add after /teams?q=blabla,
    // add this using httpie (?)
    fetch("http://localhost:4000/team")
  } 
  render() {
  return (
    <Provider store={store}>
    <div>
    <Route path="/" exact component={Home} />
    </div>
    </Provider>
  )
}
}

export default App