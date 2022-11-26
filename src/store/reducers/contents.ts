import { ContentActionTypes } from "../action-types";
import { ContentAction } from "../action/contents";

const { GET_MEDIA, GET_MEDIA_ERROR, GET_MEDIA_SUCCESS } = ContentActionTypes;

interface ContentState {
  loading: Boolean;
  error: string | null;
  tv: {
    id: string;
    title: string;
    path: string;
    published_year: number;
    category: string;
    rating: string;
    is_trending: boolean;
    is_recommended: boolean;
  }[];
  movies: {
    id: string;
    title: string;
    path: string;
    published_year: number;
    category: string;
    rating: string;
    is_trending: boolean;
    is_recommended: boolean;
  }[];
  trending: {
    id: string;
    title: string;
    path: string;
    published_year: number;
    category: string;
    rating: string;
    is_trending: boolean;
    is_recommended: boolean;
  }[];
  recommended: {
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
  loading: false,
  error: null,
  tv: [],
  movies: [],
  trending: [],
  recommended: [],
};

const contentReducer = (
  state: ContentState = initialState,
  action: ContentAction
): ContentState => {
  switch (action.type) {
    case GET_MEDIA:
      return { ...state, loading: true, error: null };
    case GET_MEDIA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        tv: action.payload.tv,
        movies: action.payload.movies,
        trending: action.payload.trending,
        recommended: action.payload.recommended,
      };
    case GET_MEDIA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        tv: [],
        movies: [],
        trending: [],
        recommended: [],
      };
    default:
      return state;
  }
};

export default contentReducer;
