import React from "react";
import Banner from "../../components/Banner/Banner";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
<<<<<<< HEAD
=======
import Alertas from "../../components/home/alertas/alertas";
>>>>>>> nueva-rama

const Home = () => {
  return (
    
    <div className="w-full mx-auto">
      <Banner />
      <div className="max-w-container mx-auto px-4">
        <NewArrivals />
        <Sale />
<<<<<<< HEAD
=======
        <Alertas/>
>>>>>>> nueva-rama
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Home;
