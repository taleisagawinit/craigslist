import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getCurrentCategory, post } from '../actions/list.actions'

export default props => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const category = useSelector(appState => appState.current);

  useEffect(() => {
    getCurrentCategory(props.match.params.subcategory)
  }, [props.match.params.subcategory])
      
  function handleSubmit(e) {
    e.preventDefault()
    post(title, content, props.match.params.subcategory)
  }
  return (
    <div className="form">
      <header>
        <Link to="/">CL</Link>
        <p>Posting to: {category}</p>
      </header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">posting title</label>
        <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)}></input>
        <label htmlFor="description">description</label>
        <textarea id="description" value={content} onChange={e => setContent(e.target.value)}></textarea>
        <button>post</button>
      </form> 
    </div>
   
  )
}