import React, { useEffect } from 'react'
import { getData, getMainCat } from '../actions/list.actions'
import { useSelector } from 'react-redux'

export default props => {
  const mainC = useSelector(appState => appState.categories)
console.log(mainC)


let num = 1;
  useEffect(() => {
    getMainCat()
  }, [])

  return (
    <div>
    <div className="list"> 
      {mainC.map(item => <p key={num++}>{item}</p>)}
    </div>
    </div>
  )
}