import { createStore } from 'redux'

import listReducer from './reducers/list.reducer'

const store = createStore(listReducer)

export default store