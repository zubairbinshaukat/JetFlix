import React from "react";

const MovieDetailPage = ({ params }) => {
  const { movieId } = params;
  return (
    <div className="w-full bg-zinc-200 h-screen flex items-center justify-center">
      <p className="text-5xl">Movie Detail Page {movieId}</p>
    </div>
  );
};

export default MovieDetailPage;
