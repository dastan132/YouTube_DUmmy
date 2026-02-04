
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const mainlinks = [
  { name: "Home", path: "/" },
  { name: "Demo", path: "/demo" },
  { name: "Shorts", path: "/shorts" },
  { name: "Videos", path: "/videos" },
  { name: "Live", path: "/live" },
];

const subscriptions = ["Music", "Sports", "Gaming", "Movies"];
const watchLater = ["Music", "Sports", "Gaming", "Movies"];

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store?.app?.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        {mainlinks.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded cursor-pointer ${
                  isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
                }`
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
        <li key={item} className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100">
          {item}
        </li>
      ))}
      </ul>
      <h1 className=" pb-4 font-bold pt-5 text-lg">Watch Later</h1>
       <ul>
      {watchLater.map((item) => (
        <li key={item} className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100">
          {item}
        </li>
      ))}
      </ul>
    </div>
  );
};

export default SideBar;
