import { combineReducers } from 'redux'
import { ADD_FLOWER, GET_FLOWERS } from './actionTypes'


const defaultState = {
  flowers: [],
  users: []
}

function flowersReducer(currentState = defaultState.flowers, action) {
  switch (action.type) {
    case ADD_FLOWER:
      return [...currentState, action.payload]
    case GET_FLOWERS:
      return action.payload
    default:
      return currentState
  }
}

// i will want to duplicate the function above if/when i add users to my app
// const usersReducer = () => {
//   return { users: ["Shelby test", "Chris test"] }
// }


const rootReducer = combineReducers({
  flowers: flowersReducer
})

export default rootReducer