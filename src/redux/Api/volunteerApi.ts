import { api } from "./api";
import { tagTypes } from "./tagsType";

const VOLUNTEER_URL = "/volunteer";

export const volunteerApi = api.injectEndpoints({
  endpoints: (build) => ({
    volunteers: build.query({
      query: () => {
        return {
          url: VOLUNTEER_URL,
          method: "GET",
        };
      },
      providesTags: [tagTypes.volunteer],
    }),
    // get single
    volunteer: build.query({
      query: (id: string) => ({
        url: `${VOLUNTEER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.volunteer],
    }),
    // create
    addVolunteer: build.mutation({
      query: (data) => ({
        url: `${VOLUNTEER_URL}/create-volunteer`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.volunteer],
    }),
    // update
    updateVolunteer: build.mutation({
      query: (data) => ({
        url: `${VOLUNTEER_URL}/${data.id}`,
        method: "PATCH",
        body: data.body,
      }),
      invalidatesTags: [tagTypes.volunteer],
    }),
    // delete
    deleteVolunteer: build.mutation({
      query: (id) => ({
        url: `${VOLUNTEER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.volunteer],
    }),
  }),
});

export const {
  useAddVolunteerMutation,
  useDeleteVolunteerMutation,
  useUpdateVolunteerMutation,
  useVolunteersQuery,
  useVolunteerQuery,
} = volunteerApi;
