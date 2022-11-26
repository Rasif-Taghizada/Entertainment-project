import { GlobalSearchAction } from "../action/globalSearch";
import { GlobalSearchTypes } from "../action-types";

interface GlobalSearchState {
  query: string;
  searchResults: {
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
  query: "",
  searchResults: [],
};

const globalSearchReducer = (
  state: GlobalSearchState = initialState,
  action: GlobalSearchAction
) => {
  switch (action.type) {
    case GlobalSearchTypes.SET_SEARCH_RESULTS:
      return {
        query: action.payload.query,
        searchResults: action.payload.data,
      };
    default:
      return state;
  }
};

export default globalSearchReducer;
