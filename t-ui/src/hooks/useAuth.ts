import { useState } from "react";
import axiosClient from "../config/axios";
import { AUTH, USERS } from "../constants/api";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const LENGTH = 6;
  const submiLogintDisabled = !Boolean(
    email.length > LENGTH && password.length > LENGTH
  );

  const submitSignUpDisabled = !Boolean(
    username.length > LENGTH &&
      password.length > LENGTH &&
      email.length > LENGTH
  );

  const login = async () => {
    return await axiosClient.post(AUTH, { email, password });
  };

  const signUpUser = async () => {
    return await axiosClient.post(USERS, { username, email, password });
  };
  return {
    login,
    signUpUser,
    loading,
    error,
    setEmail,
    setPassword,
    submiLogintDisabled,
    setUsername,
    submitSignUpDisabled,
  };
}
