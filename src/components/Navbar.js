import React from "react";
import user_profile from "../images/profile.png";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li class="nav-item">
          <a class="nav-link" href="#trips">
            Trips
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#recentlyViewed">
            Recently viewed
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#bookings">
            Bookings
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#profil">
            <img
              src={user_profile}
              alt="user profile"
              className="user_progile"
            />
          </a>
        </li>
      </ul>
      <div className="container">
        <hr />
      </div>
    </div>
  );
};

export default Navbar;
