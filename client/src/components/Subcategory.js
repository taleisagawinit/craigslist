import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSubcategory, getCurrentCategory } from '../actions/list.actions';
import MaterialIcon from 'material-icons-react'
import moment from 'moment'


export default props => {
  const posts = useSelector(appState => appState.posts)
  const currentC = useSelector(appState => appState.current)
  useEffect(() => {
    getSubcategory(props.match.params.subcategory)
    getCurrentCategory(props.match.params.subcategory)
  }, [props.match.params.subcategory])
  return (
    <div className="subcategory">
      <header>
        <Link to="/"><p>CL</p></Link>
        <p>las vegas > {currentC} </p>
        <Link to={props.match.params.subcategory + "/post"}> <p>post</p> </Link>
      </header>
      <div className="ads">
        <div>
        <div className="listButtons">
          <select>
            <option>list</option>
            <option>thumb</option>
            <option>gallery</option>
          </select>
        </div>
        <div className="posts">
          <div>
            {posts.map(post => (
             <div key={'post' + post.id} className="eachPost">
                <MaterialIcon icon="star_border" />
                <p className="date">{moment(post.time_created).fromNow()}</p>
                <Link to={"/post/" + post.id}>{post.title}</Link>
                <p>(Las Vegas)</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
     
      </div>
      
    </div>
  )
}


  