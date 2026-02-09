import React from "react";
import VideoList, { AdVideoCard } from "./VideoList";
import useYoutubeVideosList from "../Hooks/useYoutubeVideosList";
import { useSelector } from "react-redux";


const VideoCards = () => {
  useYoutubeVideosList();

  const videos = useSelector((store) => store.videos.videoList);

  if (!videos || videos.length === 0) {
    return <h2 className="text-center mt-10">Loading videos...</h2>;
  }

  return (
    <div>
      {videos.length > 1 && <AdVideoCard video={videos[1]} />}
      <VideoList videos={videos} />
    </div>
  );
};

export default VideoCards;
