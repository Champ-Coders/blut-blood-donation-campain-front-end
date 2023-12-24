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
  }),
});

export const { useGetAllDonationInfoQuery } = donationApi;
