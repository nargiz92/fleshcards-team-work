import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "@/services/base-query-with-reauth";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["Decks", "Me", "Cards", "Learn"],
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
