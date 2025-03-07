import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";

const Recipes = ({ handleCook }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
            {
                recipes.map(recipe => <Recipe key={recipe?.recipe_id} recipe={recipe} handleCook={handleCook}></Recipe>)
            }
        </div>
    );
};

Recipes.propTypes = {
    handleCook: PropTypes.func.isRequired
}
export default Recipes;