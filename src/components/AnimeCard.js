import React from "react";
import moment from "moment";
import Truncate from "react-truncate";

function AnimeCard({ anime }) {
  return (
    <div className="flex flex-wrap place-items-center">
      <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg  sm:w-full md:w-80 h-90 w-60   cursor-pointer m-auto">
        <a href="#" className="w-full block h-full">
          <img
            src={anime.images.jpg.large_image_url}
            alt={anime.title_english}
            className="max-h-30 w-full object-cover"
          />

          <div className="bg-white w-full p-4">
            <p className="text-indigo-500 text-2xl font-medium">
              {anime.title_english}
            </p>
            <p className="text-gray-800 text-sm font-medium mb-2">
              Episodes :{anime.episodes}
            </p>
            <p className="text-gray-600 font-light text-md">
              Status: {anime.status}
            </p>
            <p className="text-gray-600 font-light text-md">
              Rating: {anime.score}
            </p>
            <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs font-medium">
              <Truncate lines={5} ellipsis={<span>... </span>}>
                Description : {anime.synopsis}
              </Truncate>
            </div>
            <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
              {/* {Object.keys(anime.genres).map((genre, i) => (
                <span className="m-1 px-2 py-1 rounded bg-indigo-500" key={i}>
                  {genre.name}
                </span>
              ))} */}
              {/* {Object.keys(anime.genres).map((genre, i) => (
                <span className="m-1 px-2 py-1 rounded bg-indigo-500" key={i}>
                  {anime.genres[genre]}
                </span>
              ))} */}
              {anime.genres.map((genre, i) => (
                <span className="m-1 px-2 py-1 rounded bg-indigo-500" key={i}>
                  {genre.name}
                </span>
              ))}
            </div>
            <div className="flex items-center mt-2">
              <div className="pl-3">
                <div className="font-medium">
                  Start Date : {moment(anime.aired.from).calendar()}
                </div>
                <div className="text-gray-600 text-sm">
                  End Date : {moment(anime.aired.to).calendar()}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default AnimeCard;

// <ul>
// {animeList.map((item) => (
//   <li key={item.id}>
//     <img src={item.banner_image} alt="banner" />
//     <p>{item.titles.en}</p>
//     <p>{item.trailer_url}</p>
//     <p>{item.descriptions.en}</p>
//   </li>
// ))}
// </ul>
