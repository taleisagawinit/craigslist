const initialState = {
  categories: [],
  posts:[],
  current:''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CATEGORY':
      return {...state, categories: action.payload }
    case 'GET_POSTS':
      return {...state, posts: action.payload }
    case 'GET_CURRENT':
      return {...state, current: action.payload }
    case 'POST':
      return {...state, posts: [...state.posts, action.payload] }
    default:
      return state
  }
}