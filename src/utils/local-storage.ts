import { jwtDecode } from "jwt-decode";
export const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};

export const getUserDataFromLC = () => {
  const token = getFromLocalStorage("user");

  if (token) {
    const userInfo = jwtDecode(token);
    return userInfo;
  }
  
};
