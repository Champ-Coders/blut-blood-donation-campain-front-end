import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../../utils/local-storage";
import { api } from "../api";
import { tagTypes } from "../tagsType";

const BLOG_COMMENT_URL = "/blog-comment";

export const donationAPi = api.injectEndpoints({
  endpoints: (build) => ({
    // get all blog comments
    getAllComment: build.query({
      query: () => ({
        url: `${BLOG_COMMENT_URL}`,
        method: "GET",
        headers: {
          Authorization: `${getFromLocalStorage("user")}`,
        },
      }),
      providesTags: [tagTypes.blogComment],
    }),

    // get single blog comment
    getSingleBlogComment: build.query({
      query: (id) => ({
        url: `${BLOG_COMMENT_URL}/${id}`,
        method: "GET",
        headers: {
          Authorization: `${getFromLocalStorage("user")}`,
        },
      }),
    }),

    // replay blog comment
    replayBlogComment: build.mutation({
      query: (data) => ({
        url: `${BLOG_COMMENT_URL}/${data.id}`,
        method: "PATCH",
        body: data.data,
        headers: {
          Authorization: `${getFromLocalStorage("user")}`,
        },
      }),
      invalidatesTags: [tagTypes.blogComment],
    }),

    // delete blog comment
    deleteBlogComment: build.mutation({
      query: (id) => ({
        url: `${BLOG_COMMENT_URL}/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `${getFromLocalStorage("user")}`,
        },
      }),
      invalidatesTags: [tagTypes.blogComment],
    }),

    // create blog comment
    createBlogComment: build.mutation({
      query: (data) => ({
        url: `${BLOG_COMMENT_URL}/create-blog`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `${getFromLocalStorage("user")}`,
        },
      }),
      invalidatesTags: [tagTypes.blogComment],
    }),
  }),
});

export const {
  useGetAllCommentQuery,
  useGetSingleBlogCommentQuery,
  useReplayBlogCommentMutation,
  useDeleteBlogCommentMutation,
  useCreateBlogCommentMutation,
} = donationAPi;
