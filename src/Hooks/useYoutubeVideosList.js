import { useEffect } from "react";
import { getYoutubeVideosByCategory } from "../utility/constant";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utility/videoslice";

const useYoutubeVideosList = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector(
    (store) => store.videos?.selectedCategoryId ?? "0",
  );

  useEffect(() => {
    const getVideso = async () => {
      try {
        const data = await fetch(getYoutubeVideosByCategory(categoryId));
        const json = await data.json();
        dispatch(addVideos(json.items));
        console.log(json.items);
      } catch (error) {
        // handle error here
        console.error(error);
      }
    };

    getVideso();
  }, [dispatch, categoryId]);
};

export default useYoutubeVideosList;
