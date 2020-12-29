import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import FlowerContainer from './Containers/FlowerContainer'
import Header from './Components/Header'
import Navbar from './Components/Navbar'



function App () {
    // console.log(this.state.flowerAPI)
    return (
      <>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/flowers" component={FlowerContainer}/>
        </Switch>
      </>
    );

}

export default App;
