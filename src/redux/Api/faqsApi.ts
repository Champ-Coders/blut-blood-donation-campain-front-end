import { api } from "./api";
import { tagTypes } from "./tagsType";

const FAQS_URL = "/faqs";

const faqApi = api.injectEndpoints({
  endpoints: (build) => ({
    //faq list
    faqs: build.query({
      query: () => ({
        url: `${FAQS_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.faq],
    }),
    // isngle Faq
    faq: build.query({
      query: (id) => ({
        url: `${FAQS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.faq],
    }),

    // Faq create
    // createFaq: build.mutation({
    //   query: (data) => ({
    //     url: `${FAQS_URL}/create-faqs`,
    //     method: "POST",
    //     data: data,
    //   }),
    //   invalidatesTags: [tagTypes.faq],
    // }),

    // create Faq
    createFaq: build.mutation({
      query: (paylod: any) => {
        return {
          url: `${FAQS_URL}/create-faqs`,
          method: "POST",
          body: paylod,
        };
      },
      invalidatesTags: [tagTypes.faq],
    }),

    // Faq   update
    updateFaq: build.mutation({
      query: (paylod) => ({
        url: `${FAQS_URL}/${paylod.id}`,
        method: "PATCH",
        data: paylod.body,
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    // Faq delete
    deleteFaq: build.mutation({
      query: (id) => ({
        url: `${FAQS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.faq],
    }),
  }),
});

export const {
  useFaqsQuery,
  useFaqQuery,
  useCreateFaqMutation,
  useUpdateFaqMutation,
  useDeleteFaqMutation,
} = faqApi;
