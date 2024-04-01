"use client";
import { IUser } from "@/types";
import React, { useEffect, useState, createContext, useContext } from "react";
const INITIAL_USER: IUser = {
  role: "",
  _id: "",
  bio: "",
  email: "",
  first_name: "",
  image: "",
  last_name: "",
};
const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
};
const AuthContext = createContext(INITIAL_STATE);

const AuhtProvider = ({
  children,
  userData,
}: {
  children: React.ReactNode;
  userData?: any;
}) => {
  const [user, setUser] = useState<IUser>(INITIAL_USER);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const checkAuth = () => {
    if (userData) {
      setIsAuthenticated(true);
      setIsLoading(true);
      setUser(userData);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    checkAuth();
  }, [user, userData]);
  const value = {
    user,
    isLoading,
    isAuthenticated,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useUserContext = () => useContext(AuthContext);
export default AuhtProvider;
