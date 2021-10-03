import React, { useEffect, useState } from "react";
import AnimeCard from "./components/AnimeCard";
const Body = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const getAnime = async () => {
    try {
      const res = await fetch(`https://api.aniapi.com/v1/anime/`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      setAnimeList(result.data.documents);
      setLoading(false);
      // console.log(result.data.documents);
    } catch (error) {
      setError(error);
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    getAnime();
    // console.log(animeList);
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
      <div class="container mx-auto">
        <div class="grid grid-cols-4 p-10 ">
          {animeList
            .filter((data) => data.format === 0)
            .sort((data) => data.score)
            .map((anime) => (
              <AnimeCard
                anime={anime}
                key={anime.id}
                className="mx-10 object-cover h-48"
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Body;
