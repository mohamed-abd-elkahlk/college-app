"use client";

import { IUser } from "@/types";
import React, { useEffect, useState, createContext, useContext } from "react";
const INITIAL_USER: IUser = {
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

const AuhtProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser>(INITIAL_USER);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const checkAuth = async () => {
    setIsLoading(true);
    try {
      const req = await fetch("/api/auth");
      const data = await req.json();
      if (data.ok) {
        setUser(data.user);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);
  const value = {
    user,
    isLoading,
    isAuthenticated,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useUserContext = () => useContext(AuthContext);
export default AuhtProvider;
