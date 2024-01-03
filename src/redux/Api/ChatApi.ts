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
        };
      },
      providesTags: [tagTypes.chat],
    }),
    // get single
    Chat: build.query({
      query: (id: string) => ({
        url: `${Chat_URL}/${id}`,
        method: "GET",
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
    // ! for getting user messsage//

    getMessage: build.mutation({
      query: (data: any) => ({
        url: `${Chat_URL}/get-message`,
        method: "PATCH",
        body: data.body,
      }),
      invalidatesTags: [tagTypes.chat],
    }),
    // delete
    deleteChat: build.mutation({
      query: (id: string) => {
        // console.log(id);
        return {
          url: `${Chat_URL}/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.chat],
    }),
  }),
});

export const {
  useChatUsersQuery,
  useAddChatMutation,
  useChatQuery,
  useDeleteChatMutation,
  useGetMessageMutation,
} = ChatApi;
