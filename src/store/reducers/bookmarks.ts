import { BookmarkAction } from "../action/bookmarks";
import { BookmarkTypes } from "../action-types";

const { TOGGLE_BOOKMARK } = BookmarkTypes;

interface BookmarkState {
  bookmarkedMedia: {
    id: string;
    title: string;
    path: string;
    published_year: number;
    category: string;
    rating: string;
    is_trending: boolean;
    is_recommended: boolean;
  }[];
}

const initialState = {
  bookmarkedMedia: [],
};

const bookmarkReducer = (
  state: BookmarkState = initialState,
  action: BookmarkAction
) => {
  switch (action.type) {
    case TOGGLE_BOOKMARK:
      const { id } = action.payload;

      const newBookmarkedMedia = [...state.bookmarkedMedia];

      const bookmarkIndex = newBookmarkedMedia.findIndex(
        (item) => item.id === id
      );

      if (bookmarkIndex > -1) {
        newBookmarkedMedia.splice(bookmarkIndex, 1);
      } else {
        newBookmarkedMedia.push(action.payload);
      }
      return { ...state, bookmarkedMedia: newBookmarkedMedia };
    default:
      return state;
  }
};

export default bookmarkReducer;
