import { useEffect, useState } from "react";
import RecipeItem from "../RecipeItem/RecipeItem";

const Recipes = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('recipe-data.json')
        .then(res => res.json())
        .then(data => setItems(data))
    })
    return (
        <div className="mx-5 lg:mx-20 pb-5 lg:pb-8 pt-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center">            
                {
                    items.map(item => <RecipeItem key={item.recipe_id} item={item}></RecipeItem>)                
                }
            </div>
        </div>
    );
};

export default Recipes;