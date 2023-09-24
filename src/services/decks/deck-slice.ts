import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  itemsPerPage: "10",
  searchByName: "",
  decksName: "",
  isPrivates: false,
  isCover: "",
  sort: null,
  activeTab: "all",
  authorId: "",
  sliderValues: [0, 100],
  userId: "",
  ranger: [0, 100],
  showAnswer: false,
  hideButton: false,
  radioSelectedValue: "1",
};

export const deckSlice = createSlice({
  initialState,
  name: "deckSlice",
  reducers: {
    setItemsPerPage: (state, action: PayloadAction<string>) => {
      state.itemsPerPage = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSearchByName: (state, action: PayloadAction<string>) => {
      state.searchByName = action.payload;
    },
    setPrivate: (state, action: PayloadAction<boolean>) => {
      state.isPrivates = action.payload;
    },
    setPhoto: (state, action) => {
      state.isCover = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
    setAuthorId: (state, action: PayloadAction<string>) => {
      state.authorId = action.payload;
    },
    setDecksName: (state, action) => {
      state.decksName = action.payload;
    },
    setSliderValues: (state, action) => {
      state.sliderValues = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setValueCommit: (state, action) => {
      state.ranger = action.payload;
    },
    toggleShowAnswer: (state) => {
      state.showAnswer = !state.showAnswer;
      state.hideButton = true;
    },
    setSelectedValue: (state, action) => {
      state.radioSelectedValue = action.payload;
    },
  },
});
export const { toggleShowAnswer, setSelectedValue } = deckSlice.actions;
