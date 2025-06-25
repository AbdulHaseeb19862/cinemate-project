import React, { useEffect } from "react";

function useTitle(title) {
  useEffect(() => {
    document.title = `${title} /cinemate`;
  }, [title]);
  return null;
}

export default useTitle;
