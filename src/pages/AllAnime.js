import React, { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";

const AllAnime = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getAllAnime = async () => {
      try {
        const res = await fetch(
          ` https://api.jikan.moe/v4/anime/
          `
        );
        const result = await res.json();
        // setAnimeList(result.data.documents);
        setAnimeList(result.data);
        setLoading(false);
        // console.log(result);
      } catch (error) {
        setError(error);
        console.error("Error:", error);
      }
    };

    getAllAnime();
    console.log(animeList);
    setLoading(true);
  }, []);

  if (loading) {
    return <p>Anime is loading...</p>;
  }

  if (error || !Array.isArray(animeList)) {
    return <p>There was an error loading your data!</p>;
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3 md:gap-5 p-5">
          {animeList
            .filter((data) => data.type === "TV")
            .sort((data) => data.popularity)
            .map((anime, i) => (
              <AnimeCard
                anime={anime}
                key={i}
                className="mx-10 object-cover h-40"
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default AllAnime;
