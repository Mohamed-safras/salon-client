import axios from "axios";
import { useState } from "react";

export const useGetUser = () => {
  const [user, setUser] = useState(null);
  const usertoken = JSON.parse(localStorage.getItem("user"));

  const getUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/user/getUser",
        {
          headers: {
            Authorization: `Bearer ${usertoken?.token}`,
          },
        }
      );
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { getUser, user };
};
