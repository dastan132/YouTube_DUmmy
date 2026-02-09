import React from "react";
import { HUMBERGER_LOGO, YOUTUBE_LOGO } from "../utility/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utility/appSlice";
import { setSearchQuary } from "../utility/searchSlice";
import {
  hideSuggestionBox,
  showSuggestionBox,
} from "../utility/suggestionSlice";
import useSuggestions from "../Hooks/useSuggestions";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const searchQuery = useSelector((store) => store.search.searchQuery);

  const { suggestions, showSuggestions } = useSelector(
    (store) => store.suggestions,
  );

  useSuggestions(searchQuery);

  const handleChange = (e) => {
    dispatch(setSearchQuary(e.target.value));
  };

  return (
    <div className="grid grid-cols-12 items-center p-5 shadow-lg">
      <div className="col-span-2 flex items-center gap-4">
        <img
          onClick={() => dispatch(toggleMenu())}
          className="h-8 cursor-pointer"
          alt="menu"
          src={HUMBERGER_LOGO}
        />
        <Link to="/">
          <img className="h-8 cursor-pointer" alt="logo" src={YOUTUBE_LOGO} />
        </Link>
      </div>

      <div className="col-span-8 px-10 relative">
        <div>
          <input
            className="w-1/2 px-5 py-2 border border-gray-400 rounded-l-full outline-none"
            placeholder="Search"
            value={searchQuery}
            onChange={handleChange}
            onFocus={() => dispatch(showSuggestionBox())}
            onBlur={() =>
              setTimeout(() => {
                dispatch(hideSuggestionBox());
              }, 200)
            }
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100 hover:bg-gray-300">
            🔍
          </button>
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute bg-white px-2 w-[36rem] rounded-lg shadow-lg border">
            <ul>
              {suggestions.map((s, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-2 flex justify-end">
        <img
          className="h-8 cursor-pointer"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
