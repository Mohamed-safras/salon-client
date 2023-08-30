import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Badge, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetUser } from "../../hooks/user.get";
import { currentUser } from "../../selectors/user.selector";
import { colors } from "../../styles/colors";
import Profile from "../Profile/Profile";
import { UserName } from "../Profile/Profile.styles";
import {
  // Image,
  MenuWrapper,
  Nav,
  NavContainer,
  ProfileWrapper,
  SearchContainer,
  TextField,
} from "./NavBar.styles";

const CustomBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    backgroundColor: "#ff5722", // Customize badge background color
    color: "white", // Customize badge text color
  },
});

const NavBar = ({ toggleSideBar }) => {
  // const user = useSelector(currentUser);
  const { getUser, user } = useGetUser();

  useEffect(() => {
    getUser();
  }, []);
  // const { LogOut } = useLogOut();
  return (
    <NavContainer>
      <MenuWrapper onClick={toggleSideBar}>
        <IconButton>
          <MenuIcon sx={{ fontSize: 28 }} />
        </IconButton>
      </MenuWrapper>
      <Profile>
        {user && <UserName>Hi, {user?.username || "safras"}</UserName>}
        <span>Beauty is everyone's right</span>
      </Profile>
      <Nav>
        <SearchContainer>
          <SearchIcon
            style={{ color: colors.colorOrange, marginRight: "10px" }}
          />
          <TextField type="text" placeholder="Search anything..." />
        </SearchContainer>
        <Link to="/bookservice">
          <CustomBadge style={{ margin: "0 10px" }} badgeContent={4}>
            <ShoppingCartCheckoutIcon style={{ color: colors.colorGrayDark }} />
          </CustomBadge>
        </Link>
      </Nav>
    </NavContainer>
  );
};

export default NavBar;
