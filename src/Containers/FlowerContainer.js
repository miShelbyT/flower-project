import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import FlowerComponent from '../Components/FlowerComponent'
import NewFlowerForm from '../Components/NewFlowerForm'
import SearchFlowerForm from '../Components/SearchFlowerForm'
import FavedContainer from '../Containers/FavedContainer'
import { getFlowers } from '../redux/actions'

class FlowerContainer extends React.Component {

  state = {
    // flowerAPI: [],
    favedFlowers: [],
    searchTerm: ""
  }

  componentDidMount() {
    this.props.getFlowers()
  }


  faveAFlower = (flowerObj) => {
    if(!this.state.favedFlowers.includes(flowerObj)){
      const newFlowerArray = [...this.state.favedFlowers, flowerObj]
      this.setState({ favedFlowers: newFlowerArray })
      console.log(this.state.favedFlowers)
    }
  }


  searchFlower = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  renderFilteredFlowers() {
    let filteredArray = this.props.flowers.filter(flowerObj => flowerObj.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    // console.log(this.props)

    return filteredArray.map(flowerObj => <FlowerComponent key={flowerObj.id} flowerObj={flowerObj} faveAFlower={this.faveAFlower} getFlowerObj={this.getFlowerObj} />)

    // return this.props.flowers.map(flowerObj => <FlowerComponent key={flowerObj.id} flowerObj={flowerObj} faveAFlower={this.faveAFlower} getFlowerObj={this.getFlowerObj} />)
  }

  // renderFlowers = () => {
  //   return this.state.flowerAPI.map(flowerObj => <FlowerComponent key={flowerObj.id} flowerObj={flowerObj} faveAFlower={this.faveAFlower} getFlowerObj={this.getFlowerObj} />)
  // }


  render() {
    // console.log(this.props.flowers)
    return (
      <>
        {this.props.flowers.length === 0 ? <h2>loading...</h2> :

          <Switch>
            <Route path="/flowers/new" render={() => <NewFlowerForm submitHandler={this.submitHandler} />} />
            <Route path="/flowers/saved" render={() => <FavedContainer favedFlowers={this.state.favedFlowers} />} />
            <Route path="/flowers" render={() => {
              return (
                this.props.flowers.length === 0 ? <h2>loading...</h2> :
                  <>
                    <SearchFlowerForm searchTerm={this.state.searchTerm} searchFlower={this.searchFlower} />

                    {this.renderFilteredFlowers()}
                  </>
              )

            }} />

          </Switch>
        }

      </>
    )

  }

}
// when using fetch, the action creator is passed as an argument to dispatch. thunk intercepts, sees that what is returned is a function and not a simple object so it runs the function, runs the fetch, retrieves the response and then sends the resulting data to the reducer, which sends the data to the store to update state.

const mapStateToProps = (state) => {
  return { flowers: state.flowers }

}

const mapDispatchToProps = (dispatch) => {
  return { getFlowers: () => dispatch(getFlowers()) }
}




export default connect(mapStateToProps, mapDispatchToProps)(FlowerContainer)

