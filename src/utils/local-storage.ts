import { jwtDecode } from "jwt-decode";
export const setToLocalStorage = (key: string, token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, token);
  }
};

export const getFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return null;
};

type IUserInfo = {
  id: string;
  email: string;
  role: string;
  imgUrl?: string;
};
export const getUserDataFromLC = (): IUserInfo | null => {
  const token = getFromLocalStorage("user");

  if (token && typeof window !== "undefined") {
    const userInfo: IUserInfo = jwtDecode(token);
    return userInfo;
  }
  return null;
};

export const removeFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

export const logout = () => {
  removeFromLocalStorage("user"); // Assuming "user" is the key for the authentication
};
