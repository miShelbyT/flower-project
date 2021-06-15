import { combineReducers } from 'redux'
import { ADD_FLOWER, GET_FLOWERS, GET_AFFIRMATION, DELETE_FLOWER } from './actionTypes'


const defaultState = {
  flowers: [],
  users: [], 
  affirmation: ""
}

function flowersReducer(currentState = defaultState.flowers, action) {
  switch (action.type) {
    case ADD_FLOWER:
      return [...currentState, action.payload]
    case GET_FLOWERS:
      return action.payload
      case DELETE_FLOWER:
        return currentState.filter(flower => flower.id !== action.payload)
    default:
      return currentState
  }
}

// i will want to duplicate the function above if/when i add users to my app
// const usersReducer = () => {
//   return { users: ["Shelby test", "Chris test"] }
// }

function affirmationReducer(currentState = defaultState.affirmation, action){
  switch (action.type) {
    case GET_AFFIRMATION:
      return action.payload
      default:
        return currentState
  }

}


const rootReducer = combineReducers({
  flowers: flowersReducer,
  affirmation: affirmationReducer
})

export default rootReducer