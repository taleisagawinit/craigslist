import React from 'react'
import { Link } from 'react-router-dom'

export default props => {


  return (
    <div className="heading">
      <Link to="/lasvegas">
        <p className="title">ryanslist</p>
      </Link>
     
      <div>
        <p className="highlight">create a posting</p>
        <p>my account</p>
      </div>
      <input type="text" placeholder="search craigslist"></input>
      <div>
        <p>event calendar</p>
        <div className="calendar">
          
        </div>
      </div>
      <div className="extra">
        <ul>
          <li>help, faq, abuse, legal</li>
          <li>avoid scams and fraud</li>
          <li>personal safety and tips</li>
          <li>terms of use</li>
          <li>privacy policy</li>
          <li>system status</li>
        </ul>
        <ul>
          <li>about ryanslist</li>
          <li>ryanslist is hiring in sf</li>
          <li>ryanslist open source</li>
          <li>ryanslist blog</li>
          <li>best-of-ryanslist</li>
          <li>ryanslist TV</li>
          <li>"ryanslist joe"</li>
          <li>ryan connects</li>
        </ul>
      </div>
    </div>
  )
}