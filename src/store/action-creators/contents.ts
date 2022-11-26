import axios from "axios";
import { Dispatch } from "redux"; //dispatch type
import { ContentActionTypes } from "../action-types";
import { ContentAction } from "../action/contents";

interface mediaData {
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
}

export const getMedia = () => {
  return async (dispatch: Dispatch<ContentAction>) => {
    dispatch({ type: ContentActionTypes.GET_MEDIA });

    try {
      const { data } = await axios.get<mediaData>("../../data/media.json");

      //get all trending media
      const trending = [...data.tv, ...data.movies].filter(
        (media) => media.is_trending
      );

      //sort by published year
      trending.sort((a, b) => {
        return a.published_year - b.published_year;
      });

      //get all recommended media
      const recommended = [...data.tv, ...data.movies].filter(
        (media) => media.is_recommended
      );

      //sort by published year
      recommended.sort((a, b) => {
        return a.published_year - b.published_year;
      });

      const myPayload = {
        ...data,
        trending,
        recommended,
      };

      dispatch({
        type: ContentActionTypes.GET_MEDIA_SUCCESS,
        payload: myPayload,
      });
    } catch (err) {
      dispatch({
        type: ContentActionTypes.GET_MEDIA_ERROR,
        payload: err instanceof Error ? err.message : "",
      });
    }
  };
};
