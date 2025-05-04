import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";
import VendorProfile from "./VendorProfile";

const Profile = () => {
  const state = useSelector((state) => state);
  const userRole = state?.auth?.role;

  return userRole == "user" ? <UserProfile /> : <VendorProfile />;
};

export default Profile;
