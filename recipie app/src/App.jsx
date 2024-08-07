import React from 'react';
import OmeletteRecipe from './Component/OmeletteRecipe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<OmeletteRecipe/>}/>
    </Routes>

    </BrowserRouter>
  );
};

export default App;