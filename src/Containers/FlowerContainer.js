import React, {useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import FlowerComponent from '../Components/FlowerComponent'
import NewFlowerForm from '../Components/NewFlowerForm'
import SearchFlowerForm from '../Components/SearchFlowerForm'
import ChangeFlowerForm from '../Components/ChangeFlowerForm'
import SavedContainer from './SavedContainer'
import { getFlowers } from '../redux/actions'

function FlowerContainer (props) {

  const [faved, setFaved] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    props.getFlowers()
  },[])


  function faveAFlower(flowerObj){
    if(!faved.includes(flowerObj)){
      const newFlowerArray = [...faved, flowerObj]
      setFaved(newFlowerArray)
    }
  }


  function searchFlower(e){
    setSearchTerm(e.target.value)
  }

  function renderFilteredFlowers(){
    let filteredArray = props.flowers.filter(flowerObj => flowerObj.name.toLowerCase().includes(searchTerm.toLowerCase()))

    return filteredArray.map(flowerObj => <FlowerComponent key={flowerObj.id} flowerObj={flowerObj} faveAFlower={faveAFlower} getFlowerObj={props.getFlowerObj} />)

  }

  
    return (
      <>
        {props.flowers.length === 0 ? <h2>loading...</h2> :

      
          <Switch>
            <Route path="/flowers/new" render={() => 
            <>
            <NewFlowerForm /> 
            {/* <NewFlowerForm submitHandler={submitHandler} /> */}
            </>}
            />
            <Route path="/flowers/saved" render={() => <SavedContainer favedFlowers={faved} />} />
            <Route path="/flowers" render={() => {
              return (
                props.flowers.length === 0 ? <h2>loading...</h2> :
                  <>
                    <SearchFlowerForm searchTerm={searchTerm} searchFlower={searchFlower} />
                    <div className="container">
                    {renderFilteredFlowers()}
                    </div>
                  </>
              )

            }} />

          </Switch>
        }

      </>
    )

  }

// when using fetch, the action creator is passed as an argument to dispatch. thunk intercepts, sees that what is returned is a function and not a simple object so it runs the function, runs the fetch, retrieves the response and then sends the resulting data to the reducer, which sends the data to the store to update state.

const mapStateToProps = (state) => {
  return { flowers: state.flowers }

}

const mapDispatchToProps = (dispatch) => {
  return { getFlowers: () => dispatch(getFlowers()) }
}




export default connect(mapStateToProps, mapDispatchToProps)(FlowerContainer)

