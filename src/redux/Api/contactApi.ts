import { getFromLocalStorage } from "@/utils/local-storage";
import { api } from "./api";
import { tagTypes } from "./tagsType";

const CONTACT_URL = "/contact";

export const contactApi = api.injectEndpoints({
  endpoints: (build) => ({
    Contacts: build.query({
      query: () => {
        return {
          url: CONTACT_URL,
          method: "GET",
        };
      },
      providesTags: [tagTypes.contact],
    }),
    // get single
    Contact: build.query({
      query: (id: string) => ({
        url: `${CONTACT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.contact],
    }),
    // create
    addContact: build.mutation({
      query: (data: any) => ({
        url: `${CONTACT_URL}`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `${getFromLocalStorage("user")}`,
        },
      }),
      invalidatesTags: [tagTypes.contact],
    }),
    // update
    updateContact: build.mutation({
      query: (data: any) => ({
        url: `${CONTACT_URL}/${data.id}`,
        method: "PATCH",
        body: data.body,
      }),
      invalidatesTags: [tagTypes.contact],
    }),
    // delete
    deleteContact: build.mutation({
      query: (id: string) => {
        // console.log(id);
        return {
          url: `${CONTACT_URL}/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.contact],
    }),
  }),
});

export const {
  useAddContactMutation,
  useContactQuery,
  useDeleteContactMutation,
  useContactsQuery,
  useUpdateContactMutation,
} = contactApi;
