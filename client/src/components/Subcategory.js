import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSubcategory } from '../actions/list.actions';


export default props => {
  useEffect(() => {
    getSubcategory(props.match.params.subcategory)
  }, [])
  return (
    <div className="subcategory">
      <header>
        <Link to="/lasvegas"><p>CL</p></Link>
        <Link to={`/${props.match.params.subcategory}/post`}><p>post</p></Link>
        <h3>{props.match.params.subcategory}</h3>
      </header>
      <div className="ads">
        <aside>
          <p>filter options go here</p>
        </aside>
        <div>
        <input type="text" placeholder="search"></input>
        <p>search icon button goes here</p>
        <div className="listButtons">
          <select>
            <option>list</option>
            <option>thumb</option>
            <option>gallery</option>
          </select>
          <p>buttons to change pages</p>
          <p>button to filter by newest ads</p>
        </div>
        <div className="posts">
          <p>star icon</p>
          <p>Ad title and description goes here, link to ad</p>
          <p>city location</p>
        </div>
      </div>
     
      </div>
      
    </div>
  )
}


  