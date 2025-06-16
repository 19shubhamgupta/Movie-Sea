import React, { useEffect, useState } from "react";
import { useDebounce } from 'use-debounce';
import Card from "./Componenets/Card";

const App = () => {
  const [MovieList, setMovieList] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchMovie, 500);

  const API_KEY = import.meta.env.VITE_TMDB_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const fetchMovie = async (query = '') => {
    try {
      const endpoint = query
        ? `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);
      const data = await response.json();
      console.log(data.results);
      setMovieList(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchMovie(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className="bg-[url('/BG.png')] bg-cover  bg-no-repeat bg-center min-h-screen flex flex-col gap-0">
      <div className="flex justify-center items-center -mt-3">
        <img src="/hero-img.png" alt="Hero" className="m-0 p-0" />
      </div>
      <div className=" flex justify-center items-center flex-col -mt-12">
        <div className="text-3xl text-white md:text-5xl font-medium">Find Movie You'll</div>
        <div className="text-3xl text-white md:text-5xl font-medium">
          Love Without the Hassle
        </div>
      </div>
      <div className="mt-4 flex justify-center items-center md:mt-7">
        <div className="flex items-center bg-slate-700 md:w-96 h-12 px-4 rounded-xl space-x-3">
          <img src="/search.svg" className="w-5 h-5" alt="search icon" />
          <input
            type="search"
            name="moviesearch"
            value = {searchMovie}
            id="msid"
            className="bg-transparent outline-none text-white placeholder:text-gray-300 w-full"
            placeholder="Search for the movie"
            onChange={(e) => setSearchMovie(e.target.value)}
          />
        </div>
      </div>
      <div className="text-white text-2xl font-medium ml-10 mt-4">All Movie</div>
      <div className="flex flex-wrap justify-evenly ">
        {MovieList.map((movie) => (
          <Card key={movie.id} movie={movie}></Card>
        ))}
      </div>
    </div>
  );
};

export default App;
