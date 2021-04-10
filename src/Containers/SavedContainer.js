import React from 'react';

import FlowerComponent from '../Components/FlowerComponent'

function SavedContainer(props){

  function renderFaves(){
    return props.favedFlowers.map(flowerObj => <FlowerComponent key={flowerObj.id} flowerObj={flowerObj}/>)
  
  }
  // console.log(props.favedFlowers)
  return(
    <>
    <h2>Saved Flowers: 🌷🌻</h2>
   <div className="container">
    {renderFaves()}
   </div>
  
    </>
  )

}

export default SavedContainer