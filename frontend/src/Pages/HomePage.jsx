import React from "react";
import Header from "../Components/Layout/Header";
import Hero from "../Components/Route/Hero/Hero";
import Categories from "../Components/Route/Categories/Categories";
import BestDeals from "../Components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../Components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../Components/Events/Events";
import Sponsored from "../Components/Route/Sponsored";
import Footer from "../Components/Route/Footer";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default HomePage;
