import React from "react";

const SeriesDetailPage = ({ params }) => {
  const { seriesId } = params;
  return (
    <div className="w-full bg-zinc-200 h-screen flex items-center justify-center">
      <p className="text-5xl">Series Detail Page {seriesId}</p>
    </div>
  );
};

export default SeriesDetailPage;
