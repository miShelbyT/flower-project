import React from 'react'


class FlowerComponent extends React.Component{

state = {
  counterLikes: 0
}

increaseLikes = () => {
  this.setState(prevState => ({counterLikes: prevState.counterLikes + 1})
  )
}

localFaveAFlower = () => {
  this.props.faveAFlower(this.props.flowerObj)
  console.log(this.props.flowerObj)
}

sendFlowerToChangeForm = () => {
  console.log("yippee!")
  // need to send info up to parent so the data will reflect in the form and 
  // i can update flower object, set state and make a PATCH request.
  // i have this.props.getFlowerObj to use for this purpose

}




render(){
  return(
    <div>
    <h3 className="text"> {this.props.flowerObj.name} 🌹</h3>
    <img onClick={this.sendFlowerToChangeForm} className="img" src={this.props.flowerObj.img} alt="flowers"/>
    <h4>Type: {this.props.flowerObj.type}</h4>
    <h4>Likes Counter: {this.state.counterLikes}</h4>
    <button onClick={this.increaseLikes}>❤️ Fave ❤️ </button>
    <button onClick={this.localFaveAFlower}>🌻 Save 🌻 </button>
    <p className='text' >Factoid: {this.props.flowerObj.factoid}</p>
    <span>* *  🌼  *  *  🌼  *  *  🌼  *  *  🌼  * *</span>

    </div>
  )
}

}

export default FlowerComponent