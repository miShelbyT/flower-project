// import { combineReducers } from 'redux'

const rootReducer = (currentState = { flowers: [] }, action) => {
  // console.log("reducer action", action)
  switch (action.type) {
    case "add flower":
      return { ...currentState, flowers: [...currentState.flowers, action.payload] }
    case "get flowers":
      return { ...currentState, flowers: action.payload }
    default:
      return currentState
  }
}

// const defaultState = {
//   flowers: [],
//   users: []
// }

// function flowersReducer(currentState = defaultState.flowers, action) {
//   switch (action.type) {
//     case "add flower":
//       return [...currentState, action.payload]
//     case "get flowers":
//       return action.payload
//     default:
//       return currentState
//   }
// }

// i will want to duplicate the function above if/when i add users to my app
// const usersReducer = () => {
//   return { users: ["Shelby test", "Chris test"] }
// }


// const rootReducer = combineReducers({
//   flowers: flowersReducer,
//   users: usersReducer
// })

export default rootReducer