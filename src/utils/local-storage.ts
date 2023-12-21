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

type IUserInfo = {
  id: string;
  email: string;
  role: string;
};
export const getUserDataFromLC = (): IUserInfo | null => {
  const token = getFromLocalStorage("user");

  // console.log(token,"token of lc");

  if (token) {
    const userInfo: IUserInfo = jwtDecode(token);
    return userInfo;
  }
  return null;
};
