import React, { useEffect, useState } from "react";
import { HUMBERGER_LOGO, YOUTUBE_LOGO, YOUTUBE_SEARCH_API } from "../utility/constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utility/appSlice";

 

const Header = () => {
  const [searchQuery, setSearchQueery] = useState("")
  useEffect(() => {
    const getSearchSuggestion = async () => {
      try {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json()
        console.log("search",json)
      } catch (error) {
        console.error("Error fetching search suggestions:", error);
      }
    };
   const timer = setTimeout(() => getSearchSuggestion(),200);
   return () => {
    clearTimeout(timer)
   }
  }, [searchQuery])
  const dispatch = useDispatch();
  const toggleMenuHandle = () => {
    dispatch((toggleMenu()));
  };
  return (
    <div className="grid grid-cols-12 items-center p-5 shadow-lg">
    
      <div className="col-span-2 flex items-center gap-4">
        <img
          onClick={() => toggleMenuHandle()}
          className="h-8 cursor-pointer"
          alt="Hamburger logo"
          src={HUMBERGER_LOGO}
        />
        <img
          className="h-8 cursor-pointer"
          alt="YouTube logo"
          src={YOUTUBE_LOGO}
        />
      </div>

      {/* Search Section */}
      <div className="col-span-8 flex justify-center">
      {}
        <input
          className="w-1/2 px-5 py-2 border border-gray-400 rounded-l-full outline-none"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQueery(e.target.value)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100 hover:bg-gray-300">
          🔍
        </button>
      </div>

      {/* User Icon */}
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
