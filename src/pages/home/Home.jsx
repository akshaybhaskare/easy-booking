import React from "react";
import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import './home.css';
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";

const Home = () => {
  return( 
 <div>
   <Navbar/>
   <Header/>
   <div className="homeContainer">
     <Featured/>
     <h1 className="homeTitle">Browse by property type</h1>
     <PropertyList/>
     <h1 className="homeTitle">Home guest love</h1>
     <FeaturedProperties/>
   </div>
   </div>
  );
};

export default Home;
