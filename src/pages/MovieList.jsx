import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import { useEffect } from "react";
import useTitle from "../hooks/useTitle";

export function MovieList({ apiPath, title }) {
  const { data: movies } = useFetch(apiPath);
  const pageTitle = useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7  ">
        <div className="flex justify-center  flex-wrap gap-6 md:gap-12">
          {movies?.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </main>
  );
}
