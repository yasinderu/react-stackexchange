import axios from "axios";
import { ActionTypes } from "../actionTypes";

export const getQuestions = (tagName, page, isLoadMore) => {
  return async (dispatch) => {
    try {
      if (isLoadMore) {
        dispatch({ type: ActionTypes.LOAD_MORE_QUESTIONS_START });
      } else {
        dispatch({ type: ActionTypes.GET_QUESTIONS_BY_TAG_NAME_START });
      }
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/questions`,
        params: {
          pageSize: 20,
          page: isLoadMore ? page : 1,
          order: "desc",
          sort: "activity",
          tagged: tagName,
          site: "stackoverflow",
        },
      });

      if (res.status === 200) {
        if (isLoadMore) {
          dispatch({
            type: ActionTypes.LOAD_MORE_QUESTIONS,
            payload: res.data.items,
          });
        } else {
          dispatch({
            type: ActionTypes.GET_QUESTIONS_BY_TAG_NAME,
            payload: res.data.items,
          });
        }
      } else {
        dispatch({
          type: ActionTypes.GET_TAGS_FAILED,
          payload: "Something went wrong",
        });
      }
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_QUESTIONS_BY_TAG_NAME_FAILED,
        payload: error,
      });
    }
  };
};
