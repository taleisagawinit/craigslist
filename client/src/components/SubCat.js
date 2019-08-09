import React, { useEffect } from 'react'
import { getSubCat } from '../actions/list.actions'
import { useSelector } from 'react-redux'

export default props => {
  const subC = useSelector(appState => appState.subcat)
console.log(subC)


let num = 1;
  useEffect(() => {
    getSubCat()
  }, [])

  return (
    <div>
      <div className="list"> 
        {subC.slice(0, 15).map(item => <p key={num++}>{item}</p>)}
      </div>
      <div className="list"> 
        {subC.slice(16, 25).map(item => <p key={num++}>{item}</p>)}
      </div>

    </div>
    


  )
}