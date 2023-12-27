import {
  getFromLocalStorage,
  setToLocalStorage,
} from "./../../../utils/local-storage";
import { api } from "../api";
import { tagTypes } from "../tagsType";

const DONATION_URL = "/donation";
const DONATION_RECEIVE_URL = "/receive";

export const donationAPi = api.injectEndpoints({
  endpoints: (build) => ({
    acceptRequestByAdmin: build.mutation({
      query: (id) => ({
        url: `${DONATION_URL}/accept-request-admin/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `${getFromLocalStorage("user")}`,
        },
      }),
      invalidatesTags: [tagTypes.donation],
    }),
    requestForDonate: build.mutation({
      query: (data) => ({
        url: `${DONATION_RECEIVE_URL}`,
        method: "POST",
        body: data.data,
        headers: {
          Authorization: `${getFromLocalStorage("user")}`,
        },
      }),
      invalidatesTags: [tagTypes.donation],
    }),
    requestForBlood: build.mutation({
      query: (data) => ({
        url: `${DONATION_URL}/request`,
        method: "POST",
        body: data.data,
        headers: {
          Authorization: `${getFromLocalStorage("user")}`,
        },
      }),
      invalidatesTags: [tagTypes.donation],
    }),
  }),
});

export const {
  useAcceptRequestByAdminMutation,
  useRequestForDonateMutation,
  useRequestForBloodMutation,
} = donationAPi;
