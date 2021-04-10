import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteFlower } from '../redux/actions'
import { Button, Icon } from 'semantic-ui-react'


function FlowerComponent(props) {

  const [likes, setLikes] = useState(0)
  const [beenClicked, setBeenClicked] = useState(false)

  const increaseLikes = () => {
    return setLikes(likes + 1)
  }

  const localFaveAFlower = () => {
    props.faveAFlower(props.flowerObj)
  }

  const sendFlowerToChangeForm = () => {
    console.log("yippee!")
    // need to send info up to parent so the data will reflect in the form and 
    // i can update flower object, set state and make a PATCH request.
    // i have this.props.getFlowerObj to use for this purpose

  }

  const clickHandler = () => {
    return setBeenClicked(!beenClicked)
  }

  const deleteClickHandler = () => {
    // this.props.deleteFlower()
    // console.log("this is not working. yet")
  }





  return (
    <div className="flower-div">
      <h3> {props.flowerObj.name}</h3>
      <img onClick={sendFlowerToChangeForm} className="img" src={props.flowerObj.img} alt="flowers" />
      <h4>Type: {props.flowerObj.type}</h4>
      <h4>Fave Counter: {likes}</h4>

      <Button animated='vertical' onClick={increaseLikes} basic color='red' content='Red' >
        <Button.Content hidden>Fave</Button.Content>
        <Button.Content visible>
          <Icon name='heart' />
        </Button.Content>
      </Button>

      <Button animated='vertical' onClick={localFaveAFlower} basic color='blue' content='Blue' >
        <Button.Content hidden>Save</Button.Content>
        <Button.Content visible>
          <Icon name='save' />
        </Button.Content>
      </Button>

      {beenClicked ?
        <Button animated='vertical' onClick={clickHandler} basic color='green' content='Green' >
          <Button.Content hidden>Hide Details</Button.Content>
          <Button.Content visible>
            <Icon name='expand' />
          </Button.Content>
        </Button> : <Button animated='vertical' onClick={clickHandler} basic color='green' content='Green' >
          <Button.Content hidden>Show Details</Button.Content>
          <Button.Content visible>
            <Icon name='move' />
          </Button.Content>
        </Button>
      }

      {beenClicked ?
        <div className='factoid-div'> <span>
          Factoid: {props.flowerObj.factoid}
        </span>
        </div> : null}


      <Button animated='vertical' onClick={deleteClickHandler} basic color='purple' content='Purple' >
        <Button.Content hidden>Delete</Button.Content>
        <Button.Content visible>
          <Icon name='delete' />
        </Button.Content>
      </Button>

    </div>
  )
}

const mdp = (dispatch) => {
  return {
    deleteFlower: (flowerId) => dispatch(deleteFlower(flowerId))
  }
}

export default connect(null, mdp)(FlowerComponent)