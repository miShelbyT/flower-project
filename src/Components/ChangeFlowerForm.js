import React from 'react'
import { connect } from 'react-redux'

class ChangeFlowerForm extends React.Component{

clickHandler = () => {
  console.log("i'm a clickhandler")
}

render(){

  return (

    <form>
      <input type="text" placeholder="update flower name..." value={this.props.name} onChange={this.clickHandler} />

      <h3 className="button" >UpdateFlower</h3>

    </form>

  )
}

}

const msp = (state) => {
  return {flowers: state.flowers}
}

export default connect(msp)(ChangeFlowerForm)