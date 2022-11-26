import { combineReducers } from "redux";
import contentReducer from "./contents";
import bookmarkReducer from "./bookmarks";
import globalSearchReducer from "./globalSearch";

const reducers = combineReducers({
  contents: contentReducer,
  bookmarks: bookmarkReducer,
  search: globalSearchReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
