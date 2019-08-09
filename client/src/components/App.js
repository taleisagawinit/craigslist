import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import MainCat from './MainCat'
import SubCat from './SubCat'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default props => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
        <Route path="/home" component={MainCat}/> 
        <Route path="/" component={SubCat}/>
      </div>
      </Router>
      
    </Provider>
  )
}