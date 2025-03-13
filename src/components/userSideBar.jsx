import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const UserSideBar = () => {
  return (
    <aside className="bg-primary-t text-dark d-flex flex-column justify-content-center align-items-center p-3">
      <img
        width={"100px"}
        height={"100px"}
        className="rounded-circle m-3"
        src="https://cdn3.iconfinder.com/data/icons/user-group-black/100/user-upload-512.png"
        alt="User Profile"
      />
      <Profile />

      <br />

      <Link to="/user/campaign" className="text-black fw-semibold" style={{ textDecoration: "none" }}>
        Campaign
      </Link>
      <br />
      <Link to="/user/lead" className="text-black fw-semibold" style={{ textDecoration: "none" }}>
        Lead
      </Link>
      {/* <Link to="/lead" className="text-black fw-semibold" style={{ textDecoration: "none" }}>
        Lead
      </Link>  */}
      <br />
      <Link to="/user/followup" className="text-black fw-semibold" style={{ textDecoration: "none" }}>
        Follow-up
      </Link>
      <br />
      <Link to="/user/customer" className="text-black fw-semibold" style={{ textDecoration: "none" }}>
        Customer
      </Link>
    </aside>
  );
};

export default UserSideBar;
