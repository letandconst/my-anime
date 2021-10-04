import React from "react";

import FeaturedAnime from "../components/FeaturedAnime";
const Home = () => {
  return (
    <div className="bg-featured-anime m-0 bg-cover bg-center py-20">
      <div className="container mx-auto">
        <FeaturedAnime />
      </div>
    </div>
  );
};

export default Home;
