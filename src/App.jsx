import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import RecipesHeading from './Components/RecipesHeading/RecipesHeading'
import Recipes from './Components/Recipes/Recipes'
import Cooking from './Components/Cooking/Cooking'
import { toast, ToastContainer } from 'react-toastify'

function App() {

  const [cook, setCook] = useState([]);
  const [prepare, setPrepare] = useState([]);
  // const [prepareCart, setPrepareCart] = useState([]);

  const handleCook = (recipe) => {
    setCook([...cook, recipe]);
    const cooking = [...prepare, cook];
    const isCook = prepare.find((rec) => (rec?.recipe_id === cook?.recipe_id));
    if (!isCook) {
      setCook(cooking);
      return toast.success('Your order is Successfully added');
    }
    else {
      return toast.warn('Order already Given');
    }
  }

  const handlePreparing = (recipe) => {
    const remaining = cook.find(item => item.recipe_id !== recipe.recipe_id);
    setCook([remaining]);
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
      <ToastContainer />
    </div>
  )
}

export default App
