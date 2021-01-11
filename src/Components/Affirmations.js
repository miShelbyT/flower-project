import React from 'react'


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
      fetch("https://dulce-affirmations-api.herokuapp.com/affirmation")
        .then(r => r.json())
        .then(data => {
          console.log(data[0].phrase)
          // console.log(data)
          this.setState({ affirmation: data[0].phrase, gotAffirmation: false })
        })
    }
  }



  clickHandler = () => {
    this.setState({ beenClicked: !this.state.beenClicked, gotAffirmation: true  })
  }


  render() {
    console.log(this.state.gotAffirmation)
    // !this.state.beenClicked ? this.fetchAffirmation() : null
    return (
      <div>
        {this.state.beenClicked ? <div className="div" ><span>{this.state.affirmation}</span></div> : null}
        {this.state.beenClicked ?
          <button onClick={this.clickHandler} className="other-button" >Thanks for the Affirmation!</button> :
          <button onClick={this.clickHandler} className="other-button" >Affirmations Right Here</button>
        }

      </div>
    )

  }





}

export default Affirmations