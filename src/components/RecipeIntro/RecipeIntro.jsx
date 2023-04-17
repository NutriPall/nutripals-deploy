import Carousel from "react-bootstrap/Carousel";
import "./RecipeIntro.css";

export default function RecipeIntro () {

    return(
    <div className="recipeIntro">
        <Carousel>
            <Carousel.Item>
                <img className="recipe-intro-img" src="https://i.imgur.com/TPGizxf.png" alt="colorful ingredients" title="cooking with color" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="recipe-intro-img" src="https://i.imgur.com/7T3rBP6.png" alt="two wooden spoons with spices" title="cooking with spices" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="recipe-intro-img" src="https://i.imgur.com/P2pPIPo.png" alt="simple ingredients" title="cooking with simple ingredients" />
            </Carousel.Item>
        </Carousel>
    </div>
    );
}