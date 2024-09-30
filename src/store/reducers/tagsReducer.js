import { ActionTypes } from "../actionTypes";

const initialState = {
  tags: [],
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TAGS_START:
      return {
        ...state,
        loading: true,
        tags: [],
      };
    case ActionTypes.GET_TAGS:
      return {
        ...state,
        tags: action.payload,
        loading: false,
      };
    case ActionTypes.GET_TAGS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
