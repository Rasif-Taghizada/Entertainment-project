import { BookmarkTypes } from "../action-types";

export const toggleBookmark = (data: any) => {
  return { type: BookmarkTypes.TOGGLE_BOOKMARK, payload: data };
};
