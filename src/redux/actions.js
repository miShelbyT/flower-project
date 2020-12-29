// import { ADD_FLOWER } from './actionTypes';

// the whole point of this function is to return the object with type key and payload.

export const addFlower = (flowerObj) => ({type: "add flower", payload: flowerObj})


export const getFlowers = () => {
  // console.log("first dispatch invoked")
  return function(dispatch){
    // console.log("nested function invoked", dispatch)
// anonymous function, we don't need to give it a variable name bc we won't be calling it.
    fetch("http://localhost:5000/flowerlist")
        .then(resp => resp.json())
        .then(console.log)
        // .then(flowerArray => dispatch({ type: "get flowers", payload: flowerArray }))

// ...........something is wrong with line 16? everything works fine until in comment that line back in - initial fetch does not work on render................

// need to pass dispatch as an argument and then use dispatch inside the second .then - inception! we are using dispatch twice. once for the original mdp and again after the data has returned in the 2nd .then.

  }
}