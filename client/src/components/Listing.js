import React, { useEffect } from 'react'
import { allCategories } from '../actions/list.actions';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Heading from './Heading'
import Cities from './Cities'

export default props => {
  const all = useSelector(appState => appState.categories)
  let i = 0;
  let j=0;
  
  
  useEffect(() => {
    allCategories()
  }, [])
  return (
    <div className="content">
    <Heading />
    <div className="main">
      <p>las vegas</p> 
      <div className="categories">
        {all.map(obj => obj.map(item => 
        <div key={i++}>
          <Link to={"/" + item.slug}>
            <h3>{item.name}</h3>      
          </Link>
        <div className="section">
          <ul className="subsection" id={item.slug}>
            {item.child_categories.map(child => 
            <Link key={j++} to={`/${child.slug}`}>
              <li>{child.name}</li>
            </Link>)}
          </ul>
        </div>
       </div>
      ))}
      </div>
    </div>
    <Cities />
    </div>
  )
}