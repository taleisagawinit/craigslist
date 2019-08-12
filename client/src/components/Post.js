import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
  return (
    <div>
      <p>please limit each posting to a single area and category, once per 48 hours</p>
      <p>what type of posting is this: (see prohibited list before posting.)</p>
      <div>
        <Link to="lasvegas/post/form"><input type="radio"></input></Link>
        <label>job offered</label>
       
      </div>
      
    </div>
  )
}