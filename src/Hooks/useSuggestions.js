import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utility/constant";
import { setCacheResults } from "../utility/searchSlice";
import { setSuggestions } from "../utility/suggestionSlice";

const useSuggestions = (searchQuery) => {
  const dispatch = useDispatch();

  const cacheResults = useSelector((store) => store.search.cacheResults);

  const normalizedQuery = searchQuery.toLowerCase().trim();

  useEffect(() => {
    if (!normalizedQuery) {
      dispatch(setSuggestions([]));
      return;
    }

    const timer = setTimeout(() => {
      if (cacheResults[normalizedQuery]) {
        dispatch(setSuggestions(cacheResults[normalizedQuery]));
        return;
      }

      const fetchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + normalizedQuery);
        const json = await data.json();
        console.log("search", json);
        dispatch(setSuggestions(json[1]));

        dispatch(
          setCacheResults({
            [normalizedQuery]: json[1],
          }),
        );
      };

      fetchSuggestions();
    }, 200);

    return () => clearTimeout(timer);
  }, [normalizedQuery, cacheResults, dispatch]);
};

export default useSuggestions;
