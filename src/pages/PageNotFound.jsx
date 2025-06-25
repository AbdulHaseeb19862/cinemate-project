import React, { useEffect } from "react";
import pageNotFound from "../assets/notFound.jpg";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

export function PageNotFound() {
  const pageTitle = useTitle("Page Not Found");
  return (
    <main className="w-full flex justify-center items-center">
      <section className="w-full flex flex-col justify-center items-center gap-10 py-10 pb-10">
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white">
            404, Oops!
          </h2>
          <div className="max-w-lg">
            <img
              src={pageNotFound}
              className="w-96 rounded shadow-2xl shadow-gray-500"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <Link to="/">
            <Button />
          </Link>
        </div>
      </section>
    </main>
  );
}
