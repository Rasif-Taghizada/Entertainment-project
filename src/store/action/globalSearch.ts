import { GlobalSearchTypes } from "../action-types";

interface setSearchResult {
  type: GlobalSearchTypes.SET_SEARCH_RESULTS;
  payload: {
    query: string;
    data: {
      id: string;
      title: string;
      path: string;
      published_year: number;
      category: string;
      rating: string;
      is_trending: boolean;
      is_recommended: boolean;
    }[];
  };
}

export type GlobalSearchAction = setSearchResult;
