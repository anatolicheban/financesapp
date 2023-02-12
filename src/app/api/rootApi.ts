import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { setCredentials } from "../../features/auth/authSlice";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = fetchBaseQuery({
  baseUrl: "https://financialmanagmentapi.azurewebsites.net/api",
  credentials: "include",
  prepareHeaders: (headers, api) => {
    //   const state = api.getState() as RootState;
    //   const token = state.auth.token;

    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    // }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  // console.log(args) // request url, method, body
  // console.log(api) // signal, dispatch, getState()
  // console.log(extraOptions) //custom like {shout: true}

  let result = await baseQuery(args, api, extraOptions);

  // If you want, handle other status codes, too
  if (result?.error?.status === 403) {
    console.log("sending refresh token");

    // send refresh token to get new access token
    const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);

    if (refreshResult?.data) {
      // store the new token
      // api.dispatch(setCredentials({ ...refreshResult.data }));

      // retry original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      if (refreshResult?.error?.status === 403) {
        refreshResult.error.data = "Sesison expired, retry login";
      }
      return refreshResult;
    }
  }

  return result;
};

export const rootApi = createApi({
  baseQuery: baseQueryWithReauth,
  // tagTypes: ["Exchnger"],
  reducerPath: "api",
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({}),
});
