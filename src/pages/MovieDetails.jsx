import React, { useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import { useParams } from "react-router-dom";
import backup from "../assets/backup.webp";

export function MovieDetails() {
  const [movie, setMovie] = useState({});
  const pageTitle = useTitle(movie.title);
  const params = useParams();
  console.log("The Id", params);
  const image = `${
    movie.poster_path
      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      : backup
  }`;
  useEffect(() => {
    async function movieDetail() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=2ef61208df2b9e71e5f889e34a4dc7de`
      );
      const json = await response.json();
      setMovie(json);
    }
    movieDetail();
  }, []);

  return (
    <main>
      <section className="flex justify-around flex-wrap  py-5">
        <div className="max-w-sm">
          <img src={image} alt="" />
        </div>
        <div className="max-w-2xl text-gray-900 dark:text-white flex flex-col gap-7 mt-4">
          <h2 className="text-4xl font-bold">{movie.original_title}</h2>
          <p>{movie.overview}</p>

          {movie.genres ? (
            <p className="flex flex-wrap gap-3 py-5">
              {movie.genres.map((genres) => (
                <span className="w-auto px-4 py-3 font-semibold border border-gray-700 flex justify-center items-center rounded-md">
                  {genres.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
              {movie.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400" />
            <a
              href="#"
              className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
            >
              {movie.vote_count} reviews
            </a>
          </div>
          <div className="flex gap-4 text-lg font-bold">
            <p>Runtime:</p>
            <p>{movie.runtime}</p>
          </div>
          <div className="flex gap-4 text-lg font-bold">
            <p>Budget:</p>
            <p>{movie.budget}</p>
          </div>
          <div className="flex gap-4 text-lg font-bold">
            <p>Revenue:</p>
            <p>{movie.revenue}</p>
          </div>
          <div className="flex gap-4 text-lg font-bold">
            <p>Release Date:</p>
            <p>{movie.release_date}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
