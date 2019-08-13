import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Subcategory from './Subcategory'
import Form from './Form'
import Home from './Home'

export default props => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route  exact path="/:subcategory" component={Subcategory} />
            <Route  exact path="/:subcategory/post/" component={Form} />
          </Switch>
        </div>
      </Router>
      
    </Provider>
  )
}