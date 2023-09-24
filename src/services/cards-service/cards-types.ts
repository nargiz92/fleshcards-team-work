export type GetCardsType = {
  id: string;
  question: string;
  answer: string;
  orderBy: string;
  currentPage: number;
  itemsPerPage: number;
};
type ItemsResponse = {
  id: string;
  answer: string;
  answerImg: string;
  answerVideo: string;
  created: string;
  deckId: string;
  grade: number;

  question: string;

  questionImg: string;
  questionVideo: string;
  shots: number;
  updated: string;
  userId: string;
};
export type CardsResponse = {
  items: ItemsResponse[];
  pagination: {
    currentPage: number;
    itemsPerPage: number;
    totalPages: number;
    totalItems: number;
  };
};
