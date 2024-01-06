import { getFromLocalStorage } from "@/utils/local-storage";
import { api } from "./api";
import { tagTypes } from "./tagsType";

const EVENT_URL = "/event";

export const eventApi = api.injectEndpoints({
  endpoints: (build) => ({
    Events: build.query({
      query: () => {
        return {
          url: EVENT_URL,
          method: "GET",
        };
      },
      providesTags: [tagTypes.event],
    }),
    // get single
    Event: build.query({
      query: (id: string) => ({
        url: `${EVENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.event],
    }),
    // create
    addEvent: build.mutation({
      query: (data: any) => ({
        url: `${EVENT_URL}`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `${getFromLocalStorage("user")}`,
        },
      }),
      invalidatesTags: [tagTypes.event],
    }),
    // update
    updateEvent: build.mutation({
      query: (data: any) => ({
        url: `${EVENT_URL}/${data.id}`,
        method: "PATCH",
        body: data.body,
      }),
      invalidatesTags: [tagTypes.event],
    }),
    // delete
    deleteEvent: build.mutation({
      query: (id: string) => {
        // console.log(id);
        return {
          url: `${EVENT_URL}/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.event],
    }),
  }),
});

export const {
  useAddEventMutation,
  useEventQuery,
  useDeleteEventMutation,
  useEventsQuery,
  useUpdateEventMutation,
} = eventApi;
