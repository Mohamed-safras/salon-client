import { Alert, Button, TextField } from "@mui/material";
import React from "react";

import SaloonLogo from "../../assets/logo.webp";
// import Banners from "../../components/Banner/Banners";
import useInputHandler from "../../hooks/InputHandler";
import useAuthHandler from "../../hooks/user.auth";

import { Link } from "react-router-dom";
import { BarberShopAddress } from "../../components/BarberShop/barbershop.card.styles";
import { colors } from "../../styles/colors";
import { bannerdata } from "./Banner";
import {
  BannerContainer,
  Container,
  Form,
  FormContainer,
  Logo,
} from "./auth.styles";

export const InitialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  address: "",
};

const Register = () => {
  const { handleInput, formInput } = useInputHandler(InitialState);
  const { register, error, loading, setError } = useAuthHandler(formInput);

  return (
    <Container>
      {/* <BannerContainer>
        <Banners banners={bannerdata} />
      </BannerContainer> */}
      <FormContainer>
        <h3>Get Started Now</h3>
        <Logo style={{ margin: 10 }} height={150} width={150}>
          <img src={SaloonLogo} alt="logo" />
        </Logo>
        {error && (
          <Alert
            onClose={() => setError("")}
            sx={{ margin: "10px", width: "100%" }}
            severity="error"
          >
            {error}
          </Alert>
        )}
        <Form onSubmit={register}>
          <TextField
            fullWidth
            type="text"
            size="small"
            label="User Name"
            name="username"
            onChange={handleInput}
            value={formInput.username}
          />
          <TextField
            fullWidth
            type="email"
            size="small"
            label="Email"
            name="email"
            onChange={handleInput}
            value={formInput.email}
          />
          <TextField
            fullWidth
            size="small"
            type="password"
            label="Password"
            name="password"
            onChange={handleInput}
            value={formInput.password}
          />
          <TextField
            fullWidth
            type="password"
            size="small"
            label="Confirm Password"
            name="confirmPassword"
            onChange={handleInput}
            value={formInput.confirmPassword}
          />
          <TextField
            fullWidth
            size="small"
            label="Phone Number"
            type="text"
            name="phone"
            onChange={handleInput}
            value={formInput.phone}
          />
          <TextField
            fullWidth
            size="small"
            label="Addreess"
            type="text"
            name="address"
            onChange={handleInput}
            value={formInput.address}
          />

          <Button
            sx={{ background: `${colors.colorBlack}` }}
            variant="contained"
            type="submit"
          >
            {loading ? "Loading..." : "CREATE ACCOUNT"}
          </Button>
        </Form>
        <BarberShopAddress style={{ margin: "10px" }}>
          Already have an account?{" "}
          <Link style={{ color: colors.colorOrange }} to="/login">
            Sign in
          </Link>
        </BarberShopAddress>
      </FormContainer>
    </Container>
  );
};

export default Register;
