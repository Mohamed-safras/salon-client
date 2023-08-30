import { Button } from "@mui/material";

import RemoveIcon from "@mui/icons-material/Remove";
import StarIcon from "@mui/icons-material/Star";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/BarberShop/BarbershopCard";
import {
  CardFlex,
  Ratings,
  BarberShopAddress as ServiceDescription,
  BarberShopName as ServiceName,
  Tag,
  Tags,
} from "../../components/BarberShop/barbershop.card.styles";
import DateTimePicker from "../../components/MaterialUIComponent/TimeControll";
import NavBar from "../../components/NavBar/NavBar";
import { useServiceStylist } from "../../hooks/BarberShop/getStylist";
import { currentCart } from "../../selectors/cart.selector";
import { colors } from "../../styles/colors";
import {
  AboutHeading,
  BarberContainer,
  FloatingButton,
} from "../BarberShop/barber.styles";
import { BarberShopService, DateTimeWrapper, Stylist } from "../services";
const BookService = () => {
  const dispatch = useDispatch();
  const [stylist, setStylist] = useState([]);
  const cartItems = useSelector(currentCart);

  useEffect(() => {
    setStylist(cartItems.map((item) => item.specialists));
  }, []);

  return (
    <>
      <NavBar />
      <BookServiceWrapper>
        <AboutHeading>Your Service Order</AboutHeading>
        <BookServiceContainer>
          {cartItems?.map(
            ({ serviceTitle, description, serviceType, serviceImages }) => (
              <Card img={serviceImages.length > 0 && serviceImages[0].src}>
                <ServiceName>{serviceTitle?.toUpperCase().trim()}</ServiceName>
                <ServiceDescription>
                  {description?.length > 50
                    ? `${description.slice(0, 50)}...`
                    : description}
                </ServiceDescription>
                <CardFlex>
                  <Tags>
                    <Tag>{serviceType}</Tag>
                  </Tags>
                  <Ratings>
                    <StarIcon
                      fontSize="14px"
                      sx={{ color: colors.colorOrange }}
                    />
                    <span>4.7(2.7k)</span>
                  </Ratings>
                  <FloatingButton>
                    <RemoveIcon
                      fontSize="16px"
                      sx={{ color: colors.colorWhite }}
                    />
                  </FloatingButton>
                </CardFlex>
              </Card>
            )
          )}
        </BookServiceContainer>
        <Stylist
          stylist={stylist}
          // setSelectedStylist={setSelectedStylist}
          // selectedStylist={selectedStylist}
        />
        <DateTimeWrapper>
          <DateTimePicker label={"Pick a Date & Time"} />
        </DateTimeWrapper>
        <Button
          style={{
            display: "block",
            margin: "0 20px",
            border: `2px solid ${colors.colorOrange}`,
            color: colors.colorOrange,
          }}
          variant="outlined"
        >
          Book an Appoinment
        </Button>
      </BookServiceWrapper>
    </>
  );
};

export default BookService;

export const BookServiceWrapper = styled.div`
  max-width: 800px;
  margin: 10px auto;
  border: 2px solid ${colors.colorOrange};
  padding: 10px;
`;
export const BookServiceContainer = styled(BarberContainer)`
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 0;
`;

export const BookServiceHeading = styled(AboutHeading)``;
