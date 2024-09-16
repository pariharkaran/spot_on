import {createStore} from 'redux'
import {rootReducer} from '../reducer/rootReducer' // Import the root reducer

// Create the store using the root reducer
const store = createStore(rootReducer)

export default store
