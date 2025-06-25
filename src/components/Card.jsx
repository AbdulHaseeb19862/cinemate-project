import React from "react";
import { Link } from "react-router-dom";
import backup from "../assets/backup.webp";

const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  const image = `${
    poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : backup
  }`;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={image} alt="" />
      </Link>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview
            ? overview
            : "Film content encompasses the stories, characters, visuals, and overall artistic expression within a movie. It's the narrative, the visual style, and the emotional impact of a film that viewers experience. Film content can range from action-packed thrillers and heartwarming dramas to thought-provoking documentaries and experimental art films. "}
        </p>
      </div>
    </div>
  );
};

export default Card;
