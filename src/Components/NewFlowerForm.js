import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addFlower } from '../redux/actions'
import { withRouter } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


function NewFlowerForm (props) {


const [flowerName, setFlowerName] = useState("")
const [flowerType, setFlowerType] = useState("")
const [flowerImg, setFlowerImg] = useState("")
const [flowerFactoid, setFlowerFactoid] = useState("")

const flower = {
  name: flowerName,
  img: flowerImg,
  type: flowerType,
  factoid: flowerFactoid
}


  const submitHandler = (e) => {
    e.preventDefault()
    props.submitHandler(flower)
    props.history.push("/flowers")
    setFlowerName('')
    setFlowerImg('')
    setFlowerType('')
    setFlowerFactoid('')

  }


  
    return (

      <form onSubmit={submitHandler}>
        <input type="text" name="name" placeholder="name goes here..." value={flowerName} onChange={(e => setFlowerName(e.target.value))} />

        <input type="text" name="type" placeholder="flower type goes here..." value={flowerType} onChange={(e => setFlowerType(e.target.value))} />

        <input type="text" name="img" placeholder="image url goes here..." value={flowerImg} onChange={(e => setFlowerImg(e.target.value))} />

        <input type="text" name="factoid" placeholder="fun flower fact goes here..." value={flowerFactoid} onChange={(e => setFlowerFactoid(e.target.value))} />

        <Button color ='green'>Create New Flower Here</Button>

      </form>

    )
}
// mdp must return an object that passes dispatch wrapped in a thunk to delay execution/invocation. dispatch must point to an action object with a type key. in this case we are invoking the function addFlower as defined in actions.js. don't forget to pass the object through after dispatch/function!

const mapDispatchToProps = (dispatch) => {
return { submitHandler: (flowerObj) => dispatch(addFlower(flowerObj))}
}

export default withRouter(connect(null, mapDispatchToProps)(NewFlowerForm))
