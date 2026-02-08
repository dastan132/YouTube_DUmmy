import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utility/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="ml-16 p-4">
      <iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
