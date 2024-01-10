import { getFromLocalStorage } from "../../../utils/local-storage";
import { api } from "../api";
import { tagTypes } from "../tagsType";

const BLOG_COMMENT_URL = "/blog-comment";

export const donationAPi = api.injectEndpoints({
  endpoints: (build) => ({
    // create blog comment
    createBlogComment: build.mutation({
      query: (data: { userId: string; blogId: string; comments: string }) => ({
        url: `${BLOG_COMMENT_URL}`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `${getFromLocalStorage("user")}`,
        },
      }),
      invalidatesTags: [tagTypes.blogComment, tagTypes.blog],
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
      invalidatesTags: [tagTypes.blogComment, tagTypes.blog],
    }),
    // update blog comment
    updateBlogComment: build.mutation({
      query: (data: { id: string; comments: string }) => ({
        url: `${BLOG_COMMENT_URL}/${data.id}`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: `${getFromLocalStorage("user")}`,
        },
      }),
      invalidatesTags: [tagTypes.blogComment, tagTypes.blog],
    }),

    // get comments by user id
    getCommentsByUserId: build.query({
      query: (id) => ({
        url: `${BLOG_COMMENT_URL}/myComments/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blogComment, tagTypes.blog],
    }),
  }),
});

export const {
  useDeleteBlogCommentMutation,
  useCreateBlogCommentMutation,
  useGetCommentsByUserIdQuery,
  useUpdateBlogCommentMutation,
} = donationAPi;
