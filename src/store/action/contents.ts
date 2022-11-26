import { ContentActionTypes } from "../action-types";

interface GetMedia {
  type: ContentActionTypes.GET_MEDIA;
}

interface GetMediaSuccess {
  type: ContentActionTypes.GET_MEDIA_SUCCESS;
  payload: {
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
  };
}

interface GetMediaError {
  type: ContentActionTypes.GET_MEDIA_ERROR;
  payload: string | null;
}

export type ContentAction = GetMedia | GetMediaSuccess | GetMediaError;
