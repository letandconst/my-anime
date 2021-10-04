import React, { useState, useEffect } from "react";

const FeaturedAnime = () => {
  const [getFeatured, setFeatured] = useState([]);
  const [getCharacters, setCharacters] = useState([]);

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
    console.log(getFeatured);
  }, []);

  const getCharactersList = async () => {
    try {
      const res = await fetch(
        "https://api.jikan.moe/v4/anime/38000/characters"
      );
      const result = await res.json();

      setCharacters(result.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    getCharactersList();
  }, []);

  return (
    <>
      <div className="bg-white rounded-lg shadow-2xl md:flex backdrop-filter backdrop-opacity-80 bg-opacity-50">
        <img
          src="https://cdn.myanimelist.net/images/anime/1286/99889l.jpg" //getFeatured.images.jpg.large_image_url
          alt={getFeatured.title}
          className="rounded-t-lg 
       md:w-1/3 md:rounded-l-lg md:rounded-t-none"
        />

        <div className="p-6 ">
          <h2 className="mb-2 font-bold text:xl md:text-2xl text-orange-700">
            {getFeatured.title}
          </h2>
          {/* <p className="py-1">
            {getFeatured.genres.map((genre, i) => (
              <span className="m-1 px-2 py-1 rounded bg-indigo-500" key={i}>
                {genre.name}
              </span>
            ))}
          </p> */}
          <p>Status: {getFeatured.status}</p>
          <p>Episodes: {getFeatured.episodes}</p>
          <p>Year: {getFeatured.year}</p>
          <p className="mb-5">Synopsis: {getFeatured.synopsis}</p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            More Details
          </button>
          <div className="space-x-4">
            <h2 className="py-5 font-bold text:xl md:text-2xl text-orange-700">
              Main Characters:
            </h2>
            {getCharacters
              .filter((data) => data.role === "Main")
              .sort((data) => data.name)
              .reverse()
              .map((data, i) => (
                <div className="inline-block my-5">
                  <div class="has-tooltip">
                    {data.voice_actors
                      .filter((data) => data.language === "Japanese")
                      .map((data, i) => (
                        <span class="tooltip rounded shadow-lg p-1 bg-gray-100  -mt-8">
                          <img
                            src={data.person.images.jpg.image_url}
                            alt={data.person.name}
                            width="155"
                            height="100"
                          />
                        </span>
                      ))}
                    <div key={i}>
                      <img
                        src={data.character.images.jpg.image_url}
                        alt={data.character.name}
                        className="h-48 w-40 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-5"
                      />
                    </div>
                  </div>

                  <p className="font-extrabold text-black ml-2">
                    {data.character.name}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedAnime;
