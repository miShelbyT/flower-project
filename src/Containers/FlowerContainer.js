import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import FlowerComponent from '../Components/FlowerComponent'
import NewFlowerForm from '../Components/NewFlowerForm'
import SearchFlowerForm from '../Components/SearchFlowerForm'
import ChangeFlowerForm from '../Components/ChangeFlowerForm'
import SavedContainer from './SavedContainer'
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
    }
  }


  searchFlower = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  renderFilteredFlowers() {
    let filteredArray = this.props.flowers.filter(flowerObj => flowerObj.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    return filteredArray.map(flowerObj => <FlowerComponent key={flowerObj.id} flowerObj={flowerObj} faveAFlower={this.faveAFlower} getFlowerObj={this.getFlowerObj} />)

  }


  render() {
    return (
      <>
        {this.props.flowers.length === 0 ? <h2>loading...</h2> :

      
          <Switch>
            <Route path="/flowers/new" render={() => 
            <>
            <NewFlowerForm submitHandler={this.submitHandler} />
            </>}
            />
            <Route path="/flowers/saved" render={() => <SavedContainer favedFlowers={this.state.favedFlowers} />} />
            <Route path="/flowers" render={() => {
              return (
                this.props.flowers.length === 0 ? <h2>loading...</h2> :
                  <>
                    <SearchFlowerForm searchTerm={this.state.searchTerm} searchFlower={this.searchFlower} />
                    <div className="container">
                    {this.renderFilteredFlowers()}
                    </div>
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

