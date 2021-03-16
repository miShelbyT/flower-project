import React from 'react'
import { connect } from 'react-redux'
import { deleteFlower } from '../redux/actions'
import { Button, Icon } from 'semantic-ui-react'


class FlowerComponent extends React.Component {

  state = {
    counterLikes: 0,
    beenClicked: false
  }

  increaseLikes = () => {
    this.setState(prevState => ({ counterLikes: prevState.counterLikes + 1 })
    )
  }

  localFaveAFlower = () => {
    this.props.faveAFlower(this.props.flowerObj)
    console.log(this)
  }

  sendFlowerToChangeForm = () => {
    console.log("yippee!")
    // need to send info up to parent so the data will reflect in the form and 
    // i can update flower object, set state and make a PATCH request.
    // i have this.props.getFlowerObj to use for this purpose

  }

  clickHandler = () => {
    this.setState({ beenClicked: !this.state.beenClicked })
  }

  deleteClickHandler = () => {
    // this.props.deleteFlower()
    // console.log("this is not working. yet")
  }




  render() {
    return (
      <div>
        <h3 className="text"> {this.props.flowerObj.name} ☀️</h3>
        <img onClick={this.sendFlowerToChangeForm} className="img" src={this.props.flowerObj.img} alt="flowers" />
        <h4>Type: {this.props.flowerObj.type}</h4>
        <h4>Likes Counter: {this.state.counterLikes}</h4>

        <Button animated='vertical' onClick={this.increaseLikes} basic color='red' content='Red' >
          <Button.Content hidden>Fave</Button.Content>
          <Button.Content visible>
            <Icon name='heart' />
          </Button.Content>
        </Button>

        <Button animated='vertical' onClick={this.localFaveAFlower} basic color='blue' content='Blue' >
          <Button.Content hidden>Fave</Button.Content>
          <Button.Content visible>
            <Icon name='save' />
          </Button.Content>
        </Button>

        {this.state.beenClicked ?
          <Button animated='vertical' onClick={this.clickHandler} basic color='green' content='Green' >
            <Button.Content hidden>Hide Details</Button.Content>
            <Button.Content visible>
              <Icon name='expand' />
            </Button.Content>
          </Button> : <Button animated='vertical' onClick={this.clickHandler} basic color='green' content='Green' >
            <Button.Content hidden>Show Details</Button.Content>
            <Button.Content visible>
              <Icon name='move' />
            </Button.Content>
          </Button>
        }

        {this.state.beenClicked ?
          <p className='text' >Factoid: {this.props.flowerObj.factoid}</p> : null}

        <Button animated='vertical' onClick={this.deleteClickHandler} basic color='purple' content='Purple' >
          <Button.Content hidden>Delete</Button.Content>
          <Button.Content visible>
            <Icon name='delete' />
          </Button.Content>
        </Button>


        <hr></hr>

      </div>
    )
  }

}

const mdp = (dispatch) => {
  return {
    deleteFlower: (flowerId) => dispatch(deleteFlower(flowerId))
  }
}

export default connect(null, mdp)(FlowerComponent)