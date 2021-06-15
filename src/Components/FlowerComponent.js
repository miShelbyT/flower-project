import React, { useState, useReducer } from 'react'
import { connect } from 'react-redux'
import { deleteFlower } from '../redux/actions'
import { Button, Icon } from 'semantic-ui-react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
}

function FlowerComponent(props) {

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { likes: state.likes + 1 }
      case ACTIONS.DECREMENT:
        return { likes: state.likes - 1 }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, { likes: 0 })

  // const [likes, setLikes] = useState(0)
  const [beenClicked, setBeenClicked] = useState(false)

  const increaseLikes = () => {
    dispatch({ type: ACTIONS.INCREMENT })
    // return setLikes((prevLikes) => prevLikes + 1)
  }

  const decreaseLikes = () => {
    dispatch({ type: ACTIONS.DECREMENT })
  }

  const localFaveAFlower = () => {
    props.faveAFlower(props.flowerObj)
  }

  const sendFlowerToChangeForm = () => {
    console.log('yippee!')
    // need to send info up to parent so the data will reflect in the form and
    // i can update flower object, set state and make a PATCH request.
    // i have this.props.getFlowerObj to use for this purpose
  }

  const clickHandler = () => {
    return setBeenClicked(!beenClicked)
  }

  const handleDelete = () => {
    props.deleteFlower(props.flowerObj.id)
  }

  return (
    <div className="flower-div">
      <h3> {props.flowerObj.name}</h3>
      <img
        onClick={sendFlowerToChangeForm}
        className="img"
        src={props.flowerObj.img}
        alt={props.flowerObj.name}
      />
      <h4>Type: {props.flowerObj.type}</h4>
      <h4>Fave Counter: {state.likes}</h4>

<Button.Group>
      <Button animated="vertical" onClick={decreaseLikes} basic color="black">
        <Button.Content hidden>- Fave</Button.Content>
        <Button.Content visible>
          <Icon name="heart" />
        </Button.Content>
      </Button>

      <Button animated="vertical" onClick={increaseLikes} basic color="red">
        <Button.Content hidden>+ Fave</Button.Content>
        <Button.Content visible>
          <Icon name="heart" />
        </Button.Content>
      </Button>

      <Button animated="vertical" onClick={localFaveAFlower} basic color="blue">
        <Button.Content hidden>Save</Button.Content>
        <Button.Content visible>
          <Icon name="save" />
        </Button.Content>
      </Button>

      <Button
        animated="vertical"
        onClick={handleDelete}
        basic
        color="purple"
      >
        <Button.Content hidden>Delete</Button.Content>
        <Button.Content visible>
          <Icon name="delete" />
        </Button.Content>
      </Button>
      </Button.Group>

      {beenClicked ? (
        <Button onClick={clickHandler} class="ui circular blue button">
          <Button.Content>Hide Details</Button.Content>
        </Button>
      ) : (
        <Button.Content
          onClick={clickHandler}
          class="ui circular violet button"
        >
          <Button.Content>Show Details</Button.Content>
        </Button.Content>
      )}

      {beenClicked ? (
        <div className="factoid-div">
          {' '}
          <span>Factoid: {props.flowerObj.factoid}</span>
        </div>
      ) : null}

    </div>
  )
}

const mdp = (dispatch) => {
  return {
    deleteFlower: (flowerId) => dispatch(deleteFlower(flowerId)),
  }
}

export default connect(null, mdp)(FlowerComponent)
