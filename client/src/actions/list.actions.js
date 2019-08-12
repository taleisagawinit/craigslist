import store from '../store'
import axios from 'axios'


export function allCategories() {
  axios.get('api/lasvegas').then(resp => {
    console.log(resp.data)
    store.dispatch({
      type: 'CATEGORY',
      payload: resp.data
    })
  })
}

export function getSubcategory(param) {
  axios.get(`api/${param}`).then(resp => {
    console.log(resp.data)
  })
}