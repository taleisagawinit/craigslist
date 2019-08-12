import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
  return (
    <div className="form">
      <header>
        <Link to="/lasvegas">CL</Link>
      </header>
      <form>
        <div>
          <label htmlFor="title">posting title</label>
          <input id="title" type="text"></input>
          <label htmlFor="city">city or neighborhood</label>
          <input id="city" type="text"></input>
          <label htmlFor="zip">postal code</label>
          <input id="zip" type="text"></input>
        </div>
        <label htmlFor="description">description</label>
        <textarea id="description">

        </textarea>
        
      </form> 
    </div>
   
  )
}