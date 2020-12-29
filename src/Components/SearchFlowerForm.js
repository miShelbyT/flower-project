import React from 'react'

function SearchFlowerForm (props){

  
    return (

      <form>
        <input type="text" placeholder="filter flower by name..." value={props.searchTerm} onChange={props.searchFlower} />

        <h3 className="button" >Flower Search</h3>

      </form>

    )
  }

export default SearchFlowerForm