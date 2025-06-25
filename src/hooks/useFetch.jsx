import React, { useEffect, useState } from "react";

function useFetch(apiPath, queryTerm = "") {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/${apiPath}?api_key=2ef61208df2b9e71e5f889e34a4dc7de&query=${queryTerm}`
      );
      const json = await response.json();
      setData(json.results);
    }
    fetchMovie(); 
  }, [apiPath, queryTerm]); // 🔁 add queryTerm here

  return { data };
}

export default useFetch;
