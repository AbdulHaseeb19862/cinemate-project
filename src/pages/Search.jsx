import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import useTitle from "../hooks/useTitle";

export function Search({ apiPath }) {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm);

  const pageTitle = useTitle(`Search For ${queryTerm}`);

  return (
    <main>
      <section className="py-10">
        <p className="text-dark dark:text-white text-2xl">
          {movies.length === 0
            ? "Not Search Found"
            : `Search For "${queryTerm}"`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center flex-wrap gap-6 md:gap-12">
          {movies?.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
