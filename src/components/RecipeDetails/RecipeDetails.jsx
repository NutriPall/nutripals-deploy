import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";
import SocialMedia from "@components/SocialMedia/SocialMedia";

const RecipeDetails = (imageUrl) => {
  // print recipe
  const reportTemplateRef = useRef(null);
  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a1",
      unit: "px",
    });

    // Adding the fonts
    doc.setFont("Ubuntu", "normal");
    // doc.addImage(`${imageUrl}`, 'JPEG', 15, 40, 180, 160)
    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };

  // end print recipe

  const { id } = useParams();
  const [recipe, setRecipe] = useState();

  function getSingleRecipe() {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=bdcebb08&app_key=5d51c05d804fb3f9b51559d2857c8bb0`
      )

      .then((response) => {
        setRecipe(response.data.recipe);
        // console.log(response.data.recipe)
      });
  }

  useEffect(() => {
    getSingleRecipe();
  }, []);

  return recipe ? (
    <>
      <div className="container">
        <div className="container d-flex flex-column align-items-center">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="mx-auto d-block shadow p-2 mb-3 mt-3 bg-body-tertiary rounded"
                src={recipe.images?.REGULAR?.url}
                alt={recipe.label}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 g-lg-5 g-md-5">
              <div className="row g-lg-5 g-md-5">
                <div className="col-lg-5 col-md-12 col-sm-6 d-flex justify-content-start align-items-center">
                  <button
                    className="btn btn-outline-secondary mx-auto"
                    onClick={() =>
                      handleGeneratePdf(recipe.images?.REGULAR?.url)
                    }
                  >
                    Generate PDF
                  </button>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-start align-items-center">
                  <button
                    className="btn btn-outline-secondary mx-auto"
                    onClick={() => window.open(recipe.url, "_blank")}
                    type="button"
                  >
                    Instructions
                  </button>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-start text-center">
                  <p>on {recipe.source}</p>
                </div>
                <div className="col-md-12 d-flex">
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <section ref={reportTemplateRef}>
            <div className="col-lg-7 col-md-8 col-sm-12">
              <h3>{recipe.label}</h3>

              <p>Servings: {recipe.yield}</p>

              <p>
                {recipe.cuisineType}/{recipe.mealType}/{recipe.dishType}
              </p>
              <p>cooking time: {recipe.totalTime} min</p>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6 list Ingredients">
                <h3>{recipe.ingredientLines.length} Ingredients</h3>
                {recipe
                  ? recipe.ingredientLines.map((ingredient, index) => (
                      <div key={index}>
                        <p>{ingredient}</p>
                      </div>
                    ))
                  : null}
              </div>
              <div className="col-lg-6 col-md-6 nutFacts">
                <h3>Nutrition</h3>
                <div className="row">
                  <div className="text-center col-4">
                    <p>{(recipe.calories / recipe.yield).toFixed(0)}</p>
                    <p>cal/serv</p>
                  </div>
                  <div className="text-center col-4">
                    <p>
                      {(
                        recipe.totalDaily?.ENERC_KCAL.quantity / recipe.yield
                      ).toFixed(1)}
                      {recipe.totalDaily?.ENERC_KCAL.unit}
                    </p>
                    <p>Daily Value</p>
                  </div>
                  <div className="text-center col-4">
                    {recipe
                      ? recipe.dietLabels.map((dietLabel, index) => (
                          <p>
                            <span key={index}>
                              {dietLabel}
                              {index !== recipe.dietLabels.length - 1 && ", "}
                            </span>
                          </p>
                        ))
                      : null}
                  </div>

                  <div className="container p-4">
                    {/* Health Labels */}
                    <div>
                      {recipe
                        ? recipe.healthLabels.map((label, index) => (
                            <span key={index}>
                              {label}
                              {index !== recipe.healthLabels.length - 1 && ", "}
                            </span>
                          ))
                        : null}
                    </div>
                  </div>
                </div>

                {/* Nutrients */}

                <div className="row">
                  <div className="col-8">
                    <h5>amount per serving</h5>
                  </div>

                  <div className="col">
                    <h5>% Daily Value</h5>
                  </div>
                </div>

                <div className="container"></div>

                <div className="row">
                  <div className="col-6">
                    <p>{recipe.totalNutrients?.FAT.label}</p>
                  </div>
                  <div className="col">
                    <p>
                      {(
                        recipe.totalNutrients?.FAT.quantity / recipe.yield
                      ).toFixed(0)}{" "}
                      {recipe.totalNutrients?.FAT.unit}
                    </p>
                  </div>
                  <div className="col">
                    <p>
                      {(recipe.totalDaily?.FAT.quantity / recipe.yield).toFixed(
                        0
                      )}
                      {recipe.totalDaily?.FAT.unit}
                    </p>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <p>{recipe.totalNutrients?.FASAT.label}</p>
                    </div>
                    <div className="col">
                      <p>
                        {(
                          recipe.totalNutrients?.FASAT.quantity / recipe.yield
                        ).toFixed(0)}{" "}
                        {recipe.totalNutrients?.FASAT.unit}
                      </p>
                    </div>
                    <div className="col">
                      <p>
                        {(
                          recipe.totalDaily?.FASAT.quantity / recipe.yield
                        ).toFixed(0)}
                        {recipe.totalDaily?.FASAT.unit}
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <p>{recipe.totalNutrients?.FATRN.label}</p>
                    </div>
                    <div className="col">
                      <p>
                        {(
                          recipe.totalNutrients?.FATRN.quantity / recipe.yield
                        ).toFixed(0)}{" "}
                        {recipe.totalNutrients?.FATRN.unit}
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <p>{recipe.totalNutrients?.FAMS.label}</p>
                    </div>
                    <div className="col">
                      <p>
                        {(
                          recipe.totalNutrients?.FAMS.quantity / recipe.yield
                        ).toFixed(0)}{" "}
                        {recipe.totalNutrients?.FAMS.unit}
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <p>{recipe.totalNutrients?.FAPU.label}</p>
                    </div>
                    <div className="col">
                      <p>
                        {(
                          recipe.totalNutrients?.FAPU.quantity / recipe.yield
                        ).toFixed(0)}{" "}
                        {recipe.totalNutrients?.FAPU.unit}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <p>{recipe.totalNutrients?.CHOLE.label}</p>
                  </div>
                  <div className="col">
                    <p>
                      {(
                        recipe.totalNutrients?.CHOLE.quantity / recipe.yield
                      ).toFixed(0)}{" "}
                      {recipe.totalNutrients?.CHOLE.unit}
                    </p>
                  </div>
                  <div className="col">
                    <p>
                      {(
                        recipe.totalDaily?.CHOLE.quantity / recipe.yield
                      ).toFixed(0)}
                      {recipe.totalDaily?.CHOLE.unit}
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <p>{recipe.totalNutrients?.PROCNT.label}</p>
                  </div>
                  <div className="col">
                    <p>
                      {(
                        recipe.totalNutrients?.PROCNT.quantity / recipe.yield
                      ).toFixed(0)}{" "}
                      {recipe.totalNutrients?.PROCNT.unit}
                    </p>
                  </div>
                  <div className="col">
                    <p>
                      {(
                        recipe.totalDaily?.PROCNT.quantity / recipe.yield
                      ).toFixed(0)}
                      {recipe.totalDaily?.PROCNT.unit}
                    </p>
                  </div>
                </div>
                {/* Carbs */}

                <div className="row">
                  <div className="col-6">
                    <p>{recipe.totalNutrients?.CHOCDF.label}</p>
                  </div>
                  <div className="col">
                    <p>
                      {(
                        recipe.totalNutrients?.CHOCDF.quantity / recipe.yield
                      ).toFixed(0)}{" "}
                      {recipe.totalNutrients?.CHOCDF.unit}
                    </p>
                  </div>
                  <div className="col">
                    <p>
                      {(
                        recipe.totalDaily?.CHOCDF.quantity / recipe.yield
                      ).toFixed(0)}
                      {recipe.totalDaily?.CHOCDF.unit}
                    </p>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <p>{recipe.totalNutrients?.FIBTG.label}</p>
                    </div>
                    <div className="col">
                      <p>
                        {(
                          recipe.totalNutrients?.FIBTG.quantity / recipe.yield
                        ).toFixed(0)}{" "}
                        {recipe.totalNutrients?.FIBTG.unit}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p>{recipe.totalNutrients?.["CHOCDF.net"].label}</p>
                    </div>
                    <div className="col">
                      <p>
                        {(
                          recipe.totalNutrients?.["CHOCDF.net"].quantity /
                          recipe.yield
                        ).toFixed(0)}{" "}
                        {recipe.totalNutrients?.["CHOCDF.net"].unit}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p>{recipe.totalNutrients?.SUGAR.label}</p>
                    </div>
                    <div className="col">
                      <p>
                        {(
                          recipe.totalNutrients?.SUGAR.quantity / recipe.yield
                        ).toFixed(0)}{" "}
                        {recipe.totalNutrients?.SUGAR.unit}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p>{recipe.totalNutrients?.["SUGAR.added"].label}</p>
                    </div>
                    <div className="col">
                      <p>
                        {(
                          recipe.totalNutrients?.["SUGAR.added"].quantity /
                          recipe.yield
                        ).toFixed(0)}{" "}
                        {recipe.totalNutrients?.["SUGAR.added"].unit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  ) : null;
};

export default RecipeDetails;
