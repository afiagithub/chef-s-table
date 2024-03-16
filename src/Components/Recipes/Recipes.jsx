import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import RecipeItem from "../RecipeItem/RecipeItem";

const Recipes = ({addToCookItems}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('recipe-data.json')
        .then(res => res.json())
        .then(data => setItems(data))
    })
    return (
        <div className="pt-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center">            
                {
                    items.map(item => <RecipeItem key={item.recipe_id} item={item} addToCookItems={addToCookItems}></RecipeItem>)                
                }
            </div>
        </div>
    );
};

Recipes.propTypes = {
    addToCookItems: PropTypes.func
}

export default Recipes;