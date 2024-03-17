import { useState } from 'react'
import './App.css'
import { toast } from 'react-toastify';
import WantToCook from './Components/CookItem/WantToCook'
import Banner from './Components/Header/Banner/Banner'
import Navbar from './Components/Header/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'

function App() {
  const [cookItems, setCookItems] = useState([]);

  // Adding recipe to Want to Cook table
  const addToCookItems = (item) =>{
    const isExist = cookItems.find(cookItem => cookItem.recipe_id === item.recipe_id);
    if(!isExist){
      setCookItems([...cookItems, item]);
    }
    else{
      toast("Already Exist");
    }    
  }

  // Deleting recipe from Want to Cook table when 'Preparing' button is clicked
  const deleteCookItem = (id) => {
    const newCookItems = cookItems.filter(cookItem => cookItem.recipe_id !== id);
    setCookItems(newCookItems);
  }

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>

        {/* Recipe Section */}
        <div className='recipes-section mt-10 lg:mt-20 mx-5 lg:mx-16 pb-5 lg:pb-8'>
          {/* Recipe Section Heading */}
          <div className="recipe-heading mb-7">
            <h1 className='font-semibold text-4xl text-center mb-6'>Our Recipes</h1>
            <p className='w-5/6 lg:w-3/5 mx-auto text-center text-[#150b2bb3] leading-relaxed'>Our courses cover 
            from basic cooking techniques like Sautéing, Roasting, and Braising to advanced cooking techniques like 
            Sous Vide, Fermentation, and more</p>
          </div>
          {/* Recipe Section Content */}
          <div className="recipe-content flex flex-col lg:flex-row justify-between items-center lg:items-start">
            {/* All Recipe Cards */}
            <div className="card-section">
              <Recipes addToCookItems={addToCookItems}></Recipes>
            </div>
            {/* Preparing Table Section */}
            <div className="cook-table">
              <WantToCook cookItems={cookItems} deleteCookItem={deleteCookItem}></WantToCook>
            </div>
          </div>          
        </div>
      </div>      
    </>
  )
}

export default App
