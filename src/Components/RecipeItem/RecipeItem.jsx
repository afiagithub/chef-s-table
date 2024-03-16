import PropTypes from 'prop-types';
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";
const RecipeItem = ({item}) => {
    const topIngredients = item.ingredients.slice(0, 3);
    return (
        <div>
            <div className="card w-96 border-2 border-[#28282833]">
                <figure className='p-4'><img className='h-52 w-full rounded-2xl' src={item.recipe_img} alt="Shoes" /></figure>
                <div className="card-body pt-2">
                    <h2 className="card-title">{item.name}</h2>
                    <p className='font-fira text-[#878787] leading-relaxed my-3'>
                        {item.short_description.slice(0, 75)}</p>
                    <hr />
                    <h2 className='text-lg font-semibold mt-3'>Ingredients: {item.ingredients.length}</h2>
                    <ul className='ml-6 list-disc font-fira text-lg text-[#878787] mb-2'>
                        {                            
                            topIngredients.map((ing, idx) => <li key={idx}>{ing}</li>)
                        }
                    </ul>
                    <hr />
                    <div className="prep-details text-[#282828cc] mt-4 flex justify-between items-center">
                        <div className="prep-time flex gap-3 items-center">
                            <IoTimeOutline className='text-2xl'/>
                            <p className='font-fira'>{item.preparing_time}</p>
                        </div>
                        <div className="calorie flex gap-3 items-center">
                            <AiOutlineFire className='text-2xl'/>
                            <p className='font-fira'>{item.calories} calories</p>
                        </div>                        
                    </div>
                    <div className="card-actions justify-start mt-3 pl-0">
                    <button className="btn bg-[#0BE58A] text-xl px-8 rounded-full">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

RecipeItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default RecipeItem;