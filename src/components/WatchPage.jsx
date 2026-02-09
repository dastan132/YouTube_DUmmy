import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utility/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import ChatBox from "./ChatBox";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="ml-16 flex flex-col w-full">
      <div className=" px-4 flex w-full">
        <div className=" w-full max-w-[1200px]">
          <iframe
            width="1200"
            height="600"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute`}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" border bg-gray-100 w-full ">
          <ChatBox />
        </div>
      </div>

      <CommentContainer />
    </div>
  );
};

export default WatchPage;
