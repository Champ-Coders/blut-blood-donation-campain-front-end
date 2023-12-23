import { api } from "./api";
import { tagTypes } from "./tagsType";

const SERVICE_URL = "/services";

export const serviceApi = api.injectEndpoints({
  endpoints: (build) => ({
    services: build.query({
      query: () => {
        return {
          url: SERVICE_URL,
          method: "GET",
        };
      },
      providesTags: [tagTypes.service],
    }),
    // get single
    service: build.query({
      query: (id: string) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),
    // create
    addService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/create-services`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    // update
    updateService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/${data.id}`,
        method: "PATCH",
        body: data.body,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    // delete
    deleteService: build.mutation({
      query: (id) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useServicesQuery,
  useServiceQuery,
  useAddServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
