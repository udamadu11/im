import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsAPI = createApi({
  reducerPath: "newsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://immunifyme.com/" }),
  endpoints: (build) => ({
    fetchNews: build.query({
      query: () => ({
        url: "/blog/wp-json/wp/v2/posts?_embed&",
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchNewsQuery } = newsAPI;
