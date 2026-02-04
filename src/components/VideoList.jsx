import React from "react";
import { Link } from "react-router-dom";

const VideoList = ({ videos }) => {
  const formatViews = (views) => {
    if (views >= 1_000_000) return (views / 1_000_000).toFixed(1) + "M";
    if (views >= 1_000) return (views / 1_000).toFixed(1) + "K";
    return views;
  };

  if (!videos || videos.length === 0) {
    return <h2 className="text-center mt-10">Loading videos...</h2>;
  }

  return (
    <div className="grid grid-cols-5 gap-6 p-4 w-[100%]">
      {videos.map((video) => {
        const videoId =
          typeof video.id === "string" ? video.id : video.id?.videoId;
        return (
          <Link key={videoId} to={`/watch?v=${videoId}`}>
            <div className="cursor-pointer h-96 hover:bg-gray-200 shadow-lg rounded-lg">
              <img
                className="rounded-xl"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <h3 className="mt-2 p-2 font-semibold text-lg w-[100%]">
                {video.snippet.title}
              </h3>
              <p className=" p-2 text-gray-500 text-sm font-bold">
                {formatViews(Number(video.statistics.viewCount))} views
              </p>
              <p className="p-2 text-gray-700 text-sm font-bold">
                {video.snippet.channelTitle}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export const AdVideoCard = ({ video }) => {
  if (!video) return null;

  return (
    <div className="mb-6 p-4 border-2 border-red-500 rounded-xl bg-yellow-50 shadow-xl">
      <p className="text-red-600 font-bold mb-2">Sponsored</p>

      <Link
        to={`/watch?v=${typeof video.id === "string" ? video.id : video.id?.videoId}`}
      >
        <div className="flex gap-4 cursor-pointer">
          <img
            className="rounded-xl w-72"
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />

          <div>
            <h3 className="font-bold text-xl">{video.snippet.title}</h3>

            <p className="text-gray-600 mt-2 font-semibold">
              {video.snippet.channelTitle}
            </p>

            <p className="text-gray-500 mt-1">
              {video.statistics?.viewCount
                ? `${Number(video.statistics.viewCount).toLocaleString()} views`
                : "Promoted content"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoList;
