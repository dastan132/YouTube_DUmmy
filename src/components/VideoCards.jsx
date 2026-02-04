import React from "react";
import VideoList, { AdVideoCard } from "./VideoList";
import useYoutubeVideosList from "../Hooks/useYoutubeVideosList";
import { useSelector } from "react-redux";

const VideoCards = () => {
  useYoutubeVideosList();

  const videos = useSelector((store) => store.videos.videoList);

  return (
    <div>
      <AdVideoCard video={videos[1]} />

      <VideoList videos={videos} />
    </div>
  );
};

export default VideoCards;
