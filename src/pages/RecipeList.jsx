import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import SearchBar from "@components/SearchBar/SearchBar";
import SearchFilter from "@components/SearchFilter/SearchFilter";
import RecipeIntro from "@components/RecipeIntro/RecipeIntro";
import "../style/RecipeList.css";


function RecipeList() {
  // Save data fetch in a state
  const [recipes, setRecipes] = useState();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState([]);
  const [filters, setFilters] = useState({});

  //* fetch the new endpoint using the value of the search
  const searchRecipe = () => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=bdcebb08&app_key=5d51c05d804fb3f9b51559d2857c8bb0`
      )
      .then((response) => {
        console.log(response.data.hits);
        setRecipes(response.data.hits);
      });
  };

  //* for each value that has been insert, save it on a state
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  //* when the state changes, update the component
  useEffect(() => {
    handleFilterResults();
  }, [filters]);

  const handleFilterResults = () => {
    let finalFilter = filters;
    if (Object.entries(finalFilter).length > 0) {
      Object.keys(finalFilter).filter((key) => {
        if (finalFilter[key] === false) {
          delete finalFilter[key];
        }
      });
      setFilters(finalFilter);
      let tempArray = [];
      recipes &&
        recipes.map(recipe =>
          Object.keys(finalFilter).map((key) => {
            if (recipe.recipe.healthLabels.includes(key)) {
              if (!tempArray.includes(recipe)) {
                tempArray.push(recipe);
              }
            }
          })
        );
      if (tempArray.length === 0) {
        tempArray = recipes;
      }
      setFilter(tempArray);
    }
  };

  const addFilter = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <RecipeIntro />
      <br />
      <br />
      <div className="row">
        <div className="col-lg-4 col-md-5 text-center">
          <h1>Recipe List</h1>
        </div>
        <div className="col-lg-3 col-md-4">
         <SearchBar
        query={query}
        handleChange={handleChange}
        searchRecipe={searchRecipe}
      /> 
      <br />
      <br />
        </div>

      </div>
      
      {recipes && recipes.length > 0 && (
        <SearchFilter addFilter={addFilter} recipes={recipes} />
      )}

      <div className="row row-cols-sm-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center">
        {recipes && recipes.length > 0 && filter.length === 0
          ? // * render data inside cards using map() to iterate all elements fetched
            recipes.map((recipe, index) => (
              <div key={index}>
                <RecipeCard recipe={recipe.recipe} />
              </div>
            ))
          : filter && Object.entries(filters).length > 0
          ? filter.map((recipe, index) => (
              <div key={index}>
                <RecipeCard recipe={recipe.recipe} />
              </div>
            ))
          : recipes && recipes.length > 0
          ? recipes.map((recipe, index) => (
              <div key={index}>
                <RecipeCard recipe={recipe.recipe} />
              </div>
            ))
          : null}
      </div>
      {recipes ? null : (
        <div className="instructions">
          <h2 className="instructions-title">
            Find your next meal in 3 easy steps:</h2>
        <ol className="ol-list">
          <li className="instructions-item">Search for your favorite ingredient, cuisine type, or dietary preference. Use the search filters to find the exact option for you.</li>
          <li className="instructions-item">Visit the recipe page to know more about nutritional value and click on "Create PDF"</li>
          <li className="instructions-item">Start cooking delicious meals!</li>
        </ol>
      </div>
      )}
    </div>
  );
}

export default RecipeList;
