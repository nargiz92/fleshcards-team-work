export type GetDeckArgs = {
  minCardsCount?: number;
  maxCardsCount?: number;
  name?: string;
  authorId?: string;
  orderBy?: string;
  currentPage?: number;
  itemsPerPage?: number;
};
export interface Pagination {
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

export interface Author {
  id: string;
  name: string;
}

export interface Deck {
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  shots: number;
  cover: string | null;
  rating: number;
  isDeleted: boolean | null;
  isBlocked: boolean | null;
  created: string;
  updated: string;
  cardsCount: number;
  author: Author;
}

export interface DecksResponse {
  maxCardsCount: number;
  pagination: Pagination;
  items: Deck[];
}
export type LearnRequestType = {
  id: string;
  previousCardId: string;
};
export type SaveGradeRequestBody = {
  cardId: string;
  grade: number;
};
