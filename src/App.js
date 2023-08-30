import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AuthVerify from "./common/AuthVerify";
import useLogOut from "./hooks/user.logout";

import { setCurrentUser } from "./actions/user.action";
import { pathSpliter } from "./common/path.split";
import NotFound from "./components/NotFound/NotFound";

import SharedLayOut from "./pages/Shared/ShardLayOut";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import { useGetUser } from "./hooks/user.get";
import BarberShop from "./pages/BarberShop/BarberShop";
// import Cart from "./pages/cart/Cart";
import BookService from "./pages/BookService/BookService";
import Home from "./pages/home/index";
import { BarberShopServiceDetails } from "./pages/services/index";
import { currentUser } from "./selectors/user.selector";

function App() {
  const dispatch = useDispatch();
  const currentUserValue = useSelector(currentUser);
  const { getUser, user } = useGetUser();

  useEffect(() => {
    getUser();
  }, []);

  const { pathname } = useLocation();
  const { LogOut } = useLogOut();
  useEffect(() => {
    const user = localStorage.getItem("user");
    dispatch(setCurrentUser(JSON.parse(user)));
    dispatch({
      type: "SET_CURRENT_PAGE",
      payload: pathname === "/" ? "home" : pathname.split("/")[1],
    });
    // dispatch never updates so we can ingore it in useEffect dependency array
  }, [pathname, dispatch]);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<SharedLayOut />}>
          <Route
            index
            element={currentUserValue ? <Home /> : <Navigate to="register" />}
          />

          <Route path="/barbershop?" element={<BarberShop />} />
          <Route path="/service?" element={<BarberShopServiceDetails />} />

          {/* <Route path="/barbershops/" element={<Login />} /> */}

          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/bookservice" element={<BookService />} />
        <Route
          element={!currentUserValue ? <Login /> : <Navigate to="/" />}
          path="login"
        />
        <Route
          element={!currentUserValue ? <Register /> : <Navigate to="/" />}
          path="register"
        />
      </Routes>
      <AuthVerify LogOut={LogOut} />
    </React.Fragment>
  );
}

export default App;
