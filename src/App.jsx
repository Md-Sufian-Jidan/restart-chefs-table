import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import RecipesHeading from './Components/RecipesHeading/RecipesHeading'
import Recipes from './Components/Recipes/Recipes'
import Cooking from './Components/Cooking/Cooking'

function App() {

  const [cook, setCook] = useState([]);
  const [prepare, setPrepare] = useState([]);

  const handleCook = (recipe) => {
    setCook([...cook, recipe]);
  }

  const handlePreparing = (recipe) => {
    const remaining = cook.find(item => item.recipe_id !== recipe.recipe_id);
    setCook(remaining);
    setPrepare([...prepare, recipe]);
  };

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <Banner></Banner>
      <RecipesHeading></RecipesHeading>
      <div className='lg:flex justify-center gap-5 my-12'>
        <Recipes handleCook={handleCook}></Recipes>
        <Cooking cook={cook} handlePreparing={handlePreparing} prepare={prepare}></Cooking>
      </div>
    </div>
  )
}

export default App
