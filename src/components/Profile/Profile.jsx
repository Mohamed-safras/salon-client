import React, { Children } from "react";

import {
  Email,
  ProfileContainer,
  UserDetails,
  UserName,
} from "./Profile.styles";

import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

// import useLogOut from "../../hooks/user.logout";
import { currentUser } from "../../selectors/user.selector";
import { colors } from "../../styles/colors";
const Profile = ({ children }) => {
  // const user = useSelector(currentUser);
  const user = "a";
  // const { LogOut } = useLogOut();
  return (
    <ProfileContainer>
      <Avatar
        sx={{
          width: 35,
          height: 35,
          padding: "5px",
        }}
        src={user?.avatar}
      />

      <UserDetails>{children}</UserDetails>
    </ProfileContainer>
  );
};

export default Profile;
