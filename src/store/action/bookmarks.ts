import { BookmarkTypes } from "../action-types";

interface toggleBookmark {
  type: BookmarkTypes.TOGGLE_BOOKMARK;
  payload: {
    id: string;
    title: string;
    path: string;
    published_year: number;
    category: string;
    rating: string;
    is_trending: boolean;
    is_recommended: boolean;
  };
}

export type BookmarkAction = toggleBookmark;
