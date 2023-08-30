import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import SaloonLogo from "../../assets/logo.webp";
// import useLogOut from "../../hooks/user.logout";
import Profile from "../Profile/Profile";

import { commonNames } from "../../common/common.names";
import useLogOut from "../../hooks/user.logout";
import {
  Container,
  LogOutWrapper,
  LogoContainer,
  ProfileWrapper,
  SideBarItemWrapper,
  SidebarBottomWrapper,
} from "./SideBar.styles";
import SideBarItems from "./SideBarItems";
const SideBar = ({ isOpen, toggleSideBar }) => {
  const { LogOut } = useLogOut();

  return (
    <Container isOpen={isOpen}>
      <LogoContainer>
        <Avatar sx={{ width: 35, height: 35 }} src={SaloonLogo} />
        <h3>{commonNames.SALOON_NAME}</h3>
      </LogoContainer>

      <SideBarItemWrapper>
        <SideBarItems
          to={"/"}
          Icon={<DashboardOutlinedIcon />}
          title={"Home"}
        />

        <SideBarItems
          to={"settings"}
          title={"Settings"}
          Icon={<SettingsIcon />}
        />
      </SideBarItemWrapper>
      <SidebarBottomWrapper>
        <LogOutWrapper>
          <IconButton onClick={LogOut}>
            <LogoutIcon sx={{ fontSize: 26, color: "#344154" }} />
          </IconButton>
        </LogOutWrapper>
      </SidebarBottomWrapper>
    </Container>
  );
};

export default SideBar;
