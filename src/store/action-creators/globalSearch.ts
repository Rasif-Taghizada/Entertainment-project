import { GlobalSearchTypes } from "../action-types";

interface mediaData {
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
}

export const setSearchResult = (data: mediaData) => {
  return { type: GlobalSearchTypes.SET_SEARCH_RESULTS, payload: data };
};
