import React from 'react'
import { connect } from 'react-redux'
import { addFlower } from '../redux/actions'
import { withRouter } from 'react-router-dom'


class NewFlowerForm extends React.Component {

  // reminder that forms always hold local state even when we use Redux to hold global state.once the object is created and the POST is sent, the object is sent to global state held in the store but local state remains to reset the form

  state = {
    name: "",
    type: "",
    img: "",
    factoid: ""
  }

  createHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.props.history.push("/flowers")
    this.setState({
      name: "",
      type: "",
      img: "",
      factoid: ""
    })

  }


  render() {
    // console.log("Form Props", this.props)
    return (

      <form onSubmit={this.submitHandler}>
        <input type="text" name="name" placeholder="name goes here..." value={this.state.name} onChange={this.createHandler} />

        <input type="text" name="type" placeholder="flower type goes here..." value={this.state.type} onChange={this.createHandler} />

        <input type="text" name="img" placeholder="image url goes here..." value={this.state.img} onChange={this.createHandler} />

        <input type="text" name="factoid" placeholder="fun flower fact goes here..." value={this.state.factoid} onChange={this.createHandler} />

        <button className="button" >Create New Flower Here</button>

      </form>

    )
  }
}
// mdp must return an object that passes dispatch wrapped in a thunk to delay execution/invocation. dispatch must point to an action object with a type key. in this case we are invoking the function addFlower as defined in actions.js. don't forget to pass the object through after dispatch/function!

const mapDispatchToProps = (dispatch) => {
return { submitHandler: (flowerObj) => dispatch(addFlower(flowerObj))}
}

export default withRouter(connect(null, mapDispatchToProps)(NewFlowerForm))
