import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Listing from './Listing';
import Subcategory from './Subcategory'
import Post from './Post'
import Form from './Form'

export default props => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Switch>
          <Route path="/lasvegas" component={Listing}/>
          <Route path="/:subcategory" component={Subcategory} />
          <Route path ="/:subcategory/post" component={Post} />
          <Route path ="/post/form" component={Form} />
          </Switch>
        </div>
      </Router>
      
    </Provider>
  )
}