import config from "@/config/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "./tagsType";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config?.apiBaseUrl}`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("user");
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: tagTypesList,
  endpoints: (builder) => ({}),
});
