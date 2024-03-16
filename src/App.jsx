import { useState } from 'react'
import './App.css'
import WantToCook from './Components/CookItem/WantToCook'
import Banner from './Components/Header/Banner/Banner'
import Navbar from './Components/Header/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'

function App() {
  const [cookItems, setCookItems] = useState([]);

  const addToCookItems = (item) =>{
    const isExist = cookItems.find(cookItem => cookItem.recipe_id === item.recipe_id);
    if(!isExist){
      setCookItems([...cookItems, item]);
    }
    else{
      alert("Already Exists");
    }    
  }

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>

        {/* Recipe Section */}
        <div className='recipes-section mt-10 lg:mt-20 mx-5 lg:mx-20 pb-5 lg:pb-8'>
          {/* Recipe Section Heading */}
          <div className="recipe-heading mb-7">
            <h1 className='font-semibold text-4xl text-center mb-6'>Our Recipes</h1>
            <p className='w-5/6 lg:w-3/5 mx-auto text-center text-[#150b2bb3] leading-relaxed'>Lorem ipsum dolor sit amet 
            consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur 
            elementum mauris aenean neque. </p>
          </div>
          {/* Recipe Section Content */}
          <div className="recipe-content flex flex-col lg:flex-row justify-between items-center lg:items-start">
            {/* All Recipe Cards */}
            <div className="card-section">
              <Recipes addToCookItems={addToCookItems}></Recipes>
            </div>
            {/* Preparing Table Section */}
            <div className="cook-table">
              <WantToCook cookItems={cookItems}></WantToCook>
            </div>
          </div>          
        </div>
      </div>      
    </>
  )
}

export default App
