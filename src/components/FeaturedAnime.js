import React, { useState, useEffect } from "react";

const FeaturedAnime = () => {
  const [getFeatured, setFeatured] = useState([]);

  const getFeaturedAnime = async () => {
    try {
      const res = await fetch("https://api.jikan.moe/v4/anime/38000");
      const result = await res.json();

      setFeatured(result.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    getFeaturedAnime();
  }, []);

  return (
    <div className="text-white py-10">
      <p>Title: {getFeatured.title}</p>
      <p>Status: {getFeatured.status}</p>
      <p>Episodes: {getFeatured.episodes}</p>
      <p>Year: {getFeatured.year}</p>
      <p>Synopsis: {getFeatured.synopsis}</p>
    </div>
  );
};

export default FeaturedAnime;
