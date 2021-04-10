import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import FlowerContainer from './Containers/FlowerContainer'
import Header from './Components/Header'



function App () {
    return (
      <>
        <Header />
          <Route path="/flowers" component={FlowerContainer}/>
      </>
    );

}

export default App;
