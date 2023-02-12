import { rootApi } from "../../app/api/rootApi";
import { LoginReq, LoginResponse } from "../../models/queryModels";

export const authApiSlice = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    logIn: builder.mutation<LoginResponse, LoginReq>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      onQueryStarted() {},
    }),
  }),
});

export const { useLogInMutation } = authApiSlice;
