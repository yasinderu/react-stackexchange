import axios from "axios";
import { ActionTypes } from "../actionTypes";

export const getTags = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionTypes.GET_TAGS_START });
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/tags`,
        params: {
          pageSize: 10,
          order: "desc",
          sort: "popular",
          site: "stackoverflow",
        },
      });

      if (res.status === 200) {
        dispatch({ type: ActionTypes.GET_TAGS, payload: res.data.items });
      } else {
        dispatch({
          type: ActionTypes.GET_TAGS_FAILED,
          payload: "Something went wrong",
        });
      }
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_TAGS_FAILED,
        payload: error,
      });
    }
  };
};
