import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  
  if(!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <Link to='/'><li >Home </li></Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Like</li>
      </ul>
      <h1 className="font-bold py-2">Subscriptions</h1>
      <ul>
        <li>Music </li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold py-5">Watch Later</h1>
      <ul>
        <li>Music </li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      Sidebar
    </div>
  );
};

export default Sidebar;
