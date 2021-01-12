import React from 'react'
import { connect } from 'react-redux'

class ChangeFlowerForm extends React.Component {

  state = {
    name: "",
    type: "",
    img: "",
    factoid: ""
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: [e.target.value] })
    console.log(this.state.name)
    // let foundFlower = this.props.flowers.find(flowerObj => flowerObj.name.toLowerCase().includes(this.state.name.toLowerCase()))
    // console.log(foundFlower)
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log("this will need an mdp PATCH request")
    this.setState({
      name: "",
      type: "",
      img: "",
      factoid: ""
    })
    console.log(this.state)
  }

  render() {
    return (

      <form onSubmit={this.submitHandler} >
        <input type="text" name="name" placeholder="update name..." value={this.state.name} onChange={this.changeHandler} />

        <input type="text" name="type" placeholder="update type..." value={this.state.type} onChange={this.changeHandler} />

        <input type="text" name="img" placeholder="update image url..." value={this.state.img} onChange={this.changeHandler} />

        <input type="text" name="factoid" placeholder="update fun flower factoid..." value={this.state.factoid} onChange={this.changeHandler} />

        <button className="button" >Update Flower Here</button>

      </form>

    )
  }

}

const msp = (state) => {
  return { flowers: state.flowers }
}

export default connect(msp)(ChangeFlowerForm)