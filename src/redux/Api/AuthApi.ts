import { api } from "./api";
import { tagTypes } from "./tagsType";

const DONATION_URL = "/donation";

export const donationApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllDonationInfo: build.query({
      query: (data) => ({
        url: `${DONATION_URL}`,
        method: "GET",
        params: data,
      }),
      providesTags: [tagTypes.donation],
    }),
    forgetPassword: build.mutation({
      query: (body) => ({
        url: `/users/forget-password`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetAllDonationInfoQuery, useForgetPasswordMutation } =
  donationApi;
