import { getFromLocalStorage } from "@/utils/local-storage";
import { api } from "./api";
import { tagTypes } from "./tagsType";

const Chat_URL = "/chat";

export const ChatApi = api.injectEndpoints({
  endpoints: (build) => ({
    // ! for getting all user of
    ChatUsers: build.query({
      query: () => {
        return {
          url: `${Chat_URL}/all-user`,
          method: "GET",
          headers: {
            Authorization: `${getFromLocalStorage("user")}`,
          },
        };
      },
      providesTags: [tagTypes.chat],
    }),
    // get single
    // ! for getting user Admin messsage//
    getMessage: build.query({
      query: (senderId: string) => ({
        url: `${Chat_URL}/admin/${senderId}`,
        method: "GET",
        headers: {
          Authorization: `${getFromLocalStorage("user")}`,
        },
      }),
      providesTags: [tagTypes.chat],
    }),
    // ! for getting user messsage//
    getUserMessage: build.query({
      query: (senderemail: string) => ({
        url: `${Chat_URL}/${senderemail}`,
        method: "GET",
        headers: {
          Authorization: `${getFromLocalStorage("user")}`,
        },
      }),
      providesTags: [tagTypes.chat],
    }),
    // create
    addChat: build.mutation({
      query: (data: any) => ({
        url: `${Chat_URL}`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `${getFromLocalStorage("user")}`,
        },
      }),
      invalidatesTags: [tagTypes.chat],
    }),
    // ! for refresh chat
    refreshChat: build.mutation({
      query: (data: any) => ({
        url: `${Chat_URL}/refresh`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `${getFromLocalStorage("user")}`,
        },
      }),
      invalidatesTags: [tagTypes.chat],
    }),

    // getMessage: build.mutation({
    //   query: (data: any) => ({
    //     url: `${Chat_URL}/get-message`,
    //     method: "PATCH",
    //     body: data.body,
    //   }),
    //   invalidatesTags: [tagTypes.chat],
    // }),
    // delete
    deleteChat: build.mutation({
      query: (id: string) => {
        // console.log(id);
        return {
          url: `${Chat_URL}/${id}`,
          method: "DELETE",
          headers: {
            Authorization: `${getFromLocalStorage("user")}`,
          },
        };
      },
      invalidatesTags: [tagTypes.chat],
    }),
  }),
});

export const {
  useChatUsersQuery,
  useGetMessageQuery,
  useAddChatMutation,
  // useChatQuery,
  useDeleteChatMutation,
  // useGetMessageMutation,
  useGetUserMessageQuery,
  useRefreshChatMutation,
} = ChatApi;
