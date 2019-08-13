import store from '../store'
import axios from 'axios'


export function allCategories() {
  axios.get('api/lasvegas').then(resp => {
    store.dispatch({
      type: 'CATEGORY',
      payload: resp.data
    })
  })
}

export function getSubcategory(subcategory) {
  axios.get('api/posts/' + subcategory).then(resp => {
    store.dispatch({
      type: 'GET_POSTS',
      payload: resp.data
    })
  })
}

export function getCurrentCategory(subcategory) {
  axios.get('api/category/' + subcategory).then(resp => {
    store.dispatch({
      type: 'GET_CURRENT',
      payload: resp.data.name
    })
  })
}

export function post(title, content, subcategory) {
  axios.post('api/post/', { title, content}).then(resp => {
    store.dispatch({
      type:'POST',
      payload: resp.data
    })
  })
}