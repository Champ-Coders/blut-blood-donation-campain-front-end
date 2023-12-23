import { api } from "./api";
import { tagTypes } from "./tagsType";

const REVIEW_URL = "/review";

export const reviewApi = api.injectEndpoints({
  endpoints: (build) => ({
    reviews: build.query({
      query: () => {
        return {
          url: REVIEW_URL,
          method: "GET",
        };
      },
      providesTags: [tagTypes.review],
    }),
    // get single
    review: build.query({
      query: (id: string) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),
    // create
    addReview: build.mutation({
      query: (data) => ({
        url: `${REVIEW_URL}/create-review`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.review],
    }),
    // update
    updateReview: build.mutation({
      query: (data) => ({
        url: `${REVIEW_URL}/${data.id}`,
        method: "PATCH",
        body: data.body,
      }),
      invalidatesTags: [tagTypes.review],
    }),
    // delete
    deleteReview: build.mutation({
      query: (id) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.review],
    }),
  }),
});

export const {
  useAddReviewMutation,
  useDeleteReviewMutation,
  useUpdateReviewMutation,
  useReviewQuery,
  useReviewsQuery,
} = reviewApi;
