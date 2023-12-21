import { api } from "./api";
import { tagTypes } from "./tagsType";

const BLOG_URL = "/blog";

export const blogApi = api.injectEndpoints({
  endpoints: (build) => ({
    blogs: build.query({
      query: () => {
        return {
          url: BLOG_URL,
          method: "GET",
        };
      },
      providesTags: [tagTypes.blog],
    }),
    // get single
    blog: build.query({
      query: (id: string) => ({
        url: `${BLOG_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),
    // create
    addBlog: build.mutation({
      query: (data) => ({
        url: `${BLOG_URL}/create-blog`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    // update
    updateBlog: build.mutation({
      query: (data) => ({
        url: `${BLOG_URL}/${data.id}`,
        method: "PATCH",
        body: data.body,
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    // delete
    deleteBlog: build.mutation({
      query: (id) => ({
        url: `${BLOG_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.blog],
    }),
  }),
});

export const {
  useAddBlogMutation,
  useBlogQuery,
  useDeleteBlogMutation,
  useBlogsQuery,
  useUpdateBlogMutation,
} = blogApi;
