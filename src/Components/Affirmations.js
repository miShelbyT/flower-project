import React from 'react'
import { connect } from 'react-redux'
import { getAffirmation } from '../redux/actions'


class Affirmations extends React.Component {

  state = {
    beenClicked: false,
    affirmation: null,
    gotAffirmation: false
  }


  // const fetchAffirmation = () => {
  //  return fetch("https://www.affirmations.dev", {
  //   method: 'GET',
  //   mode: 'cors', 
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  //   .then (r => r.json())
  //   .then(data => console.log(data))  
  // }


  componentDidUpdate() {
    if (this.state.gotAffirmation) {
      this.props.getAffirmation()
      this.setState({ gotAffirmation: false })
      // console.log("i'm in component did update")
    }
  }



  clickHandler = () => {
    this.setState({ beenClicked: !this.state.beenClicked, gotAffirmation: true })
  }


  render() {
    // console.log(this.state.gotAffirmation)
    return (
      <div>
        {this.state.beenClicked ? <div className="div-affirm" ><span>{this.props.affirmation}</span></div> : null}
        {this.state.beenClicked ?
          <button onClick={this.clickHandler} className="other-button" >Thanks for the Affirmation!</button> :
          <button onClick={this.clickHandler} className="other-button" >Affirmations Right Here</button>
        }

      </div>
    )

  }

}


const msp = (state) => {
  return { affirmation: state.affirmation }
}

const mdp = (dispatch) => {
  return {
    getAffirmation: () => dispatch(getAffirmation())
  }
}

export default connect(msp, mdp)(Affirmations)