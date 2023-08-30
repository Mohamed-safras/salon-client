import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../actions/user.action";

const useAuthHandler = (formInput) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { username, email, password, confirmPassword, phone, address } =
    formInput;

  // const [file, setFile] = useState(null);
  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0]);
  // };

  const register = async (event) => {
    event.preventDefault();

    let emptyFileds = [];

    if (!username) emptyFileds.push("username");
    if (!email) emptyFileds.push("Email");
    if (!password) emptyFileds.push("Password");
    if (!confirmPassword) emptyFileds.push("Confirm Password");
    if (!phone) emptyFileds.push("Phone");

    if (emptyFileds.length > 0) {
      setError(`${[...emptyFileds]} can't be empty`);
      return;
    } else {
      setError("");
    }

    if (password !== confirmPassword) {
      setError("Password does not match");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:8080/api/v1/user/register",
        { ...formInput }
      );

      console.log(response);
      if (response.status === 201 || response.statusText === "OK") {
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch(setCurrentUser(response.data));
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  const login = async (event) => {
    event.preventDefault();
    let emptyFileds = [];
    if (!email) emptyFileds.push("Email");
    if (!password) emptyFileds.push("Password");

    if (emptyFileds.length > 0) {
      setError(`${[...emptyFileds]} can't be empty`);
      return;
    } else {
      setError("");
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/signin",
        {
          ...formInput,
        }
      );

      if (response.status === 200 || response.statusText === "OK") {
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch(setCurrentUser(response.data));
      }
      setLoading(false);
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return {
    register,
    loading,
    error,
    setError,
    // handleFileChange,
    login,
  };
};

export default useAuthHandler;
