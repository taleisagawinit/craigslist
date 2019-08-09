import store from '../store'
import axios from 'axios'

export function getMainCat() {
  axios.get('api/home').then(resp => {
    console.log((resp.data).map(item => item.name))
    let data = (resp.data).map(item => item.name)
    store.dispatch({
      type: 'CATEGORY',
      payload: data
    })
  })
}

export function getSubCat() {
  axios.get('api/').then(resp => {
    console.log((resp.data).map(item => item.name))
    let sub = (resp.data).map(item => item.name)
    store.dispatch({
      type: 'SUBC',
      payload: sub
    })
  })
}