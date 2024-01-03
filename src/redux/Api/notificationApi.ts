import { api } from "./api";
import { tagTypes } from "./tagsType";

const notification_URL = "/notification";

const notificationApi = api.injectEndpoints({
  endpoints: (build) => ({
    //faq list
    notifications: build.query({
      query: () => ({
        url: `${notification_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.faq],
    }),

    // Faq update
    updateNotifications: build.mutation({
      query: (id) => ({
        url: `${notification_URL}/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.faq],
    }),
  }),
});

export const { useNotificationsQuery, useUpdateNotificationsMutation } =
  notificationApi;
