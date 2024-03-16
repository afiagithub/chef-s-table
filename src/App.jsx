import './App.css'
import Banner from './Components/Header/Banner/Banner'
import Navbar from './Components/Header/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>

        <div className='recipes-section mt-10 lg:mt-20'>
          <div className="recipe-heading mb-7">
            <h1 className='font-semibold text-4xl text-center mb-6'>Our Recipes</h1>
            <p className='w-5/6 lg:w-3/5 mx-auto text-center text-[#150b2bb3] leading-relaxed'>Lorem ipsum dolor sit amet 
            consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur 
            elementum mauris aenean neque. </p>
          </div>
          <div className="recipe-content">
            <Recipes></Recipes>
          </div>          
        </div>
      </div>      
    </>
  )
}

export default App
