import React from 'react'

function SearchFlowerForm (props){

  
    return (

      <form>
        <label style={{margin: 8, fontSize: 18}}>Flower Search:</label>
        <input type="text" placeholder="filter flower by name..." value={props.searchTerm} onChange={props.searchFlower} />
      </form>

    )
  }

export default SearchFlowerForm