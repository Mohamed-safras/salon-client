import { Avatar, Card, Chip } from "@mui/material";
import React from "react";
import winter from "../../assets/3d-winter.jpg";
import backgroundImage from "../../assets/salonback.jpg";
import BarberShops from "../../components/BarberShop";
import {
  default as BarChart,
  default as Chart,
} from "../../components/Chart/BarChart";
import DateRangeCalendarValue from "../../components/MaterialUIComponent/Calender";
import NavBar from "../../components/NavBar/NavBar";
import Profile from "../../components/Profile/Profile";
import Popular, { CustomChip } from "../../components/SalonPopular/Popular";
import { colors } from "../../styles/colors";
import {
  Appoinment,
  DateTimePicker,
  HomeContainer,
  HomeLeft,
  HomeRight,
  Overview,
  OverviewCard,
  ShopBackground,
  SocialOverview,
  Statistics,
} from "./home.style";
const Index = ({ isOpen, toggleSideBar }) => {
  return (
    <HomeContainer>
      <HomeLeft>
        <NavBar isOpen={isOpen} toggleSideBar={toggleSideBar} />
        <Statistics>
          <Popular />
          <SocialOverview>
            <Chart />
            <Overview>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    padding: "5px",
                    margin: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                    src={backgroundImage}
                    alt=""
                  />
                </div>
                <h5 style={{ margin: "10px" }}>Mohamed Safras</h5>
              </div>

              <OverviewCard>
                <Card
                  style={{
                    backgroundImage: `url(${winter})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "130px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CustomChip
                    style={{
                      color: colors.colorOrange,
                      background: colors.colorWhite,
                    }}
                    label="Best Barberman"
                  />
                </Card>
              </OverviewCard>
            </Overview>
          </SocialOverview>
        </Statistics>
        <Appoinment>
          <DateTimePicker>
            <span style={{ fontSize: "14px", fontWeight: "700" }}>
              Make Appoinment
            </span>
            <DateRangeCalendarValue />
          </DateTimePicker>

          <BarberShops />
        </Appoinment>
      </HomeLeft>
      <HomeRight>
        <ShopBackground
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></ShopBackground>
      </HomeRight>
    </HomeContainer>
  );
};

export default Index;
