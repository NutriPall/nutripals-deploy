import React, {useState, useEffect} from "react"
import "./SearchFilter.css"
import "../../style/App.css"

// const arrayFilters=["Mediterranean", "Gluten-Free", "Kosher"]

const SearchFilter = ({addFilter, recipes}) => {
  const [uniqueFilters, setUniqueFilters] = useState([])
    
const getFilters = ()=>{
  let tempArray = []
  recipes.map(recipe => tempArray.push(...recipe.recipe.healthLabels))
  let unique = [...new Set(tempArray)];
  setUniqueFilters(unique)
}

useEffect(()=>{
  getFilters()
},[])

  return (
    <div className="filters-list">
      {uniqueFilters.map((filter, index) =>(
        index < 10 ?
        <div className="filter" key={index}>
          <label htmlFor={filter}> <p>{filter}</p> </label>
          <input className="checkbox"  type="checkbox" name={filter}  value={filter}  onChange={addFilter}/>
          <br/>
        </div>
        : null
      ))}
    </div>
  )
}

export default SearchFilter