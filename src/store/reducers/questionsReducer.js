import { ActionTypes } from "../actionTypes";

const initialState = {
  questions: [],
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_QUESTIONS_BY_TAG_NAME_START:
      return {
        ...state,
        loading: true,
        questions: [],
      };
    case ActionTypes.GET_QUESTIONS_BY_TAG_NAME:
      return {
        ...state,
        loading: false,
        questions: action.payload,
      };
    case ActionTypes.GET_QUESTIONS_BY_TAG_NAME_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionTypes.LOAD_MORE_QUESTIONS_START:
      return {
        ...state,
      };
    case ActionTypes.LOAD_MORE_QUESTIONS:
      return {
        ...state,
        questions: state.questions.length
          ? state.questions.concat(action.payload)
          : action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
