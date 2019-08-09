const initialState = {
  categories: [],
  subcat: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CATEGORY':
      return {...state, categories: (action.payload).map(item => [...state.categories, item]) }
    case 'SUBC':
      return {...state, subcat: (action.payload).map(item => [...state.subcat, item]) }
    default:
      return state
  }
}