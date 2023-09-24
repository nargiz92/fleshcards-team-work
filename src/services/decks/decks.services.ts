import {
  Deck,
  DecksResponse,
  GetDeckArgs,
  LearnRequestType,
  SaveGradeRequestBody,
} from "@/services";
import { baseApi } from "@/services/base-api";
import {
  CardsResponse,
  GetCardsType,
} from "@/services/cards-service/cards-types";
import { RootState } from "@/services/store";

const decksService = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getDecks: builder.query<DecksResponse, GetDeckArgs>({
        query: (args) => {
          return {
            url: `v1/decks`,
            method: "GET",
            params: args,
          };
        },
        providesTags: ["Decks"],
      }),
      createDeck: builder.mutation<
        Deck,
        { name: string; isPrivate: boolean; cover: string }
      >({
        // query: ({ name, isPrivate, cover }) => {
        query: (data) => ({
          url: "v1/decks",
          method: "POST",
          body: data,
        }),
        async onQueryStarted(_, { dispatch, queryFulfilled, getState }) {
          const state = getState() as RootState;

          try {
            const response = await queryFulfilled;

            dispatch(
              decksService.util.updateQueryData(
                "getDecks",
                { currentPage: state.deckSlice.currentPage },
                (draft) => {
                  draft.items = [response.data, ...draft.items];
                },
              ),
            );
          } catch (error) {
            console.log(error);
          }
        },

        invalidatesTags: ["Decks"],
      }),
      deleteDeck: builder.mutation<void, { id: string }>({
        query: (data) => ({
          url: `v1/decks/${data.id}`,
          method: "DELETE",
        }),
        async onQueryStarted({ id }, { dispatch, queryFulfilled, getState }) {
          const state = getState() as RootState;
          const patchResult = dispatch(
            decksService.util.updateQueryData(
              "getDecks",
              { currentPage: state.deckSlice.currentPage },
              (draft) => {
                draft.items = draft.items.filter((item) => item.id !== id);
              },
            ),
          );

          try {
            await queryFulfilled;
          } catch (error) {
            patchResult.undo();
          }
        },
        invalidatesTags: ["Decks"],
      }),
      getCards: builder.query<CardsResponse, GetCardsType>({
        query: (data) => {
          return {
            url: `v1/decks/${data.id}/cards`,
            method: "GET",
          };
        },
        // invalidatesTags: ["Decks"],
      }),
      learnCards: builder.query<any, LearnRequestType>({
        query: (data) => {
          return {
            url: `v1/decks/${data.id}/learn`,
            method: "GET",
          };
        },
        providesTags: ["Learn"],
      }),
      nextQuestion: builder.mutation<any, SaveGradeRequestBody>({
        query: (data) => ({
          url: `v1/decks/${data.cardId}/learn`,
          method: "POST",
          body: data,
        }),
        // async onQueryStarted(any, { dispatch, queryFulfilled, getState }) {
        //   const state = getState() as RootState;
        //   const patchResult = dispatch(
        //     decksService.util.updateQueryData(
        //       "nextQuestion",
        //       { currentPage: state.deckSlice.currentPage },
        //       (draft) => {
        //         draft.items = draft.items.filter((item) => item.id !== id);
        //       },
        //     ),
        //   );
        //
        //   try {
        //     await queryFulfilled;
        //   } catch (error) {
        //     patchResult.undo();
        //   }
        // },
        invalidatesTags: ["Learn"],
      }),
    };
  },
});

export const {
  useNextQuestionMutation,
  useGetDecksQuery,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetCardsQuery,
  useLearnCardsQuery,
} = decksService;
