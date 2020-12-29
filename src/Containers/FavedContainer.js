import React from 'react';

import FlowerComponent from '../Components/FlowerComponent'

function FavedContainer(props){

  function renderFaves(){
    return props.favedFlowers.map(flowerObj => <FlowerComponent key={flowerObj.id} flowerObj={flowerObj}/>)
  
  }
  // console.log(props.favedFlowers)
  return(
    <>
    <p>==================================================</p>
    <h2>Faved Flowers: 🌷🌻</h2>
    <p>==================================================</p>
    {renderFaves()}
    <p>==================================================</p>
    </>
  )

}

export default FavedContainer