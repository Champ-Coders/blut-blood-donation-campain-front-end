import { setToLocalStorage } from "./../../../utils/local-storage";
import { api } from "../api";

const AUTH_URL = "/users";

export const authAPi = api.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: loginData,
      }),
      onQueryStarted: async (loginData, { dispatch, queryFulfilled }) => {
        const response = await queryFulfilled;
        console.log(response, "response of login");
        const accessToken = response.data.data.accessToken;
       setToLocalStorage("user", accessToken);
     
      },
    }),
    userRegister: build.mutation({
      query: (registerData) => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        body: registerData,
      }),
      onQueryStarted: async (registerData, { dispatch, queryFulfilled }) => {
        const response = await queryFulfilled;
        const accessToken = response.data.accessToken;
        const setToLCStorage = setToLocalStorage("user", accessToken);
        console.log(setToLCStorage);
      },
    }),
  }),
});

export const { useUserLoginMutation, useUserRegisterMutation } = authAPi;
