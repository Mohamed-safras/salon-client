import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const useGetBarberShop = () => {
  const [shops, setShops] = useState([]);
  const [shop, setShop] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [services, setServices] = useState([]);

  const usertoken = JSON.parse(localStorage.getItem("user"));

  const getShops = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8080/api/v1/user/getShops",
        {
          headers: {
            Authorization: `Bearer ${usertoken?.token}`,
          },
        }
      );

      setShops(response?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const getShopById = async (_id) => {
    if (!_id) {
      setError({ message: "content not availble" });
      return;
    }
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8080/api/v1/user/getShop/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${usertoken?.token}`,
          },
        }
      );

      if (response.statusText !== "OK") {
        throw new Error("some thing went wrong...");
      }
      setLoading(false);
      setShop(response.data);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError(error.response.data);
      } else {
        setError(error.message);
        // console.error("An error occurred:", error.message);
      }
    }
  };

  const getService = async (_id) => {
    if (!_id) {
      setError({ message: "content not availble" });
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/user/services/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${usertoken?.token}`,
          },
        }
      );

      if (response.statusText !== "OK") {
        throw new Error("some thing went wrong...");
      }
      setLoading(false);

      setServices(response.data);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError(error.response.data);
      } else {
        setError(error.message);
      }
    }
  };

  return {
    getShops,
    shops,
    loading,
    getShopById,
    shop,
    error,
    getService,
    services,
  };
};
