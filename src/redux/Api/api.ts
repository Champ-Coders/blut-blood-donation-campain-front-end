import config from "@/config/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${config?.apiBaseUrl}` }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
