import {
  LoginArgs,
  LoginResponse,
  MeResponseType,
  SignUpRequestBody,
  SignUpResponse,
} from "./auth-types";

import { baseApi } from "@/services";

export const authService = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<MeResponseType, void>({
      async queryFn(_name, _api, _extraOptions, baseQuery) {
        const result = await baseQuery({
          url: `v1/auth/me`,
          method: "GET",
        });

        if (result.error) {
          // but refetch on another error
          return { data: { success: false } as MeResponseType };
        }

        return { data: result.data as MeResponseType };
      },
      extraOptions: {
        maxRetries: 0,
      },
      providesTags: ["Me"],
    }),
    login: builder.mutation<LoginResponse, LoginArgs>({
      query: (data) => ({
        url: `v1/auth/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Me"],
    }),
    signUp: builder.mutation<any, any>({
      query: (data) => ({
        url: `v1/auth/sign-up`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Me"],
    }),
    recoverPassword: builder.mutation<any, any>({
      query: (data) => ({
        url: `v1/auth/recover-password`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Me"],
    }),
    updatedUserData: builder.mutation<any, any>({
      query: (data) => ({
        url: `v1/auth/me`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Me"],
    }),
    logout: builder.mutation<void, void>({
      query: () => {
        return {
          url: `v1/auth/logout`,
          method: "POST",
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          authService.util.updateQueryData("getMe", undefined, () => {
            return null;
          }),
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();

          /**
           * Alternatively, on failure you can invalidate the corresponding cache tags
           * to trigger a re-fetch:
           * dispatch(api.util.invalidateTags(['Post']))
           */
        }
      },
      invalidatesTags: ["Me"],
    }),
  }),
});

export const {
  useRecoverPasswordMutation,
  useGetMeQuery,
  useLoginMutation,
  useSignUpMutation,
  useLogoutMutation,
  useUpdatedUserDataMutation,
} = authService;
