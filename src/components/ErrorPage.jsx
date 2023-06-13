import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-300 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <h2 className="text-7xl font-bold text-cyan-600 mb-6">Oops!</h2>
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-4xl text-gray-600">
            <span className="sr-only">Error</span> {status || 404} Page Not
            Found
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
