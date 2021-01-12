import { ADD_FLOWER, GET_FLOWERS, GET_AFFIRMATION, DELETE_FLOWER } from './actionTypes';

// the whole point of this function is to return the object with type key and payload.

export const addFlower = (flowerObj) => {
  return function (dispatch) {
    fetch('http://localhost:5000/flowerlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(flowerObj),
    })
      .then(response => response.json())
      .then(newFlowerObj => dispatch({ type: ADD_FLOWER, payload: newFlowerObj }))
      .catch((error) => {
        console.error('Error:', error);
      })
  }
}



export const getFlowers = () => {
  // console.log("first dispatch invoked")
  return function (dispatch) {
    // console.log("nested function invoked", dispatch)
    // anonymous function, we don't need to give it a variable name bc we won't be calling it.
    fetch("http://localhost:5000/flowerlist")
      .then(resp => resp.json())
      // .then(console.log)
      .then(flowerArray => dispatch({ type: GET_FLOWERS, payload: flowerArray }))

    // need to pass dispatch as an argument and then use dispatch inside the second .then - inception! we are using dispatch twice. once for the original mdp and again after the data has returned in the 2nd .then.

  }
}

export const getAffirmation = () => {
  return async (dispatch) => {
    await fetch("https://dulce-affirmations-api.herokuapp.com/affirmation")
      .then(r => r.json())
      .then(affirmation => {
        // console.log(affirmation[0].phrase)
        dispatch({ type: GET_AFFIRMATION, payload: affirmation[0].phrase })
      })
  }
}

export const deleteFlower = (flowerId) => {
  return function (dispatch) {
    fetch(`http://localhost:5000/flowerlist/${flowerId}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(
        dispatch({ type: DELETE_FLOWER, payload: flowerId }))
      .catch(console.log)
  }

}