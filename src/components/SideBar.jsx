import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setCategoryId } from "../utility/videoslice";

const mainlinks = [
  { name: "Home", path: "/", id: "0" },
  { name: "Games", path: "/game", id: "20" },
  { name: "Sports", path: "/sports", id: "17" },
  { name: "Music", path: "/music", id: "10" },
  { name: "Movies", path: "/movies", id: "1" },
];

const subscriptions = ["Music", "Sports", "Gaming", "Movies"];
const watchLater = ["Music", "Sports", "Gaming", "Movies"];

const SideBar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store?.app?.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        {mainlinks.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              end={item.path === "/"} 
              onClick={() => dispatch(setCategoryId(item.id))}
              className={({ isActive }) =>
                [
                  "flex items-center p-3 rounded-lg transition duration-150",
                  isActive
                    ? "bg-gray-400 text-white font-semibold"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white",
                ].join(" ")
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <h1 className="pb-4 pt-5 font-bold text-lg">Subscriptions</h1>
      <ul>
        {subscriptions.map((item) => (
          <li
            key={item}
            className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
          >
            {item}
          </li>
        ))}
      </ul>
      <h1 className=" pb-4 font-bold pt-5 text-lg">Watch Later</h1>
      <ul>
        {watchLater.map((item) => (
          <li
            key={item}
            className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
