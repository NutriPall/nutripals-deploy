import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "@pages/AboutUs/About-us";
import "./style/App.css";
import RecipeList from '@pages/RecipeList';
import RecipeDetails from '@components/RecipeDetails/RecipeDetails';
import ContactUs from "@pages/ContactUs/ContactUs";
import Footer from "@components/Footer/Footer";
import BurgerMenu from "@components/BurgerMenu/BurguerMenu";
import HomePage from "@components/HomePage/HomePage";
import SignUp from "@pages/SignUp/SignUp";

function App() {

  return (
    <>
    <div>
          <BurgerMenu />
          <div className="routes">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/recipes-list" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
          </div>
          <Footer />
    </div>
    </>
  );
}

export default App;
