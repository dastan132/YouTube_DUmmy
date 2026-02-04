import { useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../utility/constant";
import { useDispatch } from "react-redux";
import { addVideos } from "../utility/videoslice";

const useYoutubeVideosList = () =>{
      const dispatch = useDispatch()
    useEffect(() => {
    const getVideso = async () =>{
        try {
            const data = await fetch(YOUTUBE_VIDEO_API)
            const json = await data.json()
            dispatch(addVideos(json.items))
            console.log(json.items)
        } catch (error) {
            // handle error here
            console.error(error);
        }
    }

    getVideso()

}, [dispatch])

}


export default useYoutubeVideosList