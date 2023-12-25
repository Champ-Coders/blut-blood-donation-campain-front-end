import {
  getFromLocalStorage,
  setToLocalStorage,
} from "./../../../utils/local-storage";
import { api } from "../api";
import { tagTypes } from "../tagsType";

const DONATION_URL = "/donation";

export const donationAPi = api.injectEndpoints({
  endpoints: (build) => ({
    acceptRequestByAdmin: build.mutation({
      query: (id) => ({
        url: `${DONATION_URL}/accept-request-admin/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.donation],
    }),
  }),
});

export const { useAcceptRequestByAdminMutation } = donationAPi;
